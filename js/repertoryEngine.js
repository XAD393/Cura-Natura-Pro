/**
 * CURA NATURA Pro - Repertory Matching Algorithm
 * Evaluates symptoms, polarities, modalities and ranks remedies with clinical confidence scoring.
 */

import { SYMPTOM_SYSTEMS, MODALITIES_POLARITY } from './data/rubricsData.js';
import { REMEDIES_DATA } from './data/remediesData.js';

export class RepertoryEngine {
  constructor() {
    this.selectedSymptoms = new Set();
    this.selectedModalities = new Set();
  }

  toggleSymptom(symptomId) {
    if (this.selectedSymptoms.has(symptomId)) {
      this.selectedSymptoms.delete(symptomId);
    } else {
      this.selectedSymptoms.add(symptomId);
    }
    return this.calculate();
  }

  toggleModality(modalityId) {
    if (this.selectedModalities.has(modalityId)) {
      this.selectedModalities.delete(modalityId);
    } else {
      this.selectedModalities.add(modalityId);
    }
    return this.calculate();
  }

  clearSelections() {
    this.selectedSymptoms.clear();
    this.selectedModalities.clear();
    return [];
  }

  getSelectedCount() {
    return this.selectedSymptoms.size + this.selectedModalities.size;
  }

  calculate() {
    if (this.selectedSymptoms.size === 0 && this.selectedModalities.size === 0) {
      return [];
    }

    const scores = {};
    const matches = {}; // remedyId -> array of matched criteria descriptions
    let maxPossibleScore = 0;

    // 1. Process selected symptoms
    for (const sys of SYMPTOM_SYSTEMS) {
      for (const sym of sys.symptoms) {
        if (this.selectedSymptoms.has(sym.id)) {
          maxPossibleScore += 3;
          for (const [remedyId, weight] of Object.entries(sym.remedies)) {
            if (!scores[remedyId]) {
              scores[remedyId] = 0;
              matches[remedyId] = [];
            }
            scores[remedyId] += weight;
            matches[remedyId].push({
              type: 'symptom',
              label: sym.label,
              weight: weight
            });
          }
        }
      }
    }

    // 2. Process selected modalities
    for (const group of MODALITIES_POLARITY) {
      for (const opt of group.options) {
        if (this.selectedModalities.has(opt.id)) {
          maxPossibleScore += 3;
          for (const [remedyId, weight] of Object.entries(opt.remedies)) {
            if (!scores[remedyId]) {
              scores[remedyId] = 0;
              matches[remedyId] = [];
            }
            scores[remedyId] += weight;
            matches[remedyId].push({
              type: 'modality',
              label: opt.label,
              weight: weight
            });
          }
        }
      }
    }

    // 3. Map to remedy objects, compute confidence percentages and sort
    const results = [];
    const remedyMap = new Map(REMEDIES_DATA.map(r => [r.id, r]));

    for (const [remedyId, rawScore] of Object.entries(scores)) {
      const remedy = remedyMap.get(remedyId);
      if (!remedy) continue;

      // Confidence formula: (rawScore / maxPossibleScore) normalized with bonus for high-grade multi-matches
      const matchCount = matches[remedyId].length;
      const coverageRatio = matchCount / Math.max(1, this.getSelectedCount());
      const rawPercent = (rawScore / Math.max(1, maxPossibleScore)) * 100;
      const confidence = Math.min(99, Math.round(rawPercent * 0.6 + coverageRatio * 40));

      results.push({
        remedy,
        score: rawScore,
        confidence: Math.max(15, confidence),
        matchCount,
        matches: matches[remedyId]
      });
    }

    // Sort descending by score, then confidence
    results.sort((a, b) => b.score - a.score || b.confidence - a.confidence);

    return results;
  }
}
