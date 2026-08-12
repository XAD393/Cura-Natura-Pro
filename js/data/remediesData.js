/**
 * CURA NATURA Pro - Comprehensive Materia Medica Dataset
 * Curated from classical homeopathic principles (Hahnemann, Kent, Boericke)
 * Enhanced with modern clinical pearls, pediatric notes, pet safety, and audio texts.
 */

export const REMEDIES_DATA = [
  {
    id: "aconitum-napellus",
    name: "Aconitum Napellus",
    commonName: "Aconito / Cappuccio di Monaco",
    category: "first-aid",
    icon: "❄️",
    badge: "Pronto Soccorso Acuto",
    isFree: true,
    latinName: "Aconitum napellus (Fam. Ranunculaceae)",
    source: "Origine vegetale - Tutta la pianta fresca fiorita",
    essence: "Il rimedio d'elezione per gli esordi improvvisi e violenti causati da colpi di freddo secco o spaventi acuti.",
    keynotes: [
      "Esordio fulmineo, acuto e violento dei sintomi (spesso intorno a mezzanotte).",
      "Grande ansia, agitazione incontenibile, paura estrema della morte o del futuro.",
      "Pelle secca, calda e arrossata senza sudorazione iniziale.",
      "Sete ardente di grandi quantità di acqua fredda."
    ],
    mind: "Terrore improvviso, panico dopo un trauma o spavento (es. terremoto, incidente). Agitazione motoria: non riesce a stare fermo nel letto.",
    physical: {
      head: "Cefalea pulsante con sensazione di testa che scoppia, peggiorata dal movimento.",
      fever: "Febbre alta a comparsa improvvisa dopo esposizione a vento freddo e secco. Polso pieno, duro e rapido.",
      throat: "Gola rosso fuoco, bruciore intenso, secchezza estrema e deglutizione dolorosa.",
      respiratory: "Tosse secca, metallica, laringite notturna (croup), soffocamento improvviso al risveglio.",
      trauma: "Shock emotivo e fisico post-traumatico recente."
    },
    modalities: {
      worse: ["Vento freddo e secco", "Mezzanotte (ore 23:00 - 01:00)", "Rumori e luce intensa", "Sdraiato sul lato dolente"],
      better: ["Aria aperta", "Riposo assoluto", "Comparsa della sudorazione"]
    },
    potencies: "30CH per stati acuti d'ansia o febbre iniziale (3 granuli ogni 15-30 min per 3-4 volte, poi diradare). 200CH per shock emotivo violento.",
    antidotes: ["Coffea cruda", "Nux vomica", "Aceto"],
    pediatric: "Indispensabile per il bambino che si addormenta sano e si sveglia verso mezzanotte con febbre a 39.5°C, tosse abbaiante e terrore.",
    pets: "Shock da spavento (temporali, fuochi d'artificio) o traumi improvvisi nei cani e gatti.",
    audioSnippet: "Aconitum napellus. Rimedio regina dell'esordio improvviso e violento dopo colpi di vento freddo o shock emotivo. Febbre alta senza sudore, grande agitazione e paura della morte."
  },
  {
    id: "arnica-montana",
    name: "Arnica Montana",
    commonName: "Arnica dei Monti / Tabacco di Montagna",
    category: "first-aid",
    icon: "🌼",
    badge: "Traumi & Contusioni",
    isFree: true,
    latinName: "Arnica montana (Fam. Asteraceae)",
    source: "Origine vegetale - Radice e capolini freschi",
    essence: "Il re indiscusso dei traumi fisici, delle contusioni, degli ematomi e dell'indolenzimento generale.",
    keynotes: [
      "Sensazione di contusione diffusa: il letto sembra troppo duro ovunque ci si appoggi.",
      "Dice di stare benissimo anche quando è chiaramente ferito o sofferente (rifiuta il medico).",
      "Stravaso ematico, ecchimosi, ematomi e prevenzione delle emorragie post-operatorie.",
      "Affaticamento muscolare estremo dopo sforzi atletici o lavoro pesante."
    ],
    mind: "Vuole essere lasciato in pace, non sopporta che ci si avvicini per paura di essere toccato o urtato.",
    physical: {
      head: "Trauma cranico, commozione cerebrale (in associazione al controllo medico d'urgenza).",
      muscles: "Dolore muscolare acuto, contratture, stiramenti, indolenzimento da maratona o parto.",
      circulatory: "Fragilità capillare, prevenzione di trombi ed ecchimosi estese.",
      dental: "Prima e dopo estrazioni dentarie o interventi chirurgici per ridurre sanguinamento ed edema."
    },
    modalities: {
      worse: ["Minimo tocco o sfioramento", "Movimento", "Umidità fredda", "Riposo su superfici dure"],
      better: ["Sdraiato a testa bassa", "Riposo immobile"]
    },
    potencies: "9CH o 30CH (3 granuli 3-4 volte al giorno dopo il trauma). 200CH singola dose subito dopo un intervento o parto.",
    antidotes: ["Camphora", "Ipeca"],
    pediatric: "Da dare subito dopo ogni caduta o botta in testa del bimbo; previene la formazione dell'ematoma e calma il pianto.",
    pets: "Zoppie acute da trauma, distorsioni, recupero post-operatorio (sterilizzazione).",
    audioSnippet: "Arnica montana. Il primo rimedio per qualsiasi trauma fisico, caduta, contusione o sforzo muscolare. Elimina la sensazione di corpo rotto e accelera il riassorbimento degli ematomi."
  },
  {
    id: "belladonna",
    name: "Belladonna (Atropa)",
    commonName: "Belladonna",
    category: "pediatric",
    icon: "🔥",
    badge: "Febbre & Infiammazione",
    isFree: true,
    latinName: "Atropa belladonna (Fam. Solanaceae)",
    source: "Origine vegetale - Pianta intera fiorita",
    essence: "Infiammazione acuta iperemica: rossore acceso, calore radiante, pulsazioni violente e sudorazione abbondante.",
    keynotes: [
      "Febbre elevatissima (39-40°C) con viso rosso acceso, occhi lucidi e pupille dilatate.",
      "Sudorazione profusa soprattutto sul capo con vapore caldo che emana dalla pelle.",
      "Dolori pulsanti e martellanti (testa, orecchio, gengiva).",
      "Estremità fredde (mani e piedi gelati) con testa bollente."
    ],
    mind: "Delirio febbrile, allucinazioni visive (vede mostri o animali neri), reazioni aggressive o ipersensibilità alla luce.",
    physical: {
      head: "Cefalea congestizia pulsante, peggiorata dalla luce, dal rumore e dalle scosse.",
      throat: "Faringite e tonsillite rosso vivo, gola secca con sensazione di costrizione.",
      ear: "Otite media acuta destra ad esordio rapido con dolore pulsante violento.",
      fever: "Febbre improvvisa con sudorazione calda; il paziente cerca il buio e il silenzio."
    },
    modalities: {
      worse: ["Luce", "Rumori", "Scosse e sobbalzi", "Toccamento", "Pomeriggio (ore 15:00)"],
      better: ["Stanza buia e silenziosa", "Riposo a testa sollevata"]
    },
    potencies: "30CH (3 granuli in poca acqua o direttamente sotto la lingua ogni 30-60 min durante il picco febbrile).",
    antidotes: ["Camphora", "Coffea", "Hyoscyamus"],
    pediatric: "Febbre alta nei neonati durante la dentizione, otiti acute notturne con guance infuocate.",
    pets: "Colpi di calore acuti, infiammazioni oculari o auricolari violente con calore radiante.",
    audioSnippet: "Belladonna. Indicata nelle febbri alte e infiammazioni fulminee con viso rosso, pupille dilatate, pulsazioni e sudore caldo. Mani fredde e testa bollente."
  },
  {
    id: "chamomilla",
    name: "Chamomilla Vulgaris",
    commonName: "Camomilla Comune",
    category: "pediatric",
    icon: "👶",
    badge: "Dentizione & Dolore Insopportabile",
    isFree: true,
    latinName: "Matricaria chamomilla (Fam. Asteraceae)",
    source: "Origine vegetale - Pianta fresca fiorita",
    essence: "Ipersensibilità al dolore sproporzionata, collera, capricci inconsolabili e disturbi della dentizione.",
    keynotes: [
      "Dolore intollerabile che porta a rabbia violenta e urla.",
      "Bambino che si calma SOLO se cullato vigorosamente o portato in braccio.",
      "Una guancia rossa e calda, l'altra pallida e fredda.",
      "Feci verdastre con odore di uova marce durante la dentizione."
    ],
    mind: "Irritabile, capriccioso, chiede un oggetto e poi lo lancia via con rabbia. Rifiuta di essere avvicinato o toccato con calma.",
    physical: {
      teeth: "Dolori acuti da eruzione dentaria con gengive infiammate e ipersalivazione.",
      digestive: "Coliche gassose dei neonati con addome teso e gambe tirate all'addome.",
      ear: "Otite con dolore lancinante insopportabile e grida inconsolabili."
    },
    modalities: {
      worse: ["Rabbia", "Caffè e stimolanti", "Aria fredda", "Notte (dalle 21:00 alle 24:00)"],
      better: ["Essere cullato / portato in braccio in movimento", "Calore umido"]
    },
    potencies: "9CH o 15CH (3 granuli sciolti nel biberon o sotto la lingua al momento delle crisi).",
    antidotes: ["Aconitum", "Ignatia", "Nux vomica"],
    pediatric: "Il rimedio n°1 per le notti insonni da dentizione e coliche del neonato.",
    pets: "Cuccioli isterici per il dolore o l'ansia da separazione che mordono e guaiscono.",
    audioSnippet: "Chamomilla. Rimedio per dolori insopportabili e rabbia nei bambini in dentizione. Tipica una guancia rossa e una pallida, si calmano solo se cullati in braccio."
  },
  {
    id: "nux-vomica",
    name: "Nux Vomica",
    commonName: "Noce Vomica / Veleno di Strychnos",
    category: "digestive",
    icon: "⚡",
    badge: "Digestione & Stress / Detox",
    isFree: true,
    latinName: "Strychnos nux-vomica (Fam. Loganiaceae)",
    source: "Origine vegetale - Semi essiccati",
    essence: "Il rimedio degli eccessi moderni, del sovraccarico di lavoro, abuso di caffè/alcol e ipersensibilità nervosa.",
    keynotes: [
      "Ipersensibilità a tutti gli stimoli: luce, rumori, odori, correnti d'aria.",
      "Dispepsia con sonnolenza 1-2 ore dopo i pasti, pesantezza gastrica e nausea.",
      "Desiderio inefficace di evacuare o di vomitare (vuole ma non ci riesce).",
      "Molto freddoloso: non sopporta di scoprirsi nemmeno un braccio nel letto."
    ],
    mind: "Impaziente, ambizioso, perfezionista, irritabile al minimo contrattempo. Tipico profilo manager o studente sotto stress.",
    physical: {
      stomach: "Reflusso gastroesofageo, pirosi, gastrite da farmaci, caffè o alcolici.",
      bowels: "Stipsi spastica con stimolo frequente ma evacuazione incompleta. Emorroidi dolorose.",
      sleep: "Si addormenta presto ma si sveglia verso le 3:00-4:00 pensando ai problemi lavorativi, per poi riaddormentarsi all'alba sentendosi a pezzi."
    },
    modalities: {
      worse: ["Freddo e correnti d'aria", "Mattino presto", "Eccessi alimentari, alcol, spezie e caffè", "Sforzi mentali"],
      better: ["Calore e coperte calde", "Breve sonnellino pomeridiano", "Riposo"]
    },
    potencies: "9CH (3 granuli prima dei pasti o la sera). 30CH per stati di stress acuto e insonnia delle 3:00.",
    antidotes: ["Coffea", "Ignatia", "Cocculus"],
    pediatric: "Coliche e stipsi nei bambini allattati con latte artificiale o che hanno assunto molti farmaci.",
    pets: "Intossicazioni alimentari dopo aver mangiato cibo spazzatura, vomito e letargia.",
    audioSnippet: "Nux vomica. Il rimedio per il sovraccarico epatico, digestivo e nervoso. Ideale dopo eccessi di cibo, caffè o stress, con freddolosità e risveglio alle 3 del mattino."
  },
  {
    id: "pulsatilla",
    name: "Pulsatilla Pratensis",
    commonName: "Anemone Pulsatilla / Fiore del Vento",
    category: "pediatric",
    icon: "🌸",
    badge: "Bambini & Raffreddori Dolci",
    isFree: true,
    latinName: "Pulsatilla pratensis (Fam. Ranunculaceae)",
    source: "Origine vegetale - Pianta intera fresca in fiore",
    essence: "Natura dolce, affettuosa, mutevole, che cerca consolazione e aria fresca; secrezioni dense, giallastre e non irritanti.",
    keynotes: [
      "Sintomi estremamente mutevoli (un momento piange, un momento ride; dolori che si spostano continuamente).",
      "Migliora moltissimo all'aria aperta e fresca; soffoca nelle stanze calde e chiuse.",
      "Totale assenza di sete, anche durante la febbre.",
      "Secrezioni mucose giallo-verdastre, spesse, cremose ma non brucianti."
    ],
    mind: "Bisogno disperato di coccole, abbracci e rassicurazioni. Piange facilmente mentre racconta i propri sintomi.",
    physical: {
      respiratory: "Raffreddore con naso chiuso di notte in camera calda e che cola muco denso di giorno all'aria aperta.",
      ears: "Otiti catarrali con catarro denso e senso di pienezza auricolare.",
      digestion: "Digestione lenta e pesante dopo cibi grassi, pasticceria o gelati. Lingua con patina bianca.",
      hormonal: "Sindrome premestruale con sbalzi d'umore, ritardo del ciclo mestruale dopo piedi freddi o bagnati."
    },
    modalities: {
      worse: ["Calore, stanze calde, cibi grassi", "Sera e notte", "Riposo"],
      better: ["Aria fresca e aperta", "Movimento dolce e lento", "Consolazione e affetto", "Applicazioni fredde"]
    },
    potencies: "15CH o 30CH (3 granuli 1-2 volte al giorno).",
    antidotes: ["Chamomilla", "Coffea", "Ignatia"],
    pediatric: "Bambino piagnucoloso che vuole stare sempre attaccato alla mamma durante il raffreddore.",
    pets: "Cani 'cuccioloni' ansiosi che non sopportano di restare soli e piagnucolano alla porta.",
    audioSnippet: "Pulsatilla. Indicata per caratteri dolci e bisognosi di coccole. Sintomi mutevoli, assenza di sete, miglioramento marcato all'aria fresca e secrezioni dense non irritanti."
  },
  {
    id: "arsenicum-album",
    name: "Arsenicum Album",
    commonName: "Anidride Arseniosa",
    category: "digestive",
    icon: "🛡️",
    badge: "Gastroenterite & Ansia",
    isFree: true,
    latinName: "Acidum arsenicosum (Minerale)",
    source: "Origine minerale purificata e dinamizzata",
    essence: "Intossicazioni alimentari acute, gastroenteriti brucianti, estrema debolezza con agitazione ansiosa notturna.",
    keynotes: [
      "Bruciori intensi (stomaco, intestino, pelle) che migliorano paradossalmente con il calore locale e bevande calde.",
      "Grande spossatezza e debolezza rapida e sproporzionata rispetto alla durata della malattia.",
      "Peggioramento sistematico tra l'una e le tre di notte (01:00 - 03:00).",
      "Sete di piccoli e frequenti sorsi d'acqua calda o tiepida."
    ],
    mind: "Ansia angosciosa per la propria salute, paura della morte, precisione e ordine maniacale anche sul letto di malattia.",
    physical: {
      stomach: "Vomito e diarrea simultanei dopo cibo avariato o intossicazione da frutti di mare.",
      respiratory: "Crisi d'asma notturne tra l'1:00 e le 2:00 con senso di soffocamento, costretto a sedersi sul letto.",
      skin: "Eczema secco, pruriginoso e desquamante con bruciore che migliora con acqua calda."
    },
    modalities: {
      worse: ["Freddo, bevande fredde", "Notte (01:00 - 03:00)", "Frutti di mare o carne avariata"],
      better: ["Calore in tutte le forme (bevande calde, borse d'acqua calda, coperte)", "Compagnia e rassicurazione"]
    },
    potencies: "30CH (3 granuli dopo ogni scarica o crisi d'asma, diradando al miglioramento).",
    antidotes: ["Hepar sulphuris", "Nux vomica", "Carbo vegetabilis"],
    pediatric: "Gastroenteriti invernali con brividi di freddo e necessità di essere coperto fino al collo.",
    pets: "Diarrea acquosa e vomito nei cani dopo aver ingerito sostanze tossiche o carcasse.",
    audioSnippet: "Arsenicum album. Rimedio fondamentale per intossicazioni alimentari e diarrea bruciante. Migliora con il caldo e peggiora tra l'una e le tre di notte con grande spossatezza."
  },
  {
    id: "bryonia-alba",
    name: "Bryonia Alba",
    commonName: "Brionia Bianca / Vite Bianca",
    category: "respiratory",
    icon: "🌵",
    badge: "Dolori Fitti & Tosse Secca",
    isFree: true,
    latinName: "Bryonia alba (Fam. Cucurbitaceae)",
    source: "Origine vegetale - Radice fresca raccolta prima della fioritura",
    essence: "Secchezza estrema di tutte le mucose e dolori pungenti intollerabili al minimo movimento; vuole la quiete assoluta.",
    keynotes: [
      "Aggravamento marcato da qualsiasi movimento, anche solo respirare profondamente o muovere gli occhi.",
      "Grande miglioramento con l'immobilità e la pressione forte sulla parte dolente (si comprime il petto tossendo).",
      "Sete intensa di grandi quantità di acqua fredda a lunghi intervalli.",
      "Secchezza estrema: labbra screpolate, tosse secca e feci dure e bruciate."
    ],
    mind: "Irritabile, vuole essere lasciato solo nel suo letto, parla di affari o lavoro durante il delirio.",
    physical: {
      respiratory: "Tosse secca, dolorosa e stizzosa; il paziente si tiene il torace con entrambe le mani per non farlo muovere.",
      joints: "Artriti acute con articolazioni rosse, gonfie, calde che fanno male al minimo passo.",
      head: "Cefalea frontale o occipitale scoppiante, che peggiora persino muovendo le palpebre."
    },
    modalities: {
      worse: ["Minimo movimento", "Calore e stanze riscaldate", "Mattino"],
      better: ["Riposo assoluto", "Pressione forte o sdraiarsi sul lato dolente", "Applicazioni fredde"]
    },
    potencies: "9CH o 30CH (3 granuli 3-4 volte al giorno).",
    antidotes: ["Aconitum", "Camphora", "Chamomilla"],
    pediatric: "Bronchiti con tosse secca dolorosa in cui il bambino piange prima ancora di tossire per la paura del dolore.",
    pets: "Dolori articolari acuti in cui il cane si rifiuta categoricamente di alzarsi o camminare.",
    audioSnippet: "Bryonia alba. Ideale quando il dolore o la tosse peggiorano al minimo movimento e migliorano stando assolutamente immobili o premendo forte sulla parte colpita. Grande sete."
  },
  {
    id: "rhus-toxicodendron",
    name: "Rhus Toxicodendron",
    commonName: "Edera Velenosa",
    category: "musculoskeletal",
    icon: "🏃",
    badge: "Articolazioni & Rigidità",
    isFree: true,
    latinName: "Toxicodendron pubescens (Fam. Anacardiaceae)",
    source: "Origine vegetale - Foglie fresche",
    essence: "Rigidità dolorosa che migliora con il movimento continuo ('motore diesel') e peggiora con il riposo iniziale e l'umidità.",
    keynotes: [
      "Rigidità marcata all'inizio del movimento (alzarsi da una sedia), che scompare muovendosi costantemente.",
      "Grande irrequietezza fisica: deve continuamente cambiare posizione a letto per trovare sollievo.",
      "Peggioramento netto con il freddo umido, pioggia, nebbia o dopo essersi bagnati accaldati.",
      "Punta della lingua rossa a forma di triangolo."
    ],
    mind: "Ansia notturna nel letto con bisogno continuo di muovere le gambe.",
    physical: {
      joints: "Distorsioni, lombalgie, sciatica, tendiniti e reumatismi che migliorano col calore e camminando.",
      skin: "Eruzioni vescicolari tipo herpes zoster (fuoco di Sant'Antonio) o eczema con prurito urente che migliora con acqua caldissima.",
      fever: "Febbre con indolenzimento corporeo e lingua con triangolo rosso sulla punta."
    },
    modalities: {
      worse: ["Inizio del movimento", "Riposo e immobilità prolungata", "Umidità fredda e pioggia", "Notte"],
      better: ["Movimento continuo", "Calore, docce calde e clima secco", "Cambiare continuamente posizione"]
    },
    potencies: "30CH (3 granuli 3 volte al dì per distorsioni o herpes acuto).",
    antidotes: ["Bryonia", "Camphora", "Anacardium"],
    pediatric: "Bambini con dolori di crescita alle gambe che non riescono a stare fermi la notte.",
    pets: "Cani anziani con artrosi che 'partono rigidi' la mattina ma dopo 5 minuti di passeggiata corrono sciolti.",
    audioSnippet: "Rhus toxicodendron. Il rimedio della ruggine: dolori e rigidità peggiorano al primo movimento e migliorano muovendosi continuamente e col caldo. Eccellente per distorsioni e herpes."
  },
  {
    id: "gelsemium-sempervirens",
    name: "Gelsemium Sempervirens",
    commonName: "Gelsomino della Carolina",
    category: "emotional",
    icon: "😴",
    badge: "Ansia da Prestazione & Influenza",
    isFree: true,
    latinName: "Gelsemium sempervirens (Fam. Gelsemiaceae)",
    source: "Origine vegetale - Radice fresca",
    essence: "Paralisi motoria ed emotiva: debolezza muscolare tremante, palpebre pesanti, panico da esame o palco, e influenza estiva.",
    keynotes: [
      "Estrema prostrazione con tremori muscolari e pesantezza delle palpebre (occhi che si chiudono da soli).",
      "Ansia da anticipazione prima di un evento importante (esami, conferenze, dentista) che provoca diarrea o blocco mentale.",
      "Febbre ad esordio lento e progressivo con brividi che salgono e scendono lungo la schiena.",
      "Totale assenza di sete durante la febbre."
    ],
    mind: "Mente ottusa, incapacità di concentrarsi per la troppa emozione, sensazione di vuoto alla testa.",
    physical: {
      head: "Cefalea occipitale pesante che parte dalla nuca e si irradia agli occhi, migliorata urinando abbondantemente.",
      influenza: "Sindrome influenzale con dolori muscolari sordi, stanchezza schiacciante e sonnolenza continua.",
      eyes: "Diplopia, ptosi palpebrale (non riesce a tenere aperti gli occhi)."
    },
    modalities: {
      worse: ["Emozioni improvvise, brutte notizie", "Tempo caldo e umido", "Pensare ai propri mali"],
      better: ["Emissione abbondante di urine", "Sudorazione profusa", "Movimento continuo"]
    },
    potencies: "15CH o 30CH (3 granuli la sera prima dell'esame e 1 ora prima della prova).",
    antidotes: ["Coffea", "Digitalis"],
    pediatric: "Bambino che trema prima di una recita scolastica o ha mal di pancia la mattina prima di andare a scuola.",
    pets: "Cani che tremano di paura durante le visite veterinarie o viaggi in auto.",
    audioSnippet: "Gelsemium sempervirens. Straordinario per l'ansia da prestazione prima di esami o prove e per l'influenza con palpebre pesanti, tremori e spossatezza profonda."
  },
  {
    id: "ignatia-amara",
    name: "Ignatia Amara",
    commonName: "Fava di Sant'Ignazio",
    category: "emotional",
    icon: "💔",
    badge: "Lutti, Delusioni & Isteria",
    isFree: true,
    latinName: "Strychnos ignatii (Fam. Loganiaceae)",
    source: "Origine vegetale - Semi essiccati",
    essence: "Il rimedio del dolore emotivo recente: lutti, rotture sentimentali, delusioni cocenti e sintomi contraddittori paradossali.",
    keynotes: [
      "Sospiro continuo e involontario per liberare il petto da un peso.",
      "Sensazione di 'nodo alla gola' (bolo isterico) che migliora deglutendo cibi solidi.",
      "Sintomi paradossali: la nausea migliora mangiando cibi pesanti, il mal di testa migliora chinandosi.",
      "Umore mutevole: passa dal riso irrefrenabile al pianto a dirotto in pochi secondi."
    ],
    mind: "Chiusura nel proprio dolore, rimugina in silenzio, non sopporta di essere consolata (la consolazione la irrita).",
    physical: {
      throat: "Costrizione alla gola con tosse nervosa che più si tossisce più aumenta lo stimolo.",
      stomach: "Spasmi gastrici da ansia, singhiozzo frequente, sensazione di vuoto allo stomaco alle 11:00.",
      sleep: "Insonnia dopo uno shock emotivo o una lite in famiglia."
    },
    modalities: {
      worse: ["Consolazione", "Caffè, tabacco e fumo", "Dolori emotivi recenti"],
      better: ["Distrazione", "Deglutire cibi solidi", "Calore e pressione"]
    },
    potencies: "30CH o 200CH (dose singola o 3 granuli al bisogno nei momenti di crisi di pianto).",
    antidotes: ["Chamomilla", "Coffea", "Pulsatilla"],
    pediatric: "Bambini che trattengono il respiro quando piangono (spasmi affettivi) o somatizzano separazioni familiari.",
    pets: "Gatti e cani depressi e inappetenti dopo la morte del padrone o l'arrivo di un nuovo cucciolo.",
    audioSnippet: "Ignatia amara. Il grande rimedio per il cuore infranto, lutti recenti e shock emotivi. Tipici i continui sospiri involontari, il nodo alla gola e il rifiuto di essere consolati."
  },
  {
    id: "hepar-sulphuris",
    name: "Hepar Sulphuris Calcareum",
    commonName: "Fegato di Zolfo Calcareo",
    category: "first-aid",
    icon: "🌋",
    badge: "Suppurazioni & Ascessi",
    isFree: true,
    latinName: "Hepar sulfuris calcareum (Composto)",
    source: "Origine chimico-omeopatica (Fiori di zolfo + gusci d'ostrica calcinati)",
    essence: "Infiammazioni con tendenza alla formazione di pus, dolori come schegge conficcate e freddolosità esagerata.",
    keynotes: [
      "Ipersensibilità estrema al freddo: una minima corrente d'aria riaccende il dolore.",
      "Dolori pungenti 'a scheggia di vetro conficcata' (tonsille, ascessi cutanei, ferite).",
      "Sudorazione abbondante dal caratteristico odore acido o di formaggio vecchio.",
      "Tendenza marcata a suppurazioni rapide e ascessi caldi e pulsanti."
    ],
    mind: "Irascibile, violento per futilità, non tollera la minima contraddizione.",
    physical: {
      throat: "Tonsillite con pus e dolore trafittivo all'orecchio quando si deglutisce.",
      skin: "Brufoli cistici, foruncoli, ascessi dentari, unghie incarnite con pus.",
      respiratory: "Tosse secca e soffocante provocata dallo scoprirsi una mano o un piede."
    },
    modalities: {
      worse: ["Freddo secco o umido", "Minima corrente d'aria", "Toccamento della parte infiammata"],
      better: ["Calore estremo, impacchi bollenti", "Stare ben coperti anche la testa"]
    },
    potencies: "Bassa diluizione (5CH o 9CH) per far maturare e aprire un ascesso; alta diluizione (30CH) per riassorbirlo all'inizio.",
    antidotes: ["Belladonna", "Silicea"],
    pediatric: "Croup laringeo con tosse abbaiante dopo vento gelido che migliora con impacchi caldi.",
    pets: "Ascessi da morsi o graffi nei gatti con gonfiore doloroso e pus.",
    audioSnippet: "Hepar sulphuris. Rimedio per ascessi, pus e dolori a spillo o scheggia conficcata. Ipersensibile al freddo, migliora moltissimo con impacchi molto caldi."
  },
  {
    id: "hypericum-perforatum",
    name: "Hypericum Perforatum",
    commonName: "Erba di San Giovanni",
    category: "first-aid",
    icon: "⚡",
    badge: "Traumi Nervosi & Ferite",
    isFree: false,
    latinName: "Hypericum perforatum (Fam. Hypericaceae)",
    source: "Origine vegetale - Pianta intera fiorita",
    essence: "L'Arnica dei nervi': rimedio sovrano per traumi delle zone ricche di terminazioni nervose (dita, coccige, denti).",
    keynotes: [
      "Dolori lancinanti, intollerabili, che si irradiano lungo il decorso del nervo (dal basso verso l'alto).",
      "Schiacciamento delle dita delle mani o dei piedi nelle porte o con martelli.",
      "Cadute rovinose sul coccige con dolore cronico persistente.",
      "Prevenzione delle infezioni da ferite da punta (chiodi, morsi, spine)."
    ],
    mind: "Depressione e spavento causati da dolori fisici acuti insopportabili.",
    physical: {
      spine: "Traumi del rachide, colpi di frusta, dolore coccigeo post-parto o post-caduta.",
      nerves: "Nevralgie post-erpetica (dopo fuoco di Sant'Antonio), dolori da amputazione (arto fantasma).",
      dental: "Dolori atroci post-devitalizzazione o estrazione dentale con interessamento del nervo."
    },
    modalities: {
      worse: ["Freddo, umidità, nebbia", "Minimo tocco", "Movimento"],
      better: ["Riposo immobile", "Piegarsi all'indietro"]
    },
    potencies: "30CH o 200CH (3 granuli ogni 20-30 min dopo uno schiacciamento violento delle dita o caduta sul coccige).",
    antidotes: ["Arnica", "Chamomilla"],
    pediatric: "Bimbo che si schiaccia le dita nei cassetti o nelle porte; calma il dolore istantaneamente.",
    pets: "Morsi alla coda o alle zampe con lesione del nervo e dolore urente.",
    audioSnippet: "Hypericum perforatum. Il salvatore per lo schiacciamento delle dita, traumi al coccige e dolori lancinanti ai nervi. Calma il dolore nevralgico istantaneamente."
  },
  {
    id: "cantharis-vesicatoria",
    name: "Cantharis Vesicatoria",
    commonName: "Cantaride / Mosca di Spagna",
    category: "first-aid",
    icon: "🔥",
    badge: "Cistiti Brucianti & Ustioni",
    isFree: false,
    latinName: "Lytta vesicatoria (Insetto)",
    source: "Origine animale - Insetto essiccato intero",
    essence: "Bruciori intollerabili come fuoco vivo, cistiti emorragiche fulminee e ustioni di secondo grado con bolle.",
    keynotes: [
      "Dolore urente e bruciore atroce 'come ferro rovente' prima, durante e dopo la minzione.",
      "Tenesmo vescicale costante: bisogno continuo di urinare goccia a goccia con spasmi violenti.",
      "Ustioni solari o da liquidi bollenti con formazione immediata di flittene (vesciche d'acqua).",
      "Idrofobia o avversione per i liquidi perché aumentano lo stimolo minzionale."
    ],
    mind: "Agitazione frenetica per l'intensità del bruciore.",
    physical: {
      urinary: "Cistite acuta batterica o da freddo con urine torbide o ematiche.",
      skin: "Ustioni di 2° grado con bolle piene di siero limpido, eritemi solari ustionanti."
    },
    modalities: {
      worse: ["Minzione", "Caffè", "Bere acqua fredda", "Tocco"],
      better: ["Applicazioni fredde locali", "Riposo assoluto"]
    },
    potencies: "9CH o 15CH (3 granuli ogni ora nella cistite acuta fino a remissione dei bruciori).",
    antidotes: ["Aconitum", "Camphora", "Pulsatilla"],
    pediatric: "Bambini con cistite dopo bagni freddi in mare o piscina con pianto disperato alla pipì.",
    pets: "Gatti con FLUTD (cistite idiopatica felina) che vanno continuamente nella lettiera piangendo.",
    audioSnippet: "Cantharis. Il rimedio per i bruciori atroci a ferro rovente nella cistite acuta e nelle ustioni cutanee con vesciche. Risolve il tenesmo vescicale."
  },
  {
    id: "ledum-palustre",
    name: "Ledum Palustre",
    commonName: "Rosmarino Selvatico",
    category: "first-aid",
    icon: "🦟",
    badge: "Punture d'Insetto & Ferite Fredde",
    isFree: false,
    latinName: "Rhododendron tomentosum (Fam. Ericaceae)",
    source: "Origine vegetale - Ramoscelli giovani fioriti",
    essence: "Punture di insetti velenosi, ferite da chiodi/spine fredde al tatto che migliorano solo con impacchi di ghiaccio.",
    keynotes: [
      "La parte lesa è fredda al tatto, ma il paziente rifiuta qualsiasi calore e chiede solo ghiaccio.",
      "Punture di zanzare, vespe, zecche, ragni con edema biancastro o violaceo e prurito urente.",
      "Occhio nero (ematoma perioculare) dopo un pugno o una pallonata.",
      "Dolori reumatici che partono dai piedi e salgono verso l'alto."
    ],
    mind: "Tranquillo ma desideroso di solitudine.",
    physical: {
      skin: "Punture d'insetto infiammate, prevenzione delle punture durante i viaggi tropicali.",
      trauma: "Ferite profonde da punta (chiodi arrugginiti, aghi, spine di rosa o ricci di mare).",
      joints: "Gotta all'alluce con articolazione fredda che migliora immergendo il piede nell'acqua gelata."
    },
    modalities: {
      worse: ["Calore del letto e coperte", "Movimento", "Alcolici", "Notte"],
      better: ["Impacchi di ghiaccio o acqua gelida"]
    },
    potencies: "9CH o 15CH (3 granuli 3-4 volte al giorno per punture di zanzara o zecca).",
    antidotes: ["Camphora"],
    pediatric: "Bambini con reazioni esagerate e pomfi enormi da punture di zanzara tigre.",
    pets: "Punture di vespe sul muso del cane o estrazione di zecche per prevenire infezioni.",
    audioSnippet: "Ledum palustre. Rimedio principe per punture di insetti, zecche e ferite da spine. Paradossalmente la zona è fredda e migliora solo con impacchi di ghiaccio."
  },
  {
    id: "sepia-officinalis",
    name: "Sepia Officinalis",
    commonName: "Nero di Seppia",
    category: "emotional",
    icon: "🌊",
    badge: "Equilibrio Ormonale Femminile",
    isFree: false,
    latinName: "Sepia officinalis (Mollusco)",
    source: "Origine animale - Sacca del liquido nero della seppia",
    essence: "Esaurimento fisico ed emotivo nella donna: sensazione di peso pelvico, indifferenza verso i propri cari e sollievo con l'esercizio vigoroso.",
    keynotes: [
      "Sensazione di 'bearing down': sensazione che gli organi pelvici stiano per fuoriuscire, costretta a incrociare le gambe.",
      "Indifferenza affettiva per i figli e il partner ('non provo più nulla, voglio solo che mi lascino in pace').",
      "Migliora moltissimo con l'attività fisica intensa e veloce (danza, aerobica, corsa).",
      "Macchia bruna a sella sul naso e sulle guance (cloasma gravidico)."
    ],
    mind: "Triste, irritabile, apatica, stanca del carico mentale quotidiano; peggiora con la consolazione.",
    physical: {
      hormonal: "Vampate di calore in menopausa con sudorazione fredda, sindrome premestruale con nausea agli odori del cibo.",
      circulation: "Ristagno venoso, varici, gambe pesanti, stipsi con sensazione di pallina nel retto.",
      skin: "Melasma, herpes labiale recidivante prima del ciclo mestruale."
    },
    modalities: {
      worse: ["Prima e durante il ciclo mestruale", "Menopausa", "Odore dei cibi durante la gravidanza", "Freddo e riposo"],
      better: ["Esercizio fisico vigoroso e danza", "Calore del letto", "Incrociare le gambe"]
    },
    potencies: "30CH (1 volta a settimana o 3 granuli al dì in fase premestruale/menopausa).",
    antidotes: ["Aconitum", "Antimonium crudum"],
    pediatric: "Bambine timide ed enuretiche che si bagnano a letto nel primo sonno.",
    pets: "Femmine di cane o gatto con depressione o rifiuto dei cuccioli post-parto.",
    audioSnippet: "Sepia officinalis. Il grande rimedio dell'equilibrio ormonale e del sovraccarico materno. Sensazione di peso al basso ventre, vampate e miglioramento con lo sport intenso."
  },
  {
    id: "silicea",
    name: "Silicea (Terra Silicea)",
    commonName: "Silice / Cristallo di Rocca",
    category: "chronic",
    icon: "💎",
    badge: "Espulsione Corpi Estranei & Immunità",
    isFree: false,
    latinName: "Silicea terra (Minerale)",
    source: "Origine minerale pura",
    essence: "Mancanza di 'grinta' e calore vitale: timidezza, freddolosità estrema, debolezza immunitaria ed espulsione naturale di schegge/spine.",
    keynotes: [
      "Capacità biologica di espellere corpi estranei dai tessuti (spine, schegge di legno o vetro).",
      "Freddolosità glaciale: indossa cappelli e sciarpe anche d'estate, peggiora con ogni corrente d'aria.",
      "Sudore abbondante e maleodorante ai piedi e alla nuca.",
      "Unghie fragili con macchioline bianche, capelli sottili che si spezzano."
    ],
    mind: "Mite, intelligente, perfezionista ma con timore del palcoscenico e insicurezza nelle proprie capacità.",
    physical: {
      immune: "Bambini che si ammalano continuamente di tonsilliti, otiti croniche e raffreddori che non guariscono mai.",
      skin: "Cicatrici cheloidi che fanno male col cambio del tempo, brufoli che faticano a guarire.",
      bones: "Problemi di assimilazione del calcio, ritardo nella chiusura delle fontanelle."
    },
    modalities: {
      worse: ["Freddo, correnti d'aria", "Inverno", "Sforzi mentali", "Luna nuova e piena"],
      better: ["Calore estremo, avvolgersi la testa con un panno caldo", "Clima secco"]
    },
    potencies: "9CH o 15CH per favorire la maturazione ed eliminazione di una spina; 30CH costituzionale.",
    antidotes: ["Camphora", "Fluoricum acidum"],
    pediatric: "Bambini esili, testardi ma dolci, con sudorazione abbondante della testa durante il sonno.",
    pets: "Animali con forasacchi nelle zampe o otiti croniche da lieviti.",
    audioSnippet: "Silicea. Rimedio rinforzante per il sistema immunitario, unghie fragili ed espulsione naturale di spine o schegge cutanee. Freddoloso, ama coprirsi la testa."
  },
  {
    id: "calcarea-carbonica",
    name: "Calcarea Carbonica",
    commonName: "Calcare d'Ostrica",
    category: "chronic",
    icon: "🐚",
    badge: "Costituzione & Crescita",
    isFree: false,
    latinName: "Carbonas calcis (Guscio d'Ostrica)",
    source: "Origine animale/minerale - Strato mediano del guscio d'ostrica",
    essence: "Rimedio costituzionale per bambini paffuti, lenti nella crescita, freddolosi, con sudorazione abbondante della testa nel sonno.",
    keynotes: [
      "Bambino corpulento, biondo, con fontanelle che tardano a chiudersi e dentizione lenta.",
      "Sudore profuso sul cuoio capelluto che bagna il cuscino durante il sonno.",
      "Forte desiderio di uova sode e cose indigeste (terra, gesso, carbone).",
      "Grande freddolosità e intolleranza al freddo umido."
    ],
    mind: "Calmo, metodico, lento ad apprendere ma con eccellente memoria; paure del buio e dei mostri.",
    physical: {
      bones: "Rachitismo, ritardo nella deambulazione, distorsioni frequenti per lassità legamentosa.",
      digestive: "Acidità gastrica, eruttazioni acide, latte che viene rigurgitato a grumi.",
      lymph: "Ghiandole linfatiche del collo ingrossate e dure ma non dolenti."
    },
    modalities: {
      worse: ["Freddo umido, pioggia", "Sforzi fisici e salire le scale", "Luna piena"],
      better: ["Clima secco", "Stare sdraiati"]
    },
    potencies: "30CH o 200CH monodose.",
    antidotes: ["Camphora", "Nitricum acidum"],
    pediatric: "Bambino 'Calcarea': testolina umida di notte, pancino prominente, dolcissimo e amante delle uova.",
    pets: "Cuccioli di razze grandi (es. Golden Retriever, Alani) con crescita ossea troppo rapida o lassità.",
    audioSnippet: "Calcarea carbonica. Il pilastro della crescita infantile e della robustezza ossea. Tipico il sudore alla testa che bagna il cuscino e l'appetito per le uova."
  },
  {
    id: "lycopodium-clavatum",
    name: "Lycopodium Clavatum",
    commonName: "Piede di Lupo / Muschio Arboreo",
    category: "digestive",
    icon: "🎈",
    badge: "Gonfiore Addominale & Fegato",
    isFree: false,
    latinName: "Lycopodium clavatum (Fam. Lycopodiaceae)",
    source: "Origine vegetale - Spore polverizzate",
    essence: "Disturbi epatici e digestivi con gonfiore addominale immediato, fame vorace ma sazietà al primo boccone, e peggioramento tra le 16:00 e le 20:00.",
    keynotes: [
      "Gonfiore addominale immediato dopo mangiato; deve allentare la cintura dei pantaloni.",
      "Peggioramento fisso nel tardo pomeriggio (dalle 16:00 alle 20:00).",
      "Sintomi che colpiscono prevalentemente il lato destro del corpo o si spostano da destra a sinistra.",
      "Desiderio impellente di dolci, cibi caldi e bevande calde."
    ],
    mind: "Mancanza di fiducia in se stesso prima di parlare in pubblico, ma poi brillante; autoritario a casa, remissivo fuori.",
    physical: {
      digestive: "Meteorismo, flatulenza maleodorante, digestione lentissima con sonnolenza post-prandiale.",
      kidneys: "Calcoli renali destri con renella rossa nelle urine.",
      respiratory: "Movimento a ventaglio delle pinne nasali durante la polmonite o le crisi d'asma."
    },
    modalities: {
      worse: ["Tardo pomeriggio (ore 16:00 - 20:00)", "Cibi fermentanti (fagioli, cavoli, cipolle)", "Lati destri"],
      better: ["Cibi e bevande calde", "Emissione di gas", "Aria aperta fresca"]
    },
    potencies: "9CH prima dei pasti per il gonfiore o 30CH per la sfera costituzionale.",
    antidotes: ["Camphora", "Pulsatilla"],
    pediatric: "Bambini intelligenti con testolina grande e corpo minuto che si svegliano di cattivo umore.",
    pets: "Cani e gatti con coliche gassose rumorose e borborigmi intestinali nel pomeriggio.",
    audioSnippet: "Lycopodium clavatum. Sovrano per il gonfiore addominale subito dopo il primo boccone, gas intestinali e debolezza epatica tra le 16 e le 20 del pomeriggio."
  },
  {
    id: "allium-cepa",
    name: "Allium Cepa",
    commonName: "Cipolla Rossa",
    category: "respiratory",
    icon: "🧅",
    badge: "Raffreddore da Fieno & Rinite",
    isFree: false,
    latinName: "Allium cepa (Fam. Amaryllidaceae)",
    source: "Origine vegetale - Bulbo fresco",
    essence: "Rinite allergica o da raffreddamento con scolo nasale acquoso corrosivo e lacrimazione abbondante ma non irritante (l'esatto opposto di Euphrasia).",
    keynotes: [
      "Scolo nasale acquoso, abbondante che scava ed escoria il labbro superiore e le narici.",
      "Lacrimazione profusa dagli occhi ma NON irritante (occhi non bruciano, il naso sì).",
      "Starnuti a raffica violenti entrando in una stanza riscaldata.",
      "Tosse laringea straziante: sente come se la laringe si lacerasse a ogni colpo di tosse."
    ],
    mind: "Nessun sintomo emotivo marcato oltre al fastidio fisico.",
    physical: {
      nose: "Raffreddore da fieno primaverile, rinite stagionale con starnuti continui.",
      eyes: "Occhi rossi e umidi con intolleranza alla luce ma senza dolore corrosivo.",
      throat: "Tosse secca con sensazione di filo di ferro tagliente in trachea."
    },
    modalities: {
      worse: ["Stanze calde e chiuse", "Sera", "Vento freddo e umido"],
      better: ["Aria aperta e fresca", "Stanze ben ventilate"]
    },
    potencies: "9CH o 15CH (3 granuli ogni 2-3 ore durante la fase acuta degli starnuti).",
    antidotes: ["Arnica", "Chamomilla", "Thuja"],
    pediatric: "Bambini con il nasino rosso 'spellato' dal moccio acquoso durante il primo giorno di scuola materna.",
    pets: "Gatti con scolo nasale acquoso limpido e starnuti frequenti.",
    audioSnippet: "Allium cepa. Il rimedio per il raffreddore da fieno e starnuti a raffica. Muco acquoso che brucia il labbro superiore e migliora immediatamente all'aria fresca."
  },
  {
    id: "carbo-vegetabilis",
    name: "Carbo Vegetabilis",
    commonName: "Carbone Vegetale",
    category: "first-aid",
    icon: "💨",
    badge: "Il Grande Rianimatore",
    isFree: false,
    latinName: "Carbo vegetabilis (Origine Legnosa)",
    source: "Carbone di betulla o faggio calcinato",
    essence: "Il 'rianimatore' dell'omeopatia: per stati di collasso, digestione bloccata con pancia che sembra scoppiare e fame d'aria ('sventolatemi').",
    keynotes: [
      "Debolezza estrema con polso quasi impercettibile e pelle fredda coperta di sudore gelido.",
      "Fame disperata d'aria: chiede di aprire tutte le finestre e di essere sventolato vigorosamente.",
      "Addome superiore teso come un tamburo; non riesce a respirare per il gonfiore gastrico.",
      "Eruttazioni continue che danno un temporaneo e fugace sollievo."
    ],
    mind: "Mente apatica, indifferente a tutto ciò che accade attorno.",
    physical: {
      stomach: "Indigestione grave con fermentazione putrida, bruciori e meteorismo acuto.",
      respiratory: "Affanno terminale o post-infettivo con cianosi alle labbra e mani fredde.",
      vascular: "Ristagno venoso periferico con pelle marmorizzata."
    },
    modalities: {
      worse: ["Calore e coperte pesanti", "Cibi grassi e alcol", "Stare sdraiati"],
      better: ["Essere sventolati con aria fresca", "Eruttazioni", "Aria aperta"]
    },
    potencies: "30CH ogni 15 minuti in emergenza (a supporto del soccorso medico) o 9CH prima dei pasti per gonfiori gravi.",
    antidotes: ["Camphora", "Coffea"],
    pediatric: "Bambini dopo una gastroenterite prolungata che rimangono pallidi, cianotici e senza forze.",
    pets: "Cani anziani con collasso respiratorio o dilatazione gastrica d'urgenza.",
    audioSnippet: "Carbo vegetabilis. Definito il grande rianimatore omeopatico. Per spossatezza estrema con sudore freddo, fame d'aria e addome gonfio come un pallone."
  },
  {
    id: "cocculus-indicus",
    name: "Cocculus Indicus",
    commonName: "Guscio d'Oriente / Menispermo",
    category: "first-aid",
    icon: "🚗",
    badge: "Chinetosi & Notti Insonni",
    isFree: false,
    latinName: "Anamirta cocculus (Fam. Menispermaceae)",
    source: "Origine vegetale - Frutti essiccati",
    essence: "Nausea e vertigini provocate dal movimento passivo (auto, nave, aereo) o da notti insonni dedicate ad assistere persone malate.",
    keynotes: [
      "Chinetosi grave: nausea e capogiri guardando oggetti in movimento o viaggiando in auto/treno/nave.",
      "Esaurimento e confusione mentale dopo aver vegliato un parente ammalato per notti consecutive.",
      "Sensazione di vuoto e debolezza alla testa e all'addome.",
      "La sola vista o l'odore del cibo provoca nausea immediata."
    ],
    mind: "Rallentamento dei riflessi, tristezza ansiosa per la salute dei propri cari.",
    physical: {
      vertigo: "Vertigini rotatorie con sensazione che la stanza giri quando ci si alza dal letto.",
      digestive: "Nausea con salivazione metallica, che peggiora bevendo o muovendosi.",
      spine: "Debolezza paralitica dei muscoli del collo (la testa sembra troppo pesante)."
    },
    modalities: {
      worse: ["Viaggi in auto, nave, aereo", "Mancanza di sonno e veglie notturne", "Fumo di tabacco", "Freddo"],
      better: ["Stare sdraiati in una stanza calda e buia", "Sonno ristoratore"]
    },
    potencies: "9CH o 30CH (3 granuli 30 minuti prima di salire in auto o nave, da ripetere al bisogno).",
    antidotes: ["Camphora", "Chamomilla", "Nux vomica"],
    pediatric: "Bambini che soffrono il mal d'auto e vomitano regolarmente nei viaggi in montagna.",
    pets: "Cani con forte salivazione e nausea da viaggio nei tragitti in macchina.",
    audioSnippet: "Cocculus indicus. Il rimedio per eccellenza contro il mal d'auto, mal di mare e la stanchezza da notti insonni per assistere persone care."
  },
  {
    id: "drosera-rotundifolia",
    name: "Drosera Rotundifolia",
    commonName: "Pianta Carnivora / Rugiada del Sole",
    category: "respiratory",
    icon: "🌿",
    badge: "Tosse Convulsa & Pertosse",
    isFree: false,
    latinName: "Drosera rotundifolia (Fam. Droseraceae)",
    source: "Origine vegetale - Tutta la pianta fresca fiorita",
    essence: "Accessi violenti di tosse secca spasmodica, suffocante, che si scatenano non appena la testa tocca il cuscino la sera.",
    keynotes: [
      "Accessi di tosse così ravvicinati che il paziente non riesce a riprendere fiato (tosse a raffiche).",
      "Peggioramento sistematico non appena ci si corica a letto e dopo mezzanotte.",
      "Tosse che termina con vomito di muco filante o conati per lo sforzo.",
      "Sensazione di piuma o solletico continuo in laringe."
    ],
    mind: "Ansia e spavento durante gli accessi di soffocamento.",
    physical: {
      throat: "Laringite con voce rauca, profonda, cavernosa.",
      respiratory: "Tosse pertussoide notturna, bronchite spastica dei bambini."
    },
    modalities: {
      worse: ["Sdraiarsi a letto (appena la testa tocca il cuscino)", "Dopo mezzanotte", "Calore del letto", "Parlare o ridere"],
      better: ["Stare seduti nel letto", "Pressione delle mani sul torace"]
    },
    potencies: "30CH (3 granuli prima di dormire e durante gli accessi notturni).",
    antidotes: ["Camphora"],
    pediatric: "Bambino che tossisce ininterrottamente fino al vomito solo di notte non appena lo metti a letto.",
    pets: "Tosse dei canili (tracheobronchite infettiva canina) con attacchi parossistici violenti.",
    audioSnippet: "Drosera rotundifolia. Il rimedio per gli attacchi violenti di tosse notturna a raffiche continue, scatenati non appena la testa tocca il cuscino."
  },
  {
    id: "euphrasia-officinalis",
    name: "Euphrasia Officinalis",
    commonName: "Luminella / Erba degli Occhi",
    category: "respiratory",
    icon: "👁️",
    badge: "Congiuntivite & Allergie Oculari",
    isFree: false,
    latinName: "Euphrasia stricta (Fam. Orobanchaceae)",
    source: "Origine vegetale - Tutta la pianta fresca fiorita",
    essence: "Infiammazione oculare con lacrimazione corrosiva, bruciante, fotofobia e scolo nasale abbondante ma blando.",
    keynotes: [
      "Lacrime calde, brucianti e corrosive che arrossano e scottano le guance.",
      "Scolo nasale abbondante ma blando (non irrita le narici, a differenza di Allium Cepa).",
      "Sensazione di granelli di sabbia negli occhi e secrezione mucosa densa che incolla le palpebre al mattino.",
      "Forte fotofobia (intolleranza alla luce solare e schermi)."
    ],
    mind: "Irritabilità dovuta al bruciore agli occhi.",
    physical: {
      eyes: "Congiuntiviti infettive o allergiche, cheratiti, blefariti, affaticamento da lenti a contatto.",
      respiratory: "Raffreddore da fieno con tosse diurna che migliora stando sdraiati."
    },
    modalities: {
      worse: ["Luce intensa, vento e sole", "Sera", "Stanze chiuse e calde"],
      better: ["Stanza buia", "Sciacquare gli occhi con acqua fresca", "Aria aperta"]
    },
    potencies: "9CH (3 granuli 3-4 volte al dì) e collirio omeopatico ad uso locale.",
    antidotes: ["Camphora", "Pulsatilla"],
    pediatric: "Congiuntivite neonatale con occhietti incollati al risveglio.",
    pets: "Occhi arrossati e lacrimanti nei cani dopo passeggiate in mezzo all'erba alta.",
    audioSnippet: "Euphrasia officinalis. Il rimedio degli occhi: congiuntivite, allergie stagionali e lacrimazione bruciante che incolla le palpebre al risveglio."
  },
  {
    id: "ruta-graveolens",
    name: "Ruta Graveolens",
    commonName: "Ruta Comune",
    category: "musculoskeletal",
    icon: "🌿",
    badge: "Tendini & Periostio",
    isFree: false,
    latinName: "Ruta graveolens (Fam. Rutaceae)",
    source: "Origine vegetale - Foglie fresche prima della fioritura",
    essence: "Traumi e infiammazioni del periostio, dei tendini, delle guaine articolari (tunnel carpale, gomito del tennista) e affaticamento visivo.",
    keynotes: [
      "Dolore come se le ossa fossero contuse o spezzate nei punti dove il periostio è sottile (stinco, gomito, polso).",
      "Tendiniti croniche da gesti ripetuti (lavoro al computer, uso del mouse, tennisti, musicisti).",
      "Stanchezza visiva bruciante dopo ore di lettura microscopica o lavoro su monitor.",
      "Distorsioni gravi delle caviglie con lesione dei legamenti."
    ],
    mind: "Ansioso e insoddisfatto di se stesso.",
    physical: {
      tendons: "Epicondilite (gomito del tennista), tendinite achillea, cisti tendinee sul polso.",
      eyes: "Astenopia accomodativa: bruciore oculare e cefalea dopo aver fissato schermi.",
      bones: "Dolore allo sterno, clavicole e coste dopo colpi o tosse violenta."
    },
    modalities: {
      worse: ["Freddo umido", "Riposo prolungato", "Sforzo visivo continuo", "Sdraiarsi sul lato dolente"],
      better: ["Movimento dolce continuo", "Calore locale"]
    },
    potencies: "9CH o 15CH (3 granuli due volte al giorno per tendiniti e disturbi da mouse).",
    antidotes: ["Camphora"],
    pediatric: "Dolori periostei alle tibie nei bambini dopo aver calciato male a pallone.",
    pets: "Cani sportivi (agility dog) con stiramenti tendinei e zoppia dopo i salti.",
    audioSnippet: "Ruta graveolens. Eccellente per tendiniti da lavoro al computer, gomito del tennista, traumi periostei e occhi affaticati da schermi e lettura prolungata."
  },
  {
    id: "thuja-occidentalis",
    name: "Thuja Occidentalis",
    commonName: "Albero della Vita / Tuia",
    category: "chronic",
    icon: "🌲",
    badge: "Verruche, Polipi & Post-Vaccino",
    isFree: false,
    latinName: "Thuja occidentalis (Fam. Cupressaceae)",
    source: "Origine vegetale - Ramoscelli giovani e foglie",
    essence: "Il re della sicosi: escrescenze cutanee (verruche, condilomi, polipi), cellulite, disturbi cutanei e sequele croniche post-vaccinali.",
    keynotes: [
      "Verruche molli, peduncolate, che sanguinano facilmente (mani, pianta del piede, viso).",
      "Tendenza a ritenzione idrica, forfora untuosa e sudorazione dal tipico odore dolciastro o di porri cotti.",
      "Effetti collaterali o abbassamento immunitario prolungato dopo vaccinazioni o trattamenti antibiotici.",
      "Sensazione fissa di 'avere qualcosa di vivo che si muove nell'addome' o che il corpo sia fragile come vetro."
    ],
    mind: "Idee fisse, gelosia morbosa, timore di essere toccato perché si sente vulnerabile come il cristallo.",
    physical: {
      skin: "Verruche plantari resistenti, fibromi penduli al collo, pelle untuosa con pori dilatati.",
      urology: "Infezioni urinarie recidivanti, ipertrofia prostatica, perdite uretrali croniche.",
      respiratory: "Polipi nasali con perdita dell'olfatto, asma infantile dopo vaccinazioni."
    },
    modalities: {
      worse: ["Umidità fredda", "Vaccinazioni", "Cipolle e tè", "Ore 3:00 del mattino e 15:00"],
      better: ["Clima caldo e secco", "Disegno ed emissione di secrezioni"]
    },
    potencies: "30CH o 200CH monodose settimanale / mensile secondo prescrizione.",
    antidotes: ["Camphora", "Chamomilla", "Pulsatilla"],
    pediatric: "Bambini che sviluppano eczemi o catarri cronici recidivanti dopo vaccinazioni di routine.",
    pets: "Papillomi e verruche sulle labbra o sulle zampe dei cani giovani.",
    audioSnippet: "Thuja occidentalis. Il rimedio per verruche, formazioni cutanee peduncolate, ritenzione idrica e riequilibrio generale dell'organismo post-farmaci e vaccini."
  },
  {
    id: "sulphur",
    name: "Sulphur (Zolfo Purificato)",
    commonName: "Fiore di Zolfo",
    category: "chronic",
    icon: "☀️",
    badge: "Disintossicazione & Eczemi",
    isFree: false,
    latinName: "Sulphur sublimatum depuratum (Minerale)",
    source: "Origine minerale pura",
    essence: "Il grande depuratore omeopatico: bruciori cutanei, calore ai piedi nel letto, fame vorace alle ore 11:00 e intolleranza all'acqua del bagno.",
    keynotes: [
      "Bruciori ovunque (vertice della testa, occhi, stomaco, pianta dei piedi che viene cacciata fuori dalle coperte di notte).",
      "Prurito intenso che brucia dopo essersi grattati e peggiora bagnando la pelle con l'acqua.",
      "Orifizi del corpo rosso fuoco (labbra, palpebre, ano, meato uretrale).",
      "Fame impellente e sensazione di vuoto allo stomaco puntualmente alle 11:00 del mattino."
    ],
    mind: "Creativo, filosofo, disordinato geniale; colleziona oggetti usati considerandoli tesori preziosi.",
    physical: {
      skin: "Eczemi secchi o umidi con prurito che non dà tregua nel letto caldo.",
      bowels: "Diarrea mattutina improvvisa alle 5:00 che scaccia il paziente dal letto a piedi nudi.",
      circulation: "Sensazione di calore alla sommità del capo e vampate improvvise."
    },
    modalities: {
      worse: ["Calore del letto e coperte", "Lavarsi o fare il bagno", "Stare in piedi a lungo", "Ore 11:00"],
      better: ["Clima secco e fresco", "Movimento"]
    },
    potencies: "30CH o 200CH distanziate nel tempo.",
    antidotes: ["Aconitum", "Camphora", "Pulsatilla"],
    pediatric: "Bambini vivaci, calorosi, che rifiutano categoricamente di farsi lavare o fare il bagno.",
    pets: "Cani con prurito cronico diffuso, pelle arrossata e pelo opaco che amano sdraiarsi sul pavimento fresco.",
    audioSnippet: "Sulphur. Il grande stimolatore della reattività vitale. Ideale per eczemi con prurito che peggiora col calore del letto, piedi bollenti e fame alle 11."
  }
];

export const CATEGORIES = [
  { id: "all", name: "Tutti i Rimedi", icon: "✨" },
  { id: "first-aid", name: "Pronto Soccorso & Traumi", icon: "🩹" },
  { id: "pediatric", name: "Bambini & Dentizione", icon: "👶" },
  { id: "respiratory", name: "Raffreddore, Tosse & Gola", icon: "🫁" },
  { id: "digestive", name: "Digestione & Stomaco", icon: "🍵" },
  { id: "emotional", name: "Ansia, Sonno & Stress", icon: "🧠" },
  { id: "musculoskeletal", name: "Muscoli, Tendini & Ossa", icon: "🦴" },
  { id: "chronic", name: "Costituzionali & Immunità", icon: "🌿" }
];
