/**
 * CURA NATURA Pro - Repertory Rubrics & Modalities Matrix
 * Structured clinical repertory matching symptom rubrics to remedy weights (Grade 3, 2, 1)
 */

export const SYMPTOM_SYSTEMS = [
  {
    id: "fever",
    name: "Febbre & Infiammazione Acuta",
    icon: "🔥",
    symptoms: [
      { id: "fever_sudden_high", label: "Febbre alta improvvisa dopo colpo di freddo secco", remedies: { "aconitum-napellus": 3, "belladonna": 2 } },
      { id: "fever_red_face_sweat", label: "Febbre alta con viso rosso, pupille dilatate e sudore caldo", remedies: { "belladonna": 3, "aconitum-napellus": 1 } },
      { id: "fever_slow_drowsy", label: "Febbre ad esordio lento, sonnolenza, brividi alla schiena, senza sete", remedies: { "gelsemium-sempervirens": 3, "pulsatilla": 2 } },
      { id: "fever_aching_restless", label: "Febbre con dolori ossei 'a corpo rotto' e irrequietezza continua", remedies: { "rhus-toxicodendron": 3, "arnica-montana": 2 } },
      { id: "fever_dry_stitch", label: "Febbre con secchezza labbra, dolori fitti al minimo movimento e grande sete", remedies: { "bryonia-alba": 3 } }
    ]
  },
  {
    id: "trauma",
    name: "Traumi, Cadute & Ferite",
    icon: "🩹",
    symptoms: [
      { id: "trauma_bruise_sore", label: "Contusione, ecchimosi, ematomi, corpo indolenzito", remedies: { "arnica-montana": 3, "hepar-sulphuris": 1 } },
      { id: "trauma_nerve_crush", label: "Schiacciamento dita, traumi coccige, dolori lancinanti ai nervi", remedies: { "hypericum-perforatum": 3, "arnica-montana": 1 } },
      { id: "trauma_tendon_sprain", label: "Distorsioni tendinee da sforzi ripetuti o periostio contuso", remedies: { "ruta-graveolens": 3, "rhus-toxicodendron": 2 } },
      { id: "trauma_puncture_cold", label: "Punture di spina/chiodo o insetti; zona fredda migliorata dal ghiaccio", remedies: { "ledum-palustre": 3 } },
      { id: "trauma_burn_blister", label: "Ustioni di 2° grado con formazione rapida di bolle e bruciore", remedies: { "cantharis-vesicatoria": 3 } }
    ]
  },
  {
    id: "respiratory",
    name: "Tosse, Raffreddore & Gola",
    icon: "🫁",
    symptoms: [
      { id: "resp_croup_sudden", label: "Tosse secca metallica / laringite acuta notturna a mezzanotte", remedies: { "aconitum-napellus": 3, "hepar-sulphuris": 2 } },
      { id: "resp_dry_painful_motion", label: "Tosse secca dolorosa: deve tenersi il petto con le mani", remedies: { "bryonia-alba": 3 } },
      { id: "resp_cough_pillow_night", label: "Accessi di tosse non appena la testa tocca il cuscino la sera", remedies: { "drosera-rotundifolia": 3 } },
      { id: "resp_coryza_burning_nose", label: "Scolo nasale acquoso corrosivo (labbra bruciate) + starnuti", remedies: { "allium-cepa": 3 } },
      { id: "resp_thick_yellow_mucus", label: "Muco denso giallo non irritante, naso chiuso in casa e libero all'aria", remedies: { "pulsatilla": 3 } },
      { id: "resp_eyes_burning_tears", label: "Lacrimazione oculare corrosiva con bruciore e fotofobia", remedies: { "euphrasia-officinalis": 3 } },
      { id: "resp_throat_splinter", label: "Gola con dolore pungente 'a scheggia di vetro conficcata'", remedies: { "hepar-sulphuris": 3 } }
    ]
  },
  {
    id: "digestive",
    name: "Digestione, Coliche & Stomaco",
    icon: "🍵",
    symptoms: [
      { id: "dig_stress_hangover", label: "Pesantezza gastrica, reflusso dopo eccessi di cibo/caffè/alcol e stress", remedies: { "nux-vomica": 3 } },
      { id: "dig_poisoning_burning", label: "Vomito e diarrea bruciante da cibo avariato con debolezza e freddo", remedies: { "arsenicum-album": 3 } },
      { id: "dig_bloat_first_bite", label: "Gonfiore immediato al primo boccone, aria tra le 16:00 e le 20:00", remedies: { "lycopodium-clavatum": 3 } },
      { id: "dig_heavy_rich_food", label: "Indigestione dopo cibi grassi, burro, dolci o gelati (senza sete)", remedies: { "pulsatilla": 3 } },
      { id: "dig_collapse_air_hunger", label: "Pancia gonfia come un pallone, bisogno estremo di essere sventolato", remedies: { "carbo-vegetabilis": 3 } },
      { id: "dig_motion_sickness", label: "Nausea e vomito durante viaggi in auto, nave o da notti insonni", remedies: { "cocculus-indicus": 3 } }
    ]
  },
  {
    id: "pediatric",
    name: "Bambini, Neonati & Dentizione",
    icon: "👶",
    symptoms: [
      { id: "pedia_teething_angry", label: "Dentizione con urla furiose, una guancia rossa, si calma solo in braccio", remedies: { "chamomilla": 3 } },
      { id: "pedia_clingy_sweet", label: "Bambino piagnucoloso che cerca solo abbracci e coccole della mamma", remedies: { "pulsatilla": 3 } },
      { id: "pedia_head_sweat_sleep", label: "Sudore profuso alla testa che bagna il cuscino nel sonno; lento a camminare", remedies: { "calcarea-carbonica": 3, "silicea": 2 } },
      { id: "pedia_splinter_foreign", label: "Spine, schegge cutanee o infezioni recidivanti nel bambino freddoloso", remedies: { "silicea": 3, "hepar-sulphuris": 2 } }
    ]
  },
  {
    id: "emotional",
    name: "Stato Emotivo, Ansia & Sonno",
    icon: "🧠",
    symptoms: [
      { id: "emo_grief_sighs", label: "Dolore da lutto, delusione d'amore, continui sospiri e bolo isterico", remedies: { "ignatia-amara": 3 } },
      { id: "emo_exam_stagefright", label: "Ansia da prestazione prima di esami o prove con tremori e diarrea", remedies: { "gelsemium-sempervirens": 3 } },
      { id: "emo_panic_terror", label: "Attacco di panico improvviso, paura della morte e agitazione notturna", remedies: { "aconitum-napellus": 3, "arsenicum-album": 2 } },
      { id: "emo_exhaustion_numb", label: "Esaurimento materno, sensazione di peso al basso ventre e apatia affettiva", remedies: { "sepia-officinalis": 3 } },
      { id: "emo_insomnia_3am", label: "Risveglio fisso alle 3:00 del mattino rimuginando sul lavoro", remedies: { "nux-vomica": 3 } }
    ]
  },
  {
    id: "musculoskeletal",
    name: "Muscoli, Articolazioni & Schiena",
    icon: "🦴",
    symptoms: [
      { id: "msk_rust_motion_better", label: "Rigidità mattutina che migliora muovendosi continuamente (motore diesel)", remedies: { "rhus-toxicodendron": 3 } },
      { id: "msk_absolute_rest_better", label: "Dolori acuti fitti che peggiorano al minimo movimento e migliorano fermi", remedies: { "bryonia-alba": 3 } },
      { id: "msk_computer_tendon", label: "Tendiniti da mouse/computer, gomito del tennista e affaticamento visivo", remedies: { "ruta-graveolens": 3 } },
      { id: "msk_bed_too_hard", label: "Sensazione che il materasso sia duro come pietra ovunque ci si appoggi", remedies: { "arnica-montana": 3 } }
    ]
  },
  {
    id: "skin_urinary",
    name: "Pelle, Ustioni & Vie Urinarie",
    icon: "⚡",
    symptoms: [
      { id: "skin_cystitis_burning_fire", label: "Cistite con bruciore atroce a ferro rovente prima, durante e dopo la pipì", remedies: { "cantharis-vesicatoria": 3 } },
      { id: "skin_warts_cauliflower", label: "Verruche, condilomi o disturbi cutanei cronici dopo vaccini", remedies: { "thuja-occidentalis": 3 } },
      { id: "skin_eczema_burning_hotbed", label: "Eczema con prurito bruciante che peggiora col calore del letto; piedi caldi", remedies: { "sulphur": 3 } },
      { id: "skin_abscess_pus_cold", label: "Ascessi con pus e dolori a scheggia; ipersensibilità estrema al freddo", remedies: { "hepar-sulphuris": 3 } },
      { id: "skin_herpes_vesicles", label: "Vescicole tipo herpes o fuoco di Sant'Antonio migliorate da acqua calda", remedies: { "rhus-toxicodendron": 3 } }
    ]
  }
];

