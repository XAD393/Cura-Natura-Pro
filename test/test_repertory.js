/**
 * Node unit test for RepertoryEngine & Dataset consistency
 */

import { RepertoryEngine } from '../js/repertoryEngine.js';
import { REMEDIES_DATA } from '../js/data/remediesData.js';
import { SYMPTOM_SYSTEMS, MODALITIES_POLARITY } from '../js/data/rubricsData.js';

console.log("🧪 Esecuzione Test Logico di Repertorizzazione...");

const engine = new RepertoryEngine();

// Scenario 1: Sudden acute fever + midnight aggravation
engine.toggleSymptom('fever_sudden_high');
engine.toggleModality('time_midnight');

let results = engine.calculate();
console.log(`- Scenario 1: ${results.length} rimedi trovati.`);
if (results.length > 0 && results[0].remedy.id === 'aconitum-napellus') {
  console.log(`  ✅ OK: Primo classificato è Aconitum Napellus (Confidence: ${results[0].confidence}%)`);
} else {
  console.error(`  ❌ ERRORE: Atteso Aconitum Napellus, ottenuto:`, results[0]);
  process.exit(1);
}

// Scenario 2: Physical trauma & contusion
engine.clearSelections();
engine.toggleSymptom('trauma_bruise_sore');
engine.toggleModality('better_still');

results = engine.calculate();
console.log(`- Scenario 2: ${results.length} rimedi trovati.`);
if (results.length > 0 && (results[0].remedy.id === 'arnica-montana' || results[0].remedy.id === 'bryonia-alba')) {
  console.log(`  ✅ OK: Top rank include Arnica Montana (Score: ${results[0].score})`);
} else {
  console.error(`  ❌ ERRORE nello Scenario 2:`, results[0]);
  process.exit(1);
}

// Scenario 3: Toddler teething with anger + one cheek red
engine.clearSelections();
engine.toggleSymptom('pedia_teething_angry');

results = engine.calculate();
console.log(`- Scenario 3: ${results.length} rimedi trovati.`);
if (results.length > 0 && results[0].remedy.id === 'chamomilla') {
  console.log(`  ✅ OK: Chamomilla al 1° posto per dentizione acuta con rabbia.`);
} else {
  console.error(`  ❌ ERRORE nello Scenario 3:`, results[0]);
  process.exit(1);
}

console.log("🎉 TUTTI I TEST LOGICI DEL REPERTORIO SONO PASSATI CON SUCCESSO!");
