/**
 * CURA NATURA Pro - Custom Protocol & Printable Kit Generator
 */

import { EMERGENCY_KITS } from './data/kitsData.js';
import { REMEDIES_DATA } from './data/remediesData.js';

export class KitBuilder {
  constructor() {
    this.customKit = this.loadCustomKit() || {
      name: "Il Mio Kit d'Emergenza Famiglia",
      remedyIds: ["arnica-montana", "aconitum-napellus", "belladonna", "chamomilla", "nux-vomica"],
      notes: "Kit di primo soccorso per casa e bambini.",
      emergencyPhone: ""
    };
  }

  loadCustomKit() {
    try {
      const saved = localStorage.getItem('curanatura_custom_kit');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }

  saveCustomKit() {
    try {
      localStorage.setItem('curanatura_custom_kit', JSON.stringify(this.customKit));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }

  toggleRemedy(remedyId) {
    const idx = this.customKit.remedyIds.indexOf(remedyId);
    if (idx >= 0) {
      this.customKit.remedyIds.splice(idx, 1);
    } else {
      this.customKit.remedyIds.push(remedyId);
    }
    this.saveCustomKit();
    return this.customKit;
  }

  getCustomKitRemedies() {
    const remedyMap = new Map(REMEDIES_DATA.map(r => [r.id, r]));
    return this.customKit.remedyIds.map(id => remedyMap.get(id)).filter(Boolean);
  }

  generatePrintableHTML(kitOrCustom) {
    let title = "";
    let remediesList = [];
    let tagline = "";
    let rules = [];

    if (kitOrCustom.id) {
      // It's a predefined kit
      title = kitOrCustom.title;
      tagline = kitOrCustom.tagline;
      rules = kitOrCustom.rules || [];
      const remedyMap = new Map(REMEDIES_DATA.map(r => [r.id, r]));
      remediesList = kitOrCustom.remedies.map(item => {
        const full = remedyMap.get(item.id);
        return {
          name: full ? full.name : item.id,
          commonName: full ? full.commonName : "",
          potency: item.potency,
          note: item.note,
          icon: full ? full.icon : "🌿"
        };
      });
    } else {
      // It's the user's custom kit
      title = this.customKit.name;
      tagline = this.customKit.notes || "Protocollo personalizzato generato con CURA NATURA Pro";
      rules = [
        "In acuto: 3 granuli ogni 15-30 minuti, diradando al miglioramento.",
        "Non toccare i granuli con le mani. Evitare menta e caffè forte.",
        "Per bambini e neonati: sciogliere 3 granuli in 50ml di acqua oligominerale."
      ];
      remediesList = this.getCustomKitRemedies().map(r => ({
        name: r.name,
        commonName: r.commonName,
        potency: r.potencies.split('.')[0] || "30CH",
        note: r.essence,
        icon: r.icon
      }));
    }

    return `
      <div class="print-protocol-page">
        <header class="print-header">
          <div class="print-brand">
            <span class="print-logo">🌿</span>
            <div>
              <h1 class="print-main-title">CURA NATURA Pro</h1>
              <p class="print-subtitle">Scheda d'Emergenza Omeopatica per Frigorifero & Viaggi</p>
            </div>
          </div>
          <div class="print-meta">
            <span class="print-date">Data: ${new Date().toLocaleDateString('it-IT')}</span>
            ${this.customKit.emergencyPhone ? `<span class="print-phone">Emergenza: ${this.customKit.emergencyPhone}</span>` : ''}
          </div>
        </header>

        <section class="print-kit-info">
          <h2 class="print-kit-title">${title}</h2>
          <p class="print-kit-tagline">${tagline}</p>
        </section>

        <table class="print-table">
          <thead>
            <tr>
              <th style="width: 25%;">Rimedio</th>
              <th style="width: 18%;">Potenza Consigliata</th>
              <th style="width: 57%;">Indicazione Clinica d'Emergenza</th>
            </tr>
          </thead>
          <tbody>
            ${remediesList.map(r => `
              <tr>
                <td>
                  <strong>${r.icon} ${r.name}</strong><br>
                  <small class="print-common">${r.commonName}</small>
                </td>
                <td class="print-potency"><code>${r.potency}</code></td>
                <td>${r.note}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <footer class="print-footer">
          <div class="print-rules-box">
            <h4>⚠️ Regole d'Oro di Somministrazione:</h4>
            <ul>
              ${rules.map(rule => `<li>${rule}</li>`).join('')}
            </ul>
          </div>
          <p class="print-disclaimer">
            * Questa scheda è una guida rapida di pronto intervento olistico. In caso di sintomi gravi, persistenti o peggioramento, consultare tempestivamente un medico.
          </p>
        </footer>
      </div>
    `;
  }

  printKit(kitOrCustom) {
    const printContainer = document.getElementById('print-container');
    if (printContainer) {
      printContainer.innerHTML = this.generatePrintableHTML(kitOrCustom);
      window.print();
    }
  }
}