export const MODALITIES_POLARITY = [
  {
    id: "temp",
    title: "Temperatura & Calore",
    options: [
      { id: "better_cold", label: "❄️ Migliora con il freddo / aria fresca", remedies: { "pulsatilla": 3, "ledum-palustre": 3, "allium-cepa": 2 } },
      { id: "better_heat", label: "🔥 Migliora con il calore / bevande calde / coperte", remedies: { "arsenicum-album": 3, "hepar-sulphuris": 3, "nux-vomica": 2, "rhus-toxicodendron": 2 } }
    ]
  },
  {
    id: "motion",
    title: "Movimento vs Riposo",
    options: [
      { id: "better_still", label: "🛑 Migliora con il riposo immobile assoluto", remedies: { "bryonia-alba": 3, "arnica-montana": 2, "belladonna": 2 } },
      { id: "better_motion", label: "🏃 Migliora con il movimento continuo o camminando", remedies: { "rhus-toxicodendron": 3, "pulsatilla": 2, "sepia-officinalis": 2 } }
    ]
  },
  {
    id: "thirst",
    title: "Sete",
    options: [
      { id: "thirst_intense", label: "💧 Sete ardente di grandi quantità", remedies: { "aconitum-napellus": 3, "bryonia-alba": 3, "belladonna": 1 } },
      { id: "thirst_small_sips", label: "☕ Sete continua di piccoli sorsi caldi", remedies: { "arsenicum-album": 3 } },
      { id: "thirstless", label: "🚫 Totale assenza di sete anche con febbre", remedies: { "pulsatilla": 3, "gelsemium-sempervirens": 3 } }
    ]
  },
  {
    id: "timing",
    title: "Orario Critico di Peggioramento",
    options: [
      { id: "time_midnight", label: "🌙 Mezzanotte (ore 23:00 - 01:00)", remedies: { "aconitum-napellus": 3, "drosera-rotundifolia": 2 } },
      { id: "time_1_3am", label: "⏰ Notte profonda (ore 01:00 - 03:00)", remedies: { "arsenicum-album": 3 } },
      { id: "time_3_4am", label: "🌅 Primo mattino (ore 03:00 - 04:00)", remedies: { "nux-vomica": 3 } },
      { id: "time_4_8pm", label: "🌆 Tardo pomeriggio (ore 16:00 - 20:00)", remedies: { "lycopodium-clavatum": 3, "belladonna": 1 } }
    ]
  }
];
