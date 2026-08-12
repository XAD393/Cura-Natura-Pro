/**
 * CURA NATURA Pro - Interactive Dosage & Potency Engine
 * Dynamic clinical guidance for potency selection, wet dosing, and repetition rules.
 */

export const POTENCY_GUIDE = [
  {
    potency: "5CH - 9CH (Bassa Diluizione)",
    badge: "Sintomi Fisici & Locali",
    icon: "🌱",
    indication: "Ideale per sintomi fisici localizzati, eruzioni cutanee, acidità gastrica, contusioni lievi e prime manifestazioni d'organo.",
    frequency: "3 granuli 3-4 volte al giorno. Ridurre a 2 volte al giorno con il miglioramento.",
    duration: "Da 3 a 7 giorni consecutivi."
  },
  {
    potency: "15CH - 30CH (Media Diluizione)",
    badge: "Stati Acuti & Quadro Generale",
    icon: "⚡",
    indication: "La potenza regina per stati acuti, febbri improvvise, traumi emotivi, dolori nevralgici e reazioni d'emergenza.",
    frequency: "In acuto: 3 granuli ogni 15-30 minuti per le prime 3 dosi, poi ogni 2 ore fino a miglioramento evidente.",
    duration: "Sospendere non appena si manifesta un chiaro miglioramento (Regola d'Oro)."
  },
  {
    potency: "200CH - 1MK (Alta Diluizione)",
    badge: "Costituzionale & Shock Profondo",
    icon: "💎",
    indication: "Riservata a shock emotivi violenti (lutti, panico estremo), traumi fisici importanti post-chirurgici o uso costituzionale profondo.",
    frequency: "Dose singola (monodose intera o 5 granuli una sola volta). Attendere la reazione dell'organismo.",
    duration: "Ripetere solo dopo settimane o sotto consiglio del medico omeopata."
  }
];

export const WET_DOSING_STEPS = [
  {
    step: 1,
    title: "Preparazione del Flacone",
    desc: "Prendi una bottiglietta d'acqua naturale da 100ml o 250ml (preferibilmente in vetro)."
  },
  {
    step: 2,
    title: "Inserimento dei Granuli",
    desc: "Fai cadere 3 o 4 granuli del rimedio scelto direttamente dal tappino dosatore nell'acqua senza toccarli con le dita."
  },
  {
    step: 3,
    title: "Dinamizzazione (Succussione)",
    desc: "Chiudi bene la bottiglietta e agitala energicamente battendola sul palmo della mano per 10 volte (dinamizzazione del liquido)."
  },
  {
    step: 4,
    title: "Somministrazione",
    desc: "Prendi 1 cucchiaino di plastica o legno del liquido preparato e trattienilo sotto la lingua per 10 secondi prima di deglutire."
  },
  {
    step: 5,
    title: "Ripetizione Dolce",
    desc: "Per le dosi successive, prima di ogni cucchiaino, scuoti la bottiglietta con altri 2 colpi secchi. Questo rinnova l'energia evitando aggravamenti!"
  }
];

export const ANTIDOTE_RULES = [
  {
    icon: "☕",
    name: "Caffè & Caffeina",
    desc: "Evita caffè forte o decaffeinato 20 minuti prima e dopo l'assunzione. La caffeina può antidotare l'azione di rimedi sensibili come Ignatia o Nux Vomica."
  },
  {
    icon: "🌿",
    name: "Menta, Mentolo & Canfora",
    desc: "I dentifrici alla menta forte, collutori al mentolo e unguenti canforati (tipo balsamo di tigre) possono cancellare istantaneamente l'effetto del rimedio. Usa dentifrici all'anice, calendula o omeocompatibili."
  },
  {
    icon: "📱",
    name: "Campi Elettromagnetici",
    desc: "Non appoggiare i tubetti sopra forni a microonde, modem Wi-Fi o direttamente a contatto con lo smartphone acceso."
  },
  {
    icon: "✋",
    name: "Contatto con le Dita",
    desc: "I granuli sono impregnati in superficie. Toccarli con le mani può rimuovere il principio attivo. Usa sempre il tappo dosatore ruotante."
  }
];
