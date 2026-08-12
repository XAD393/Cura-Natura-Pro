/**
 * CURA NATURA Pro - Audio Synthesis & Emergency Remedy Voiceover
 */

export class AudioGuide {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.currentUtterance = null;
    this.isPlaying = false;
    this.currentRemedyId = null;
    this.onStateChangeCallback = null;
  }

  isSupported() {
    return 'speechSynthesis' in window;
  }

  onStateChange(callback) {
    this.onStateChangeCallback = callback;
  }

  notifyState() {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback({
        isPlaying: this.isPlaying,
        currentRemedyId: this.currentRemedyId
      });
    }
  }

  speakRemedy(remedy) {
    if (!this.isSupported()) {
      alert("La sintesi vocale non è supportata su questo browser.");
      return;
    }

    if (this.isPlaying && this.currentRemedyId === remedy.id) {
      this.stop();
      return;
    }

    this.stop();

    const textToSpeak = remedy.audioSnippet || `${remedy.name}. ${remedy.essence} Modalità principali: peggiora con ${remedy.modalities.worse.join(', ')}, migliora con ${remedy.modalities.better.join(', ')}.`;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'it-IT';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    // Pick Italian voice if available
    const voices = this.synth.getVoices();
    const itVoice = voices.find(v => v.lang.startsWith('it'));
    if (itVoice) {
      utterance.voice = itVoice;
    }

    utterance.onstart = () => {
      this.isPlaying = true;
      this.currentRemedyId = remedy.id;
      this.notifyState();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.currentRemedyId = null;
      this.notifyState();
    };

    utterance.onerror = () => {
      this.isPlaying = false;
      this.currentRemedyId = null;
      this.notifyState();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth && this.synth.speaking) {
      this.synth.cancel();
    }
    this.isPlaying = false;
    this.currentRemedyId = null;
    this.notifyState();
  }
}
