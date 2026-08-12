/**
 * CURA NATURA Pro - Offline Symptom & Remedy Consultation Tracker
 */

export class ConsultationTracker {
  constructor() {
    this.storageKey = 'curanatura_consultation_logs';
    this.logs = this.loadLogs();
  }

  loadLogs() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveLogs() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.logs));
    } catch (e) {
      console.warn("Error saving logs", e);
    }
  }

  addLog(entry) {
    const newLog = {
      id: 'log_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      timestamp: new Date().toISOString(),
      patientName: entry.patientName || "Familiare",
      symptom: entry.symptom || "",
      remedy: entry.remedy || "",
      potency: entry.potency || "30CH",
      frequency: entry.frequency || "3 granuli ogni 2 ore",
      outcome: entry.outcome || "in-corso", // in-corso, migliorato, risolto, invariato
      notes: entry.notes || ""
    };
    this.logs.unshift(newLog);
    this.saveLogs();
    return newLog;
  }

  updateOutcome(logId, newOutcome) {
    const item = this.logs.find(l => l.id === logId);
    if (item) {
      item.outcome = newOutcome;
      this.saveLogs();
    }
    return this.logs;
  }

  deleteLog(logId) {
    this.logs = this.logs.filter(l => l.id !== logId);
    this.saveLogs();
    return this.logs;
  }

  clearAll() {
    this.logs = [];
    this.saveLogs();
  }
}
