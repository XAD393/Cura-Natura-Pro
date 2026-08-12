# 🌿 CURA NATURA Pro — Guida Olistica & Repertorio Omeopatico Interattivo
*Software digitale pronto per la produzione e la commercializzazione (Alternativa Superiore alla Guida Etsy di KaleBlossom)*

---

## 🌟 1. Panoramica del Prodotto & Benchmark Competitivo

| Feature | Guida Etsy Competitor (`KaleBlossom`) | **CURA NATURA Pro** |
| :--- | :--- | :--- |
| **Formato** | PDF statico da 100+ pagine, lettura lenta. | **Web App PWA interattiva, reattiva e funzionante offline.** |
| **Ricerca Sintomi** | Scorrimento manuale dell'indice durante l'emergenza. | **Matrice di Repertorizzazione con Algoritmo di Confidence Score (in tempo reale).** |
| **Posologia** | Tabelle generiche e confuse. | **Calcolatore Dinamico di Potenza & Guida al Metodo Dosi in Acqua (Wet Dosing).** |
| **Personalizzazione** | Zero (documento identico per chiunque). | **Generatore di Schede Frigorifero & Kit PDF stampabili su misura.** |
| **Materia Medica** | Testo statico denso. | **100+ Schede Interattive con Keynotes, Modalità, Pediatria, Pet Safety e Audio Vocale.** |
| **Monetizzazione** | Vendita singola Etsy (15-20% commissioni trattenute). | **Stripe Checkout Diretto (0 commissioni marketplace) + Licenza PRO a vita.** |

---

## 🚀 2. Avvio Rapido & Deployment

### 💻 Avvio Locale (Python 3):
```bash
cd /home/xad/Antigravity/holistic-remedies-pro
python3 server.py
```
Apri il browser su: **`http://localhost:8000`**

### 🧪 Esecuzione Suite di Test QA:
```bash
python3 test/run_qa_tests.py
```

---

## 💳 3. Configurazione Stripe & Monetizzazione

### Modalità Demo (Nessuna chiave richiesta):
L'applicazione include un sistema di simulazione immediato e un codice promozionale di sblocco gratuito per i test:
* Codice di sblocco licenza di test: **`NATURA2026`**

### Modalità Live (Produzione con pagamenti reali):
Imposta le variabili d'ambiente prima di avviare `server.py`:
```bash
export STRIPE_SECRET_KEY="sk_live_..."
export STRIPE_WEBHOOK_SECRET="whsec_..."
export PORT=8000
python3 server.py
```

---

## 📁 4. Struttura del Progetto

```
holistic-remedies-pro/
├── index.html                   # Entry point Single Page Application
├── manifest.json                # Web App Manifest per installazione PWA
├── sw.js                        # Service Worker per caching offline 100%
├── server.py                    # Server Python con API Stripe & License Check
├── css/
│   ├── main.css                 # Design System, palette botanica, typography
│   ├── components.css           # Cards, modals, buttons, badges, audio
│   ├── repertory.css            # Stili specifici della matrice di repertorio
│   └── print.css                # Layout di stampa per schede d'emergenza PDF
├── js/
│   ├── app.js                   # Controller principale dell'applicazione
│   ├── repertoryEngine.js       # Algoritmo di matching clinico ponderato
│   ├── dosageCalculator.js      # Calcolatore di potenze e metodo dosi in acqua
│   ├── kitBuilder.js            # Generatore di protocolli e schede stampabili
│   ├── audioGuide.js            # Sintesi vocale con Web Speech API
│   ├── tracker.js               # Diario clinico e note locali
│   ├── stripeCheckout.js        # Gestione pagamenti Stripe e token licenza
│   └── data/
│       ├── remediesData.js      # 100+ rimedi di Materia Medica
│       ├── rubricsData.js       # Rubriche e sintomi del Repertorio
│       └── kitsData.js          # Protocolli preconfigurati (Famiglia, Viaggi, Neonati, Pet)
├── test/
│   ├── run_qa_tests.py          # Suite di test di conformità e QA (59 test)
│   └── test_repertory.js        # Unit test Node.js per l'algoritmo di repertorio
└── assets/
    ├── icon-192.png             # Icona PWA 192x192
    └── icon-512.png             # Icona PWA 512x512
```

---

## 🎯 5. Strategia Commerciale "Ready to Ship"
1. **Canale Etsy / Gumroad**: Vendi l'accesso alla Web App insieme al bundle PDF stampabile a €19.90 (invece dei €25 del solo PDF statico di KaleBlossom).
2. **Lead Magnet**: Offri l'accesso gratuito ai 12 rimedi di base e al calcolatore di potenze per raccogliere email di neogenitori e appassionati di salute naturale.
3. **Upsell PRO**: Sblocco a pagamento per il repertorio avanzato a multi-sintomo, le schede complete di 100+ rimedi e il modulo pediatrico e animali domestici.
