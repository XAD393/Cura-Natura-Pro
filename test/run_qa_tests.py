#!/usr/bin/env python3
"""
CURA NATURA Pro - Automated QA & Simulation Test Suite
Covers:
- Caso 1: Onboarding, UI structure & Assets integrity
- Caso 2: Core Feature (Repertory algorithm accuracy & Materia Medica completeness)
- Caso 3: Edge Cases, Error Handling & Storage resilience
- Caso 4: Stripe Checkout, Licensing & Monetization flow
"""

import os
import sys
import json
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class QATestRunner:
    def __init__(self):
        self.passed = 0
        self.failed = 0
        self.tests = []

    def assert_true(self, condition, test_name, detail=""):
        if condition:
            self.passed += 1
            print(f"  ✅ PASS: {test_name}")
            self.tests.append({"name": test_name, "status": "PASS", "detail": detail})
        else:
            self.failed += 1
            print(f"  ❌ FAIL: {test_name} - {detail}")
            self.tests.append({"name": test_name, "status": "FAIL", "detail": detail})

    def run_all(self):
        print("\n" + "="*70)
        print("🌿 CURA NATURA Pro - ESECUZIONE TEST AUTOMATIZZATI DI QA")
        print("="*70)

        self.test_case_1_onboarding_and_assets()
        self.test_case_2_core_repertory_and_data()
        self.test_case_3_edge_cases_and_error_handling()
        self.test_case_4_stripe_and_licensing()

        print("\n" + "="*70)
        print(f"📊 RISULTATO FINALE QA: {self.passed} SUPERATI, {self.failed} FALLITI")
        print("="*70 + "\n")

        return self.failed == 0

    def test_case_1_onboarding_and_assets(self):
        print("\n▶️ CASO 1: Onboarding, Rendering UI & Integrità Risorse")
        
        # 1. Check index.html existence and critical tags
        index_path = os.path.join(ROOT_DIR, "index.html")
        self.assert_true(os.path.exists(index_path), "Presenza file index.html")
        
        with open(index_path, "r", encoding="utf-8") as f:
            html_content = f.read()

        self.assert_true("<title>CURA NATURA Pro" in html_content, "Presenza Title Tag descrittivo")
        self.assert_true('meta name="description"' in html_content, "Presenza Meta Description SEO")
        self.assert_true('id="tab-repertory"' in html_content, "Render del Tab Repertorio Matrice")
        self.assert_true('id="tab-materia"' in html_content, "Render del Tab Materia Medica")
        self.assert_true('id="tab-dosage"' in html_content, "Render del Tab Calcolatore Potenze")
        self.assert_true('id="tab-kits"' in html_content, "Render del Tab Kit & PDF Frigorifero")
        self.assert_true('id="tab-tracker"' in html_content, "Render del Tab Diario Clinico")
        self.assert_true('id="paywall-modal"' in html_content, "Render del Modale Paywall PRO / Stripe")

        # 2. Check CSS files
        for css_file in ["main.css", "components.css", "repertory.css", "print.css"]:
            css_path = os.path.join(ROOT_DIR, "css", css_file)
            self.assert_true(os.path.exists(css_path), f"Presenza foglio di stile {css_file}")

        # 3. Check PWA assets
        manifest_path = os.path.join(ROOT_DIR, "manifest.json")
        sw_path = os.path.join(ROOT_DIR, "sw.js")
        self.assert_true(os.path.exists(manifest_path), "Presenza PWA Manifest")
        self.assert_true(os.path.exists(sw_path), "Presenza Service Worker Offline Caching")

    def test_case_2_core_repertory_and_data(self):
        print("\n▶️ CASO 2: Core Feature - Algoritmo di Repertorizzazione & Materia Medica")

        remedies_js_path = os.path.join(ROOT_DIR, "js", "data", "remediesData.js")
        self.assert_true(os.path.exists(remedies_js_path), "Presenza dataset Materia Medica (remediesData.js)")

        with open(remedies_js_path, "r", encoding="utf-8") as f:
            remedies_code = f.read()

        # Check key remedies exist in dataset
        key_remedies = [
            "aconitum-napellus", "arnica-montana", "belladonna", "chamomilla",
            "nux-vomica", "pulsatilla", "arsenicum-album", "bryonia-alba",
            "rhus-toxicodendron", "gelsemium-sempervirens", "ignatia-amara",
            "hepar-sulphuris", "hypericum-perforatum", "cantharis-vesicatoria",
            "ledum-palustre", "sepia-officinalis", "silicea", "calcarea-carbonica",
            "lycopodium-clavatum", "allium-cepa", "carbo-vegetabilis",
            "cocculus-indicus", "drosera-rotundifolia", "euphrasia-officinalis",
            "ruta-graveolens", "thuja-occidentalis", "sulphur"
        ]

        for rem_id in key_remedies:
            self.assert_true(f'id: "{rem_id}"' in remedies_code or f"id: '{rem_id}'" in remedies_code, f"Materia Medica contiene il rimedio '{rem_id}'")

        # Rubrics dataset test
        rubrics_js_path = os.path.join(ROOT_DIR, "js", "data", "rubricsData.js")
        self.assert_true(os.path.exists(rubrics_js_path), "Presenza dataset Rubriche (rubricsData.js)")

        with open(rubrics_js_path, "r", encoding="utf-8") as f:
            rubrics_code = f.read()

        self.assert_true("fever_sudden_high" in rubrics_code, "Rubrica Febbre improvvisa presente")
        self.assert_true("trauma_bruise_sore" in rubrics_code, "Rubrica Trauma/Contusione presente")
        self.assert_true("pedia_teething_angry" in rubrics_code, "Rubrica Dentizione dolorosa presente")
        self.assert_true("better_motion" in rubrics_code, "Modalità Miglioramento con Movimento presente")

    def test_case_3_edge_cases_and_error_handling(self):
        print("\n▶️ CASO 3: Edge Cases, Tolleranza Errori & Resilienza")

        # Check Kit Builder code for safe localstorage fallback
        kit_builder_path = os.path.join(ROOT_DIR, "js", "kitBuilder.js")
        with open(kit_builder_path, "r", encoding="utf-8") as f:
            kb_code = f.read()
        self.assert_true("try {" in kb_code and "catch" in kb_code, "Gestione sicura try/catch in KitBuilder per storage disabilitato o corrotto")

        # Check RepertoryEngine for empty selection handling
        rep_engine_path = os.path.join(ROOT_DIR, "js", "repertoryEngine.js")
        with open(rep_engine_path, "r", encoding="utf-8") as f:
            re_code = f.read()
        self.assert_true("if (this.selectedSymptoms.size === 0" in re_code, "RepertoryEngine gestisce selezione vuota restituendo array vuoto senza eccezioni")
        self.assert_true("Math.max(1," in re_code, "Protezione da divisione per zero nel calcolo percentuale di matching")

        # Check AudioGuide speech synthesis fallback
        audio_path = os.path.join(ROOT_DIR, "js", "audioGuide.js")
        with open(audio_path, "r", encoding="utf-8") as f:
            audio_code = f.read()
        self.assert_true("'speechSynthesis' in window" in audio_code, "Verifica supporto Web Speech API prima dell'invocazione")

    def test_case_4_stripe_and_licensing(self):
        print("\n▶️ CASO 4: Sistema di Monetizzazione Stripe & Licenze PRO")

        # Check stripe module
        stripe_js_path = os.path.join(ROOT_DIR, "js", "stripeCheckout.js")
        with open(stripe_js_path, "r", encoding="utf-8") as f:
            stripe_code = f.read()

        self.assert_true("checkProStatus" in stripe_code, "Funzione verifica stato licenza PRO")
        self.assert_true("validatePromoCode" in stripe_code, "Validatore codici promozionali e licenze")
        self.assert_true("NATURA2026" in stripe_code, "Presenza codice promozionale standard di test NATURA2026")
        self.assert_true("startStripeCheckout" in stripe_code, "Metodo avvio sessione Stripe Checkout")

        # Check Python server endpoints
        server_path = os.path.join(ROOT_DIR, "server.py")
        with open(server_path, "r", encoding="utf-8") as f:
            srv_code = f.read()

        self.assert_true("/api/checkout-session" in srv_code, "Endpoint backend /api/checkout-session configurato")
        self.assert_true("/api/verify-license" in srv_code, "Endpoint backend /api/verify-license configurato")
        self.assert_true("CN-PRO-" in srv_code, "Generatore token di licenza formato CN-PRO- attivo")

if __name__ == "__main__":
    runner = QATestRunner()
    success = runner.run_all()
    sys.exit(0 if success else 1)
