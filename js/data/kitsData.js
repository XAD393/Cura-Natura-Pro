/**
 * CURA NATURA Pro - Pre-configured Emergency Kit Templates & Protocols
 */

export const EMERGENCY_KITS = [
  {
    id: "family_core",
    title: "Kit Base Famiglia & Pronto Soccorso Casa",
    icon: "🏠",
    tagline: "I 10 rimedi essenziali che non devono mai mancare nell'armadietto di casa.",
    targetAudience: "Genitori, famiglie e uso domestico generale.",
    remedies: [
      { id: "arnica-montana", potency: "9CH / 30CH", note: "Primo rimedio per qualsiasi botta, caduta, traumi ed ematomi." },
      { id: "aconitum-napellus", potency: "30CH", note: "Febbri improvvise dopo colpi di vento e spaventi acuti notturni." },
      { id: "belladonna", potency: "30CH", note: "Febbre alta con viso rosso, sudorazione calda e otiti fiammeggianti." },
      { id: "chamomilla", potency: "15CH", note: "Dolori insopportabili, capricci e crisi da dentizione." },
      { id: "nux-vomica", potency: "9CH", note: "Indigestioni, reflusso, mal di testa da stress e stipsi." },
      { id: "pulsatilla", potency: "15CH", note: "Raffreddori con muco giallo denso e bimbi bisognosi di coccole." },
      { id: "arsenicum-album", potency: "30CH", note: "Gastroenteriti, intossicazioni alimentari e diarrea bruciante." },
      { id: "hypericum-perforatum", potency: "30CH", note: "Schiacciamento dita nelle porte e traumi al coccige." },
      { id: "hepar-sulphuris", potency: "30CH", note: "Gola con dolore a scheggia e principio di ascessi o foruncoli." },
      { id: "cantharis-vesicatoria", potency: "9CH", note: "Bruciori acuti di cistite e scottature con bolle." }
    ],
    rules: [
      "Conservare i tubi lontano da fonti elettromagnetiche (microonde, cellulari) e profumi forti.",
      "Non toccare i granuli con le dita: utilizzare l'apposito tappo dosatore.",
      "In acuto: 3 granuli ogni 15-30 minuti per le prime 3-4 dosi, poi diradare all'attenuarsi dei sintomi."
    ]
  },
  {
    id: "travel_vacation",
    title: "Farmacia Omeopatica da Viaggio",
    icon: "✈️",
    tagline: "Protezione completa per viaggi in aereo, auto, nave, sole e climi tropicali.",
    targetAudience: "Viaggiatori, escursionisti, vacanze al mare e all'estero.",
    remedies: [
      { id: "cocculus-indicus", potency: "9CH", note: "Mal d'auto, mal di mare, jet-lag e vertigini da viaggio." },
      { id: "ledum-palustre", potency: "9CH", note: "Punture di zanzare, vespe, zecche e ferite da ricci di mare." },
      { id: "arsenicum-album", potency: "30CH", note: "Diarrea del viaggiatore e intossicazioni da cibo all'estero." },
      { id: "cantharis-vesicatoria", potency: "9CH", note: "Scottature solari gravi ed eritemi con bolle." },
      { id: "arnica-montana", potency: "30CH", note: "Storte alla caviglia durante trekking e indolenzimento muscolare." },
      { id: "gelsemium-sempervirens", potency: "30CH", note: "Paura del volo (ansia da decollo) e colpi di calore spossanti." }
    ],
    rules: [
      "In aereo: tieni i rimedi nel bagaglio a mano (i controlli radiogeni moderni sono sicuri, ma evita l'esposizione prolungata al sole diretto).",
      "Per il mal d'auto: 3 granuli di Cocculus 30 min prima di partire e 3 granuli ad ogni sosta."
    ]
  },
  {
    id: "baby_teething",
    title: "Protocollo Speciale Neonato & Dentizione",
    icon: "🍼",
    tagline: "Soluzioni dolci, non invasive e sicure al 100% per i primi 3 anni di vita.",
    targetAudience: "Neomamme, neonati e bimbi in fase di svezzamento.",
    remedies: [
      { id: "chamomilla", potency: "9CH / 15CH", note: "Eruzione dentaria con rabbia, pianto inconsolabile e guancia rossa." },
      { id: "belladonna", potency: "30CH", note: "Febbre improvvisa da dentizione con sudore sulla testa." },
      { id: "pulsatilla", potency: "15CH", note: "Attaccamento morboso alla mamma, pianto facile e nasino chiuso a letto." },
      { id: "calcarea-carbonica", potency: "30CH", note: "Dentizione tardiva e sudorazione del capo durante la nanna." },
      { id: "allium-cepa", potency: "9CH", note: "Raffreddore con moccio liquido chiaro che arrossa le narici." }
    ],
    rules: [
      "Metodo gocce in acqua: sciogliere 3 granuli in 50ml di acqua naturale in un biberon o tazzina e somministrare un cucchiaino al bimbo.",
      "Nessun effetto collaterale, non contiene zuccheri complessi né conservanti chimici."
    ]
  },
  {
    id: "sports_injury",
    title: "Kit Traumi Sportivi & Fitness",
    icon: "🏃‍♂️",
    tagline: "Recupero rapido da contratture, stiramenti, distorsioni e acido lattico.",
    targetAudience: "Atleti, maratoneti, calciatori, tennisti e frequentatori di palestra.",
    remedies: [
      { id: "arnica-montana", potency: "30CH", note: "Indolenzimento muscolare, ematomi e micro-lacerazioni post-allenamento." },
      { id: "rhus-toxicodendron", potency: "30CH", note: "Distorsioni articolari con rigidità iniziale che migliora muovendosi." },
      { id: "ruta-graveolens", potency: "9CH", note: "Tendiniti, gomito del tennista, traumi a periostio e stinchi." },
      { id: "hypericum-perforatum", potency: "30CH", note: "Traumi contusivi con dolore urente lungo il decorso del nervo." }
    ],
    rules: [
      "Assumere Arnica 30CH prima di una gara impegnativa e subito al traguardo per dimezzare i tempi di recupero dei DOMS."
    ]
  },
  {
    id: "pet_first_aid",
    title: "Pronto Soccorso Naturale Animali (Cane & Gatto)",
    icon: "🐾",
    tagline: "Protocolli omeopatici dolci ed efficaci per i nostri compagni a quattro zampe.",
    targetAudience: "Proprietari di cani e gatti attenti al benessere naturale.",
    remedies: [
      { id: "arnica-montana", potency: "30CH", note: "Zoppie dopo corse sfrenate, salti maldestri o interventi chirurgici." },
      { id: "aconitum-napellus", potency: "30CH", note: "Terrore da tuoni, temporali e botti di Capodanno." },
      { id: "ledum-palustre", potency: "9CH", note: "Punture di vespe/api su tartufo e zampe, prevenzione zecche." },
      { id: "nux-vomica", potency: "9CH", note: "Indigestione dopo aver mangiato schifezze per strada, erba o avanzi tossici." },
      { id: "arsenicum-album", potency: "30CH", note: "Gastroenterite acuta con diarrea e vomito maleodorante." }
    ],
    rules: [
      "Come somministrare ai pet: sciogliere i granuli in una siringa senz'ago con 2ml d'acqua e spruzzare delicatamente nella tasca della guancia.",
      "Non altera il sapore del cibo ed è completamente privo di tossicità anche per i cuccioli."
    ]
  }
];
