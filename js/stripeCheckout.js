/**
 * CURA NATURA Pro - Stripe Monetization & License Management
 */

export class StripeManager {
  constructor() {
    this.storageKey = 'curanatura_license_pro';
    this.isPro = this.checkProStatus();
    this.onProStatusChangeCallback = null;
  }

  checkProStatus() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (!saved) return false;
      const data = JSON.parse(saved);
      return data.active === true;
    } catch {
      return false;
    }
  }

  onProStatusChange(callback) {
    this.onProStatusChangeCallback = callback;
  }

  notifyProStatus() {
    if (this.onProStatusChangeCallback) {
      this.onProStatusChangeCallback(this.isPro);
    }
  }

  activatePro(licenseKey = "DIRECT_UNLOCK", buyerEmail = "test@curanatura.pro") {
    const licenseData = {
      active: true,
      licenseKey: licenseKey,
      buyerEmail: buyerEmail,
      activatedAt: new Date().toISOString(),
      plan: "Lifetime Access Pro"
    };
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(licenseData));
      this.isPro = true;
      this.notifyProStatus();
      return { success: true, message: "Licenza CURA NATURA Pro attivata con successo!" };
    } catch (e) {
      return { success: false, message: "Errore durante il salvataggio locale: " + e.message };
    }
  }

  revokePro() {
    try {
      localStorage.removeItem(this.storageKey);
      this.isPro = false;
      this.notifyProStatus();
    } catch (e) {
      console.warn(e);
    }
  }

  async validatePromoCode(code) {
    const clean = (code || "").trim().toUpperCase();
    const VALID_CODES = ["NATURA2026", "HOLISTICPRO", "ETSYUPGRADE", "VIPFREE", "TESTPRO"];
    
    if (VALID_CODES.includes(clean) || clean.startsWith("CN-PRO-")) {
      this.activatePro(clean, "promo_user@curanatura.pro");
      return { success: true, message: "Codice promozionale valido! Accesso PRO a vita sbloccato." };
    }
    return { success: false, message: "Codice licenza non valido. Verifica e riprova." };
  }

  async startStripeCheckout() {
    try {
      const response = await fetch('/api/checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: 'price_lifetime_pro',
          productName: 'CURA NATURA Pro - Licenza a Vita',
          amount: 1990, // €19.90
          currency: 'eur'
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.checkoutUrl) {
          window.location.href = data.checkoutUrl;
          return;
        }
      }
    } catch (err) {
      console.warn("Backend API not reachable, falling back to simulated checkout modal", err);
    }

    // Direct fallback for local standalone / static hosting demo
    return { mode: "simulate" };
  }
}
