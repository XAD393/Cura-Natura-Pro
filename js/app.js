/**
 * CURA NATURA Pro - Main Application Controller
 */

import { REMEDIES_DATA, CATEGORIES } from './data/remediesData.js';
import { SYMPTOM_SYSTEMS, MODALITIES_POLARITY } from './data/rubricsData.js';
import { EMERGENCY_KITS } from './data/kitsData.js';
import { RepertoryEngine } from './repertoryEngine.js';
import { POTENCY_GUIDE, WET_DOSING_STEPS, ANTIDOTE_RULES } from './dosageCalculator.js';
import { KitBuilder } from './kitBuilder.js';
import { AudioGuide } from './audioGuide.js';
import { ConsultationTracker } from './tracker.js';
import { StripeManager } from './stripeCheckout.js';

class App {
  constructor() {
    this.repertoryEngine = new RepertoryEngine();
    this.kitBuilder = new KitBuilder();
    this.audioGuide = new AudioGuide();
    this.tracker = new ConsultationTracker();
    this.stripe = new StripeManager();

    this.currentTab = 'repertory';
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.currentTheme = localStorage.getItem('curanatura_theme') || 'light';

    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.bindEvents();
    this.renderCategoryChips();
    this.renderRemedies();
    this.renderRepertorySystems();
    this.renderDosageSection();
    this.renderKitsSection();
    this.renderTrackerLogs();
    this.updateProUIState();

    // Audio status listener
    this.audioGuide.onStateChange(state => {
      this.updateAudioButtonsUI(state);
    });

    // Pro status listener
    this.stripe.onProStatusChange(() => {
      this.updateProUIState();
      this.renderRemedies();
      this.updateRepertoryResults();
    });

    console.log("🌿 CURA NATURA Pro ready & verified.");
  }

  /* ---------------- Theme & UI Helpers ---------------- */
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('curanatura_theme', theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    this.showToast(this.currentTheme === 'dark' ? "Modalità Notte attivata" : "Modalità Giorno attivata");
  }

  showToast(message, icon = "🌿") {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  normalizeStr(str) {
    return (str || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }

  /* ---------------- Navigation Router ---------------- */
  switchTab(tabId) {
    this.currentTab = tabId;
    
    // Update active nav buttons
    document.querySelectorAll('.nav-item-btn, .mobile-nav-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Update active pane
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------------- Event Bindings ---------------- */
  bindEvents() {
    // Navigation events
    document.querySelectorAll('[data-tab]').forEach(elem => {
      elem.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        if (tab) this.switchTab(tab);
      });
    });

    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Search input
    const searchInput = document.getElementById('materia-search-input');
    const searchClear = document.getElementById('search-clear-btn');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = this.normalizeStr(e.target.value);
        this.renderRemedies();
      });
    }
    if (searchClear && searchInput) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        this.searchQuery = '';
        this.renderRemedies();
      });
    }

    // Clear repertory button
    const clearRepBtn = document.getElementById('clear-repertory-btn');
    if (clearRepBtn) {
      clearRepBtn.addEventListener('click', () => {
        this.repertoryEngine.clearSelections();
        
        // Reset all symptom items
        document.querySelectorAll('.symptom-item-check').forEach(item => {
          item.classList.remove('checked');
          item.setAttribute('aria-checked', 'false');
          const box = item.querySelector('.symptom-custom-box');
          if (box) box.textContent = '';
        });

        // Reset all polarity pills
        document.querySelectorAll('.polarity-pill').forEach(pill => {
          pill.classList.remove('checked');
          pill.setAttribute('aria-checked', 'false');
        });

        // Reset all counters
        document.querySelectorAll('.system-badge-counter').forEach(counter => {
          counter.textContent = '0';
          counter.classList.remove('active');
        });

        this.updateRepertoryResults();
        this.showToast("Repertorio azzerato");
      });
    }

    // Paywall modal events
    const openPaywallBtns = document.querySelectorAll('.open-paywall-trigger');
    openPaywallBtns.forEach(btn => {
      btn.addEventListener('click', () => this.openPaywallModal());
    });

    const closePaywallBtn = document.getElementById('paywall-modal-close');
    if (closePaywallBtn) {
      closePaywallBtn.addEventListener('click', () => this.closePaywallModal());
    }

    // Direct Stripe Checkout action
    const stripePayBtn = document.getElementById('stripe-checkout-btn');
    if (stripePayBtn) {
      stripePayBtn.addEventListener('click', async () => {
        const res = await this.stripe.startStripeCheckout();
        if (res && res.mode === 'simulate') {
          // Instant simulation unlock for demonstration
          this.stripe.activatePro("SIMULATED_TEST_TOKEN", "cliente@esempio.it");
          this.closePaywallModal();
          this.showToast("🎉 Pagamento simulato confermato! Accesso PRO illimitato attivato!", "💎");
        }
      });
    }

    // Promo code apply
    const promoApplyBtn = document.getElementById('promo-code-apply-btn');
    const promoInput = document.getElementById('promo-code-input');
    if (promoApplyBtn && promoInput) {
      promoApplyBtn.addEventListener('click', async () => {
        const res = await this.stripe.validatePromoCode(promoInput.value);
        if (res.success) {
          this.closePaywallModal();
          this.showToast(res.message, "🎉");
        } else {
          alert(res.message);
        }
      });
    }

    // Close detail modal
    const closeDetailBtn = document.getElementById('detail-modal-close');
    if (closeDetailBtn) {
      closeDetailBtn.addEventListener('click', () => this.closeDetailModal());
    }

    // Close on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeDetailModal();
          this.closePaywallModal();
        }
      });
    });

    // Custom Kit Form submit
    const customKitForm = document.getElementById('custom-kit-form');
    if (customKitForm) {
      customKitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('custom-kit-name').value;
        const notes = document.getElementById('custom-kit-notes').value;
        const phone = document.getElementById('custom-kit-phone').value;

        this.kitBuilder.customKit.name = name;
        this.kitBuilder.customKit.notes = notes;
        this.kitBuilder.customKit.emergencyPhone = phone;
        this.kitBuilder.saveCustomKit();

        this.kitBuilder.printKit(this.kitBuilder.customKit);
        this.showToast("Scheda d'Emergenza inviata alla stampa/PDF!", "🖨️");
      });
    }

    // Tracker add form
    const addLogForm = document.getElementById('add-log-form');
    if (addLogForm) {
      addLogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const patientName = document.getElementById('log-patient').value;
        const symptom = document.getElementById('log-symptom').value;
        const remedy = document.getElementById('log-remedy').value;
        const potency = document.getElementById('log-potency').value;
        const notes = document.getElementById('log-notes').value;

        this.tracker.addLog({ patientName, symptom, remedy, potency, notes });
        this.renderTrackerLogs();
        addLogForm.reset();
        this.showToast("Episodio registrato nel diario clinico", "📝");
      });
    }
  }

  /* ---------------- Materia Medica Section ---------------- */
  renderCategoryChips() {
    const container = document.getElementById('category-chips-container');
    if (!container) return;

    container.innerHTML = CATEGORIES.map(cat => `
      <button class="category-chip ${this.currentCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
        <span>${cat.icon}</span>
        <span>${cat.name}</span>
      </button>
    `).join('');

    container.querySelectorAll('.category-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentCategory = e.currentTarget.dataset.cat;
        container.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.renderRemedies();
      });
    });
  }

  renderRemedies() {
    const container = document.getElementById('remedies-grid');
    if (!container) return;

    let filtered = REMEDIES_DATA;

    // Filter by category
    if (this.currentCategory !== 'all') {
      filtered = filtered.filter(r => r.category === this.currentCategory);
    }

    // Filter by search query
    if (this.searchQuery) {
      filtered = filtered.filter(r => {
        const nameN = this.normalizeStr(r.name);
        const commonN = this.normalizeStr(r.commonName);
        const essenceN = this.normalizeStr(r.essence);
        const keynotesN = r.keynotes.map(k => this.normalizeStr(k)).join(' ');
        const worseN = r.modalities.worse.map(w => this.normalizeStr(w)).join(' ');
        const betterN = r.modalities.better.map(b => this.normalizeStr(b)).join(' ');

        return nameN.includes(this.searchQuery) ||
               commonN.includes(this.searchQuery) ||
               essenceN.includes(this.searchQuery) ||
               keynotesN.includes(this.searchQuery) ||
               worseN.includes(this.searchQuery) ||
               betterN.includes(this.searchQuery);
      });
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1rem; color: var(--text-muted);">
          <p style="font-size: 2.8rem; margin-bottom: 0.5rem;">🔍</p>
          <h3 style="color: var(--text-primary);">Nessun rimedio trovato</h3>
          <p style="font-size: 0.9rem;">Prova a cercare con un altro termine o seleziona "Tutti i Rimedi".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(r => {
      const isLocked = !r.isFree && !this.stripe.isPro;
      return `
        <div class="remedy-card" data-remedy-id="${r.id}">
          <div class="card-header-row">
            <div class="card-icon-title">
              <div class="remedy-icon-box">${r.icon}</div>
              <div>
                <h3 class="remedy-name">${r.name}</h3>
                <div class="remedy-common-name">${r.commonName}</div>
              </div>
            </div>
            <span class="badge-tag ${isLocked ? 'pro-badge' : ''}">${isLocked ? '🔒 PRO' : r.badge}</span>
          </div>

          <p class="remedy-essence-text">${r.essence}</p>

          <div class="card-footer-row">
            <button class="audio-btn" data-audio-remedy="${r.id}" title="Ascolta sintesi vocale">
              <span>🔊</span> <span>Audio</span>
            </button>
            <button class="btn btn-secondary btn-sm open-detail-btn" data-detail-id="${r.id}">
              ${isLocked ? 'Sblocca Scheda' : 'Visualizza Scheda →'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Bind card clicks
    container.querySelectorAll('.open-detail-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.dataset.detailId;
        this.openRemedyDetail(id);
      });
    });

    container.querySelectorAll('.remedy-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.audio-btn')) return;
        const id = card.dataset.remedyId;
        this.openRemedyDetail(id);
      });
    });

    // Bind audio buttons
    container.querySelectorAll('.audio-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.dataset.audioRemedy;
        const remedy = REMEDIES_DATA.find(r => r.id === id);
        if (remedy) {
          this.audioGuide.speakRemedy(remedy);
        }
      });
    });
  }

  openRemedyDetail(remedyId) {
    const remedy = REMEDIES_DATA.find(r => r.id === remedyId);
    if (!remedy) return;

    if (!remedy.isFree && !this.stripe.isPro) {
      this.openPaywallModal(remedy.name);
      return;
    }

    const modal = document.getElementById('detail-modal');
    const content = document.getElementById('detail-modal-body');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1.25rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 2.3rem;">${remedy.icon}</span>
          <div>
            <h2 style="font-family: var(--font-serif); color: var(--emerald-800); font-size: 1.65rem; margin: 0;">${remedy.name}</h2>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0;">${remedy.latinName} • <em>${remedy.commonName}</em></p>
          </div>
        </div>
        <button class="audio-btn" id="modal-audio-btn" style="padding: 0.5rem 1rem;">
          <span>🔊</span> <span>Ascolta Guida</span>
        </button>
      </div>

      <div style="background: var(--emerald-50); border-left: 4px solid var(--emerald-600); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem;">
        <strong style="color: var(--emerald-900);">Fonte & Origine:</strong> ${remedy.source}<br>
        <strong style="color: var(--emerald-900);">Quadro Essenziale:</strong> ${remedy.essence}
      </div>

      <h3 style="font-size: 1.15rem; color: var(--emerald-800); margin-bottom: 0.5rem;">🔑 Sintomi Chiave (Keynotes)</h3>
      <ul style="padding-left: 1.25rem; margin-bottom: 1.5rem; color: var(--text-primary); display: flex; flex-direction: column; gap: 0.4rem;">
        ${remedy.keynotes.map(k => `<li>${k}</li>`).join('')}
      </ul>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: rgba(192, 57, 43, 0.08); border: 1px solid rgba(192, 57, 43, 0.2); padding: 1rem; border-radius: var(--radius-sm);">
          <h4 style="color: #C0392B; font-size: 0.95rem; margin-bottom: 0.4rem;">🔴 Aggravamento (&lt;)</h4>
          <ul style="font-size: 0.88rem; padding-left: 1.1rem; color: var(--text-secondary);">
            ${remedy.modalities.worse.map(w => `<li>${w}</li>`).join('')}
          </ul>
        </div>
        <div style="background: rgba(46, 139, 110, 0.08); border: 1px solid rgba(46, 139, 110, 0.2); padding: 1rem; border-radius: var(--radius-sm);">
          <h4 style="color: var(--emerald-600); font-size: 0.95rem; margin-bottom: 0.4rem;">🟢 Miglioramento (&gt;)</h4>
          <ul style="font-size: 0.88rem; padding-left: 1.1rem; color: var(--text-secondary);">
            ${remedy.modalities.better.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>

      <h3 style="font-size: 1.15rem; color: var(--emerald-800); margin-bottom: 0.5rem;">🧠 Sfera Mentale & Emotiva</h3>
      <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">${remedy.mind}</p>

      <h3 style="font-size: 1.15rem; color: var(--emerald-800); margin-bottom: 0.5rem;">💊 Potenze Consigliate & Posologia</h3>
      <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;"><code>${remedy.potencies}</code></p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: var(--gold-50); border: 1px solid var(--gold-400); padding: 1rem; border-radius: var(--radius-sm);">
          <h4 style="color: #996515; font-size: 0.92rem; margin-bottom: 0.3rem;">👶 Uso nei Bambini</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${remedy.pediatric || "Applicabile secondo le diluizioni pediatriche in acqua."}</p>
        </div>
        <div style="background: rgba(106, 27, 154, 0.08); border: 1px solid rgba(106, 27, 154, 0.25); padding: 1rem; border-radius: var(--radius-sm);">
          <h4 style="color: #6A1B9A; font-size: 0.92rem; margin-bottom: 0.3rem;">🐾 Uso negli Animali</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${remedy.pets || "Sciogliere in acqua e somministrare con siringa senz'ago."}</p>
        </div>
      </div>

      <div style="font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 0.75rem;">
        <strong>Antidoti e Incompatibilità:</strong> ${remedy.antidotes ? remedy.antidotes.join(', ') : 'Nessuno specifico documentato.'}
      </div>
    `;

    const modalAudioBtn = document.getElementById('modal-audio-btn');
    if (modalAudioBtn) {
      modalAudioBtn.addEventListener('click', () => {
        this.audioGuide.speakRemedy(remedy);
      });
    }

    document.body.classList.add('modal-open');
    modal.classList.add('open');
  }

  closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    if (modal) modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    this.audioGuide.stop();
  }

  /* ---------------- Repertory Matrix Section ---------------- */
  renderRepertorySystems() {
    const container = document.getElementById('repertory-systems-accordion');
    if (!container) return;

    // Render systems initial structure (all start closed by default)
    container.innerHTML = SYMPTOM_SYSTEMS.map(sys => {
      return `
        <div class="system-card" data-sys-id="${sys.id}">
          <div class="system-card-header" role="button" aria-expanded="false" tabindex="0">
            <div class="system-title-group">
              <span>${sys.icon}</span>
              <span>${sys.name}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="system-badge-counter">0</span>
              <span class="system-chevron">▼</span>
            </div>
          </div>
          <div class="system-symptoms-list">
            ${sys.symptoms.map(sym => {
              return `
                <div class="symptom-item-check" data-sym-id="${sym.id}" data-sys-parent="${sys.id}" role="checkbox" aria-checked="false" tabindex="0">
                  <div class="symptom-custom-box"></div>
                  <span>${sym.label}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');

    // Bind Accordion Header Toggles
    container.querySelectorAll('.system-card-header').forEach(header => {
      const toggleAccordion = () => {
        const card = header.closest('.system-card');
        const isOpen = card.classList.toggle('open');
        header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      };

      header.addEventListener('click', toggleAccordion);
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleAccordion();
        }
      });
    });

    // Bind Symptom Clicks with targeted DOM updates (NO full accordion re-render!)
    container.querySelectorAll('.symptom-item-check').forEach(item => {
      const toggleSymptomItem = () => {
        const symId = item.dataset.symId;
        const sysParentId = item.dataset.sysParent;
        
        // 1. Update engine state
        this.repertoryEngine.toggleSymptom(symId);
        const isChecked = this.repertoryEngine.selectedSymptoms.has(symId);

        // 2. Update item UI directly
        item.classList.toggle('checked', isChecked);
        item.setAttribute('aria-checked', isChecked ? 'true' : 'false');
        const box = item.querySelector('.symptom-custom-box');
        if (box) box.textContent = isChecked ? '✓' : '';

        // 3. Update parent badge counter directly without touching open/closed state
        const sysObj = SYMPTOM_SYSTEMS.find(s => s.id === sysParentId);
        if (sysObj) {
          const count = sysObj.symptoms.filter(s => this.repertoryEngine.selectedSymptoms.has(s.id)).length;
          const parentCard = item.closest('.system-card');
          if (parentCard) {
            const counter = parentCard.querySelector('.system-badge-counter');
            if (counter) {
              counter.textContent = count;
              counter.classList.toggle('active', count > 0);
            }
          }
        }

        // 4. Recalculate results
        this.updateRepertoryResults();
      };

      item.addEventListener('click', toggleSymptomItem);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSymptomItem();
        }
      });
    });

    // Render Modalities & Polarities
    this.renderPolarities();
  }

  renderPolarities() {
    const container = document.getElementById('repertory-polarities-box');
    if (!container) return;

    container.innerHTML = MODALITIES_POLARITY.map(group => `
      <div class="polarity-group-wrapper">
        <h4 class="polarity-group-title">${group.title}</h4>
        <div class="polarity-options-grid">
          ${group.options.map(opt => {
            const isChecked = this.repertoryEngine.selectedModalities.has(opt.id);
            return `
              <div class="polarity-pill ${isChecked ? 'checked' : ''}" data-mod-id="${opt.id}" role="checkbox" aria-checked="${isChecked}" tabindex="0">
                ${opt.label}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.polarity-pill').forEach(pill => {
      const togglePill = () => {
        const modId = pill.dataset.modId;
        this.repertoryEngine.toggleModality(modId);
        const isChecked = this.repertoryEngine.selectedModalities.has(modId);
        pill.classList.toggle('checked', isChecked);
        pill.setAttribute('aria-checked', isChecked ? 'true' : 'false');
        this.updateRepertoryResults();
      };

      pill.addEventListener('click', togglePill);
      pill.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          togglePill();
        }
      });
    });
  }

  updateRepertoryResults() {
    const container = document.getElementById('repertory-results-list');
    const countBadge = document.getElementById('repertory-selected-count');
    if (!container) return;

    const count = this.repertoryEngine.getSelectedCount();
    if (countBadge) countBadge.textContent = count;

    const results = this.repertoryEngine.calculate();

    if (results.length === 0) {
      container.innerHTML = `
        <div class="empty-results-placeholder">
          <div class="empty-icon">🌿</div>
          <h4>Nessun sintomo selezionato</h4>
          <p>Seleziona i sintomi e le modalità del paziente dalla colonna a sinistra per calcolare la repertorizzazione in tempo reale.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = results.map((res, index) => {
      const isTop = index === 0;
      const isLocked = !res.remedy.isFree && !this.stripe.isPro;

      return `
        <div class="match-result-card ${isTop ? 'top-rank' : ''}" data-remedy-id="${res.remedy.id}">
          <div class="match-top-row">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="match-rank-badge">#${index + 1}</span>
              <span style="font-size: 1.25rem;">${res.remedy.icon}</span>
              <strong style="font-size: 1.05rem; color: var(--emerald-900);">${res.remedy.name}</strong>
            </div>
            <div class="match-meter-container">
              <div class="match-meter-bar">
                <div class="match-meter-fill" style="width: ${res.confidence}%;"></div>
              </div>
              <span class="match-percentage">${res.confidence}% Match</span>
            </div>
          </div>

          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
            ${res.remedy.essence}
          </p>

          <div class="matched-tags-list">
            ${res.matches.map(m => `
              <span class="match-tag" title="Grado di corrispondenza: ${m.weight}">
                ${m.label.length > 40 ? m.label.substring(0, 40) + '...' : m.label}
              </span>
            `).join('')}
          </div>

          <div style="display: flex; justify-content: flex-end; margin-top: 0.75rem;">
            <button class="btn btn-secondary btn-sm" style="font-size: 0.78rem; padding: 0.35rem 0.75rem;">
              ${isLocked ? '🔒 Sblocca Scheda PRO' : 'Apri Dettaglio Clinico →'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.match-result-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.remedyId;
        this.openRemedyDetail(id);
      });
    });
  }

  /* ---------------- Dosage & Potency Section ---------------- */
  renderDosageSection() {
    const potencyContainer = document.getElementById('potency-guide-grid');
    const wetContainer = document.getElementById('wet-dosing-steps-list');
    const antidotesContainer = document.getElementById('antidotes-grid');

    if (potencyContainer) {
      potencyContainer.innerHTML = POTENCY_GUIDE.map(item => `
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.35rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.6rem;">
            <span style="font-size: 1.6rem;">${item.icon}</span>
            <span class="badge-tag">${item.badge}</span>
          </div>
          <h3 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--emerald-800); margin-bottom: 0.5rem;">${item.potency}</h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${item.indication}</p>
          <div style="background: var(--emerald-50); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.82rem; color: var(--emerald-900);">
            <strong>Posologia:</strong> ${item.frequency}<br>
            <strong>Durata:</strong> ${item.duration}
          </div>
        </div>
      `).join('');
    }

    if (wetContainer) {
      wetContainer.innerHTML = WET_DOSING_STEPS.map(step => `
        <div style="display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1rem;">
          <div style="width: 34px; height: 34px; border-radius: 50%; background: var(--emerald-700); color: #FFF; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">
            ${step.step}
          </div>
          <div>
            <h4 style="font-size: 0.95rem; color: var(--emerald-800); margin-bottom: 0.2rem;">${step.title}</h4>
            <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">${step.desc}</p>
          </div>
        </div>
      `).join('');
    }

    if (antidotesContainer) {
      antidotesContainer.innerHTML = ANTIDOTE_RULES.map(rule => `
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.15rem;">
          <div style="font-size: 1.8rem; margin-bottom: 0.4rem;">${rule.icon}</div>
          <h4 style="font-size: 0.95rem; color: var(--emerald-800); margin-bottom: 0.3rem;">${rule.name}</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">${rule.desc}</p>
        </div>
      `).join('');
    }
  }

  /* ---------------- Kits & Protocols Section ---------------- */
  renderKitsSection() {
    const container = document.getElementById('kits-template-grid');
    if (!container) return;

    container.innerHTML = EMERGENCY_KITS.map(kit => `
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
          <span style="font-size: 2.2rem;">${kit.icon}</span>
          <button class="btn btn-secondary btn-sm print-kit-btn" data-kit-id="${kit.id}">
            🖨️ Stampa Scheda PDF
          </button>
        </div>

        <h3 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--emerald-800); margin-bottom: 0.35rem;">${kit.title}</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1rem;">${kit.tagline}</p>

        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 1rem; flex-grow: 1;">
          <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">Rimedi Inclusi:</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
            ${kit.remedies.map(r => `
              <li style="display: flex; justify-content: space-between; align-items: center;">
                <strong>${r.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</strong>
                <code style="background: var(--emerald-100); color: var(--emerald-800); padding: 2px 6px; border-radius: 3px; font-size: 0.75rem;">${r.potency}</code>
              </li>
            `).join('')}
          </ul>
        </div>

        <button class="btn btn-primary print-kit-btn" data-kit-id="${kit.id}" style="width: 100%;">
          Genera Scheda per Frigorifero 📑
        </button>
      </div>
    `).join('');

    container.querySelectorAll('.print-kit-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const kitId = e.currentTarget.dataset.kitId;
        const kit = EMERGENCY_KITS.find(k => k.id === kitId);
        if (kit) {
          this.kitBuilder.printKit(kit);
        }
      });
    });

    // Populate custom kit remedies checkboxes
    const customRemediesBox = document.getElementById('custom-kit-remedies-selector');
    if (customRemediesBox) {
      customRemediesBox.innerHTML = REMEDIES_DATA.map(r => {
        const isChecked = this.kitBuilder.customKit.remedyIds.includes(r.id);
        return `
          <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; padding: 0.45rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); cursor: pointer; user-select: none;">
            <input type="checkbox" value="${r.id}" ${isChecked ? 'checked' : ''} class="custom-kit-checkbox">
            <span>${r.icon} ${r.name}</span>
          </label>
        `;
      }).join('');

      customRemediesBox.querySelectorAll('.custom-kit-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
          this.kitBuilder.toggleRemedy(e.target.value);
        });
      });
    }
  }

  /* ---------------- Consultation Tracker Section ---------------- */
  renderTrackerLogs() {
    const container = document.getElementById('tracker-logs-list');
    if (!container) return;

    if (this.tracker.logs.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📖</div>
          <h4>Nessuna consultazione registrata</h4>
          <p style="font-size: 0.88rem;">Usa il modulo a sinistra per salvare i sintomi del tuo familiare, il rimedio somministrato e seguirne l'evoluzione.</p>
        </div>
      `;
      return;
    }

    const outcomeLabels = {
      'risolto': { label: '🟢 Risolto', bg: '#E8F5E9', text: '#2E7D32' },
      'migliorato': { label: '🟡 In Miglioramento', bg: '#FFF8E1', text: '#F57F17' },
      'in-corso': { label: '⚪ In Corso', bg: '#ECEFF1', text: '#455A64' },
      'invariato': { label: '🔴 Invariato', bg: '#FFEBEE', text: '#C62828' }
    };

    container.innerHTML = this.tracker.logs.map(log => {
      const dateStr = new Date(log.timestamp).toLocaleDateString('it-IT', {
        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
      });
      const st = outcomeLabels[log.outcome] || outcomeLabels['in-corso'];
      return `
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 0.85rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <div>
              <strong style="color: var(--emerald-800); font-size: 1.05rem;">${log.patientName}</strong>
              <span style="font-size: 0.78rem; color: var(--text-muted); margin-left: 0.5rem;">${dateStr}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: var(--radius-full); background: ${st.bg}; color: ${st.text};">
                ${st.label}
              </span>
              <button class="delete-log-btn" data-log-id="${log.id}" style="background: none; border: none; color: #C0392B; cursor: pointer; font-size: 0.95rem;" title="Elimina voce">
                🗑️
              </button>
            </div>
          </div>

          <div style="font-size: 0.9rem; margin-bottom: 0.4rem;">
            <strong>Sintomo:</strong> ${log.symptom}
          </div>
          <div style="font-size: 0.9rem; margin-bottom: 0.4rem;">
            <strong>Rimedio:</strong> <span style="color: var(--emerald-700); font-weight: 600;">${log.remedy}</span> (${log.potency})
          </div>
          ${log.notes ? `<div style="font-size: 0.85rem; color: var(--text-secondary); background: var(--emerald-50); padding: 0.5rem; border-radius: 4px; margin-top: 0.5rem;"><em>${log.notes}</em></div>` : ''}
        </div>
      `;
    }).join('');

    container.querySelectorAll('.delete-log-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.logId;
        this.tracker.deleteLog(id);
        this.renderTrackerLogs();
        this.showToast("Voce eliminata dal diario");
      });
    });
  }

  /* ---------------- Paywall & PRO Unlock ---------------- */
  openPaywallModal(featureName = "") {
    const modal = document.getElementById('paywall-modal');
    const triggerText = document.getElementById('paywall-trigger-reason');
    if (modal) {
      if (triggerText && featureName) {
        triggerText.textContent = `Hai selezionato "${featureName}", una risorsa inclusa nel piano PRO.`;
      }
      document.body.classList.add('modal-open');
      modal.classList.add('open');
    }
  }

  closePaywallModal() {
    const modal = document.getElementById('paywall-modal');
    if (modal) modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  updateProUIState() {
    const isPro = this.stripe.isPro;
    const proBadgeHeader = document.getElementById('header-pro-status');
    if (proBadgeHeader) {
      proBadgeHeader.innerHTML = isPro
        ? `<span class="badge-tag" style="background: var(--gold-gradient); color: #122B22; padding: 0.35rem 0.8rem;">👑 PRO ATTIVO</span>`
        : `<button class="btn btn-gold btn-sm open-paywall-trigger">✨ Sblocca PRO</button>`;
      
      const newTrigger = proBadgeHeader.querySelector('.open-paywall-trigger');
      if (newTrigger) {
        newTrigger.addEventListener('click', () => this.openPaywallModal());
      }
    }
  }

  /* ---------------- Audio UI helper ---------------- */
  updateAudioButtonsUI(state) {
    document.querySelectorAll('.audio-btn').forEach(btn => {
      const remedyId = btn.dataset.audioRemedy;
      const isThisPlaying = state.isPlaying && state.currentRemedyId === remedyId;
      btn.classList.toggle('playing', isThisPlaying);
      if (isThisPlaying) {
        btn.querySelector('span:last-child').textContent = 'Ascolto...';
      } else {
        btn.querySelector('span:last-child').textContent = 'Audio';
      }
    });

    const modalBtn = document.getElementById('modal-audio-btn');
    if (modalBtn) {
      modalBtn.classList.toggle('playing', state.isPlaying);
      modalBtn.querySelector('span:last-child').textContent = state.isPlaying ? 'Interrompi' : 'Ascolta Guida';
    }
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.curaNaturaApp = new App();
});
