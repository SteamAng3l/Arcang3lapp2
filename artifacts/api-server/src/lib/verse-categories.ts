export interface CategoryInfo {
  name: string;
  label: string;
  keywords: string[];
  message: string;
}

export const categories: CategoryInfo[] = [
  {
    name: "ansiedad",
    label: "Ansiedad",
    keywords: ["ansiedad", "angustia", "estres", "estrés", "preocupacion", "preocupación", "nervios", "agobio", "ansioso", "ansiosa"],
    message: "Dios invita a dejar la ansiedad en sus manos. Respira, ora y descansa en su cuidado.",
  },
  {
    name: "miedo",
    label: "Miedo",
    keywords: ["miedo", "temor", "terror", "inseguridad", "asustado", "asustada", "temo", "atemorizado"],
    message: "Cuando hay miedo, la Biblia recuerda que Dios acompaña y fortalece.",
  },
  {
    name: "tristeza",
    label: "Tristeza",
    keywords: ["triste", "tristeza", "dolor", "llanto", "depresion", "depresión", "desanimo", "desánimo", "llorando", "pena"],
    message: "En medio de la tristeza, Dios permanece cerca del corazón quebrantado.",
  },
  {
    name: "soledad",
    label: "Soledad",
    keywords: ["solo", "sola", "soledad", "abandono", "rechazo", "abandonado", "abandonada", "nadie"],
    message: "Aunque te sientas solo o sola, Dios no abandona a quienes le buscan.",
  },
  {
    name: "perdon",
    label: "Perdón",
    keywords: ["perdon", "perdón", "culpa", "pecado", "fallé", "falle", "arrepentimiento", "vergüenza", "verguenza", "culpable"],
    message: "Hay perdón y restauración para quien se acerca a Dios con sinceridad.",
  },
  {
    name: "esperanza",
    label: "Esperanza",
    keywords: ["esperanza", "futuro", "sin salida", "desesperado", "desesperada", "rendirme", "rendirse", "no puedo más", "no puedo mas"],
    message: "Aun cuando parece que no hay salida, Dios sigue siendo fuente de esperanza.",
  },
  {
    name: "fortaleza",
    label: "Fortaleza",
    keywords: ["débil", "debil", "cansado", "cansada", "fuerza", "fortaleza", "batalla", "agotado", "agotada", "cansancio"],
    message: "Cuando tus fuerzas se acaban, Dios puede sostenerte y renovarte.",
  },
  {
    name: "sabiduria",
    label: "Sabiduría",
    keywords: ["decision", "decisión", "guia", "guía", "sabiduria", "sabiduría", "camino", "qué hacer", "que hacer", "dirección", "direccion"],
    message: "Dios puede dar dirección y sabiduría cuando no sabes qué hacer.",
  },
  {
    name: "amor",
    label: "Amor",
    keywords: ["amor", "amar", "amado", "amada", "caridad", "querer", "quiero", "quiere"],
    message: "El amor de Dios es eterno e incondicional. Nada puede separarte de Él.",
  },
  {
    name: "fe",
    label: "Fe",
    keywords: ["fe", "creer", "creo", "increible", "duda", "dudar", "dudo", "incredulidad"],
    message: "La fe mueve montañas. Confía en el poder de creer aunque no puedas ver.",
  },
  {
    name: "paciencia",
    label: "Paciencia",
    keywords: ["paciencia", "esperar", "espero", "tardanza", "demora", "desesperacion", "desesperación", "urgencia"],
    message: "Dios actúa en su tiempo perfecto. Esperar en Él produce fruto duradero.",
  },
  {
    name: "gratitud",
    label: "Gratitud",
    keywords: ["gratitud", "gracias", "agradecido", "agradecida", "bendicion", "bendición", "alabar", "alabanza"],
    message: "Un corazón agradecido encuentra la presencia de Dios en cada momento.",
  },
  {
    name: "alegria",
    label: "Alegría",
    keywords: ["alegria", "alegría", "feliz", "felicidad", "contento", "contenta", "gozo", "gozoso"],
    message: "El gozo del Señor es tu fortaleza. Regocíjate en su amor cada día.",
  },
  {
    name: "confianza",
    label: "Confianza",
    keywords: ["confianza", "confiar", "confio", "confío", "seguridad", "refugio", "amparo"],
    message: "Encomienda tu camino a Dios y Él enderezará tus pasos.",
  },
  {
    name: "perseverancia",
    label: "Perseverancia",
    keywords: ["perseverar", "perseverancia", "rendirse", "no me rindo", "constancia", "persistir", "seguir adelante", "continuar"],
    message: "No te canses de hacer el bien. A su tiempo cosecharás si no desmayás.",
  },
  {
    name: "salud",
    label: "Salud",
    keywords: ["salud", "enfermo", "enferma", "enfermedad", "sanidad", "sanar", "curacion", "curación", "dolor fisico", "hospital"],
    message: "Dios es tu sanador. En Él hay restauración para el cuerpo y el alma.",
  },
  {
    name: "proteccion",
    label: "Protección",
    keywords: ["proteccion", "protección", "peligro", "amenaza", "seguro", "segura", "guardar", "cuidar", "cuidado"],
    message: "Dios es tu escudo y fortaleza. Él vela por ti en todo momento.",
  },
  {
    name: "paz",
    label: "Paz",
    keywords: ["paz", "tranquilidad", "tranquilo", "tranquila", "calma", "sosiego", "inquieto", "inquieta", "agitado", "agitada"],
    message: "La paz de Dios sobrepasa todo entendimiento y guarda tu corazón en Cristo.",
  },
  {
    name: "humildad",
    label: "Humildad",
    keywords: ["humildad", "humilde", "orgullo", "soberbia", "arrogancia", "engreido", "engreída"],
    message: "Dios da gracia a los humildes. La mansedumbre es fortaleza verdadera.",
  },
  {
    name: "obediencia",
    label: "Obediencia",
    keywords: ["obedecer", "obediencia", "mandamiento", "mandamientos", "voluntad de dios", "seguir a dios"],
    message: "Obedecer a Dios es el camino a la vida. Su voluntad es siempre lo mejor.",
  },
  {
    name: "justicia",
    label: "Justicia",
    keywords: ["justicia", "injusticia", "justo", "injusto", "opresion", "opresión", "maltrato", "abuso"],
    message: "Dios es juez justo. Él defiende al oprimido y endereza lo torcido.",
  },
  {
    name: "salvacion",
    label: "Salvación",
    keywords: ["salvacion", "salvación", "salvo", "salva", "pecados", "vida eterna", "redimido", "redimida"],
    message: "En Cristo hay salvación completa. Quien cree en Él tiene vida eterna.",
  },
  {
    name: "oracion",
    label: "Oración",
    keywords: ["oracion", "oración", "orar", "orar a dios", "orar sin cesar", "interceder", "clamor", "clamar"],
    message: "La oración conecta tu corazón con el de Dios. Él te escucha siempre.",
  },
  {
    name: "disciplina",
    label: "Disciplina",
    keywords: ["disciplina", "correccion", "corrección", "habitos", "hábitos", "autocontrol", "templanza", "formacion", "formación"],
    message: "La disciplina de Dios viene de su amor. Produce fruto de justicia y paz.",
  },
  {
    name: "bondad",
    label: "Bondad",
    keywords: ["bondad", "bondadoso", "bondadosa", "benignidad", "generoso", "generosa", "generosidad", "buen corazon", "buen corazón"],
    message: "Dios es bueno y su bondad se extiende a todas sus obras. Refleja su amor.",
  },
  {
    name: "misericordia",
    label: "Misericordia",
    keywords: ["misericordia", "misericordioso", "piedad", "compasivo", "compasiva", "clemente"],
    message: "Las misericordias de Dios son nuevas cada mañana. Grande es su fidelidad.",
  },
  {
    name: "renovacion",
    label: "Renovación",
    keywords: ["renovacion", "renovación", "nuevo comienzo", "nueva vida", "transformacion", "transformación", "cambio", "restauracion", "restauración"],
    message: "Dios hace nuevas todas las cosas. Su gracia renueva tu espíritu cada día.",
  },
  {
    name: "fortaleza_espiritual",
    label: "Fortaleza espiritual",
    keywords: ["fortaleza espiritual", "armadura", "batalla espiritual", "espiritual", "poder espiritual", "ungido", "poderoso en dios"],
    message: "Fortalécete en el Señor. Su poder se perfecciona en tu debilidad.",
  },
  {
    name: "luz",
    label: "Luz",
    keywords: ["luz", "tinieblas", "oscuridad", "oscuro", "iluminar", "brillar", "lampara"],
    message: "Jesús es la luz del mundo. En Él no hay tinieblas ni oscuridad alguna.",
  },
  {
    name: "verdad",
    label: "Verdad",
    keywords: ["verdad", "mentira", "engaño", "engañado", "engañada", "falso", "falsa", "veracidad"],
    message: "La verdad de Dios te hace libre. Su Palabra es lámpara a tus pies.",
  },
  {
    name: "libertad",
    label: "Libertad",
    keywords: ["libertad", "libre", "liberar", "liberado", "liberada", "atado", "atada", "opresion", "cautivo", "cautiva"],
    message: "Cristo vino a darte libertad. Donde está el Espíritu del Señor, allí hay libertad.",
  },
  {
    name: "gozo",
    label: "Gozo",
    keywords: ["gozo", "gozoso", "gozosa", "júbilo", "jubilo", "regocijo", "alegrarse"],
    message: "El gozo de Dios no depende de las circunstancias. Es fruto de su Espíritu.",
  },
  {
    name: "compasion",
    label: "Compasión",
    keywords: ["compasion", "compasión", "compasivo", "lástima", "lastima", "empatia", "empatía", "sufrimiento ajeno"],
    message: "Dios se compadece como padre de sus hijos. Él ve tu dolor y te sostiene.",
  },
  {
    name: "esperanza_dificil",
    label: "Esperanza en tiempos difíciles",
    keywords: ["tiempos dificiles", "tiempos difíciles", "crisis", "calamidad", "catastrofe", "catástrofe", "adversidad", "prueba dura"],
    message: "En medio de la tormenta, Dios sigue siendo refugio y fortaleza segura.",
  },
  {
    name: "redencion",
    label: "Redención",
    keywords: ["redencion", "redención", "redimido", "redimida", "rescatado", "rescatada", "comprado", "sangre de cristo"],
    message: "Fuiste redimido por la sangre de Cristo. Eres libre de toda condenación.",
  },
  {
    name: "santidad",
    label: "Santidad",
    keywords: ["santidad", "santo", "santa", "pureza", "puro", "pura", "santificado", "santificada", "consagrado"],
    message: "Dios te llama a ser santo porque Él es santo. La santidad es el camino a su presencia.",
  },
  {
    name: "servicio",
    label: "Servicio",
    keywords: ["servir", "servicio", "servidor", "ministerio", "ayudar", "ayudando", "voluntario", "vocacion", "vocación"],
    message: "Servir a los demás es servir a Cristo. Usa tus dones para la gloria de Dios.",
  },
  {
    name: "unidad",
    label: "Unidad",
    keywords: ["unidad", "union", "unión", "hermanos", "iglesia", "comunidad", "discordia", "division", "división"],
    message: "Qué bueno y delicioso es habitar los hermanos en unión. Dios habita en la unidad.",
  },
  {
    name: "perdon_reconciliacion",
    label: "Perdón y reconciliación",
    keywords: ["reconciliacion", "reconciliación", "reconciliar", "hacer las paces", "perdonar a alguien", "perdonar al que me hizo daño"],
    message: "Perdonar libera al que perdona. Dios nos reconcilió consigo; Él nos ayuda a reconciliarnos.",
  },
  {
    name: "confianza_dios",
    label: "Confianza en Dios",
    keywords: ["confiar en dios", "confio en dios", "confío en dios", "fiar en dios", "dejarle a dios", "dios tiene el control", "entregarse a dios"],
    message: "Confía de todo corazón en Dios. Él conoce tus caminos y los guiará.",
  },
];

export function detectCategory(text: string): string {
  const normalized = text.toLowerCase();
  for (const category of categories) {
    for (const keyword of category.keywords) {
      if (normalized.includes(keyword)) {
        return category.name;
      }
    }
  }
  return "esperanza";
}

export const categoryMessages: Record<string, string> = Object.fromEntries(
  categories.map((c) => [c.name, c.message])
);

// ─── Relevance scoring ────────────────────────────────────────────────────────

/** Remove Spanish accents: á→a, é→e, í→i, ó→o, ú→u, ü→u */
function removeAccents(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/** Common Spanish stop-words that carry no search meaning. */
const STOP_WORDS = new Set([
  "y","de","el","la","los","las","que","en","a","es","se","no","un","una",
  "con","por","para","mi","me","te","su","lo","le","del","al","yo","tu",
  "son","si","ya","mas","pero","o","ni","hay","he","ha","han","era","esto",
  "eso","como","muy","asi","pues","porque","cuando","donde","quien","tanto",
  "todo","toda","todos","todas","puede","dios","sus","les","nos","nuestro",
  "nuestra","ellos","ellas","uno","dos","tres","ser","estar","fue","hay",
  "esta","este","ese","esa","esos","esas","entre","sobre","ante","bajo",
  "sin","contra","tras","durante","mediante","segun","hacia","hasta",
  "desde","aunque","sino","bien","cada","más","menos","hizo","tenia",
  "tiene","tengo","quiero","quiere","siento","siente","puedo","puede",
  "volver","volvio","nada","algo","alguien","nunca","siempre","mucho",
  "poco","aqui","alli","ahora","antes","despues",
]);

/**
 * Bridge between modern Spanish emotional vocabulary and archaic RVR1909 Bible text.
 */
const SYNONYM_BRIDGE: Array<{ from: string; to: string[] }> = [
  // Ansiedad / preocupación
  { from: "angust",  to: ["angust", "afan", "solici", "inquie"] },
  { from: "nervio",  to: ["tieml", "espant", "tema", "turbad"] },
  { from: "preocup", to: ["afan", "solici", "cuidad"] },
  { from: "ansieda", to: ["afan", "solici", "inquie"] },
  { from: "agobio",  to: ["carga", "peso", "afan"] },
  { from: "estres",  to: ["afan", "solici", "inquie"] },
  { from: "dormir",  to: ["dormir"] },
  // Tristeza
  { from: "triste",  to: ["triste", "llor", "lament", "afligi", "quebran", "gemir"] },
  { from: "llorar",  to: ["llorar", "lloro", "llorad", "lloran", "llanto", "lament"] },
  { from: "dolor",   to: ["dolor", "angust", "afligi", "llaga"] },
  { from: "depres",  to: ["afligi", "quebran", "desfall", "desfallec"] },
  { from: "pena",    to: ["pena", "afligi", "dolor", "llanto"] },
  { from: "llanto",  to: ["llanto", "llor", "lament", "gemir"] },
  // Miedo
  { from: "miedo",   to: ["miedo", "temas", "tema", "temor", "espant", "pavur"] },
  { from: "temor",   to: ["temor", "temas", "tema", "espant"] },
  { from: "asusta",  to: ["espant", "temas", "tema", "turbe"] },
  { from: "terror",  to: ["terror", "espant", "pavur", "temor"] },
  { from: "morir",   to: ["muerte", "morir", "mueran", "murio", "sepu"] },
  { from: "muerte",  to: ["muerte", "morir", "mueran", "murio", "sepu"] },
  // Soledad
  { from: "solo",    to: ["contig", "dejare", "desampar", "huerfan", "solo", "sola"] },
  { from: "soleda",  to: ["contig", "dejare", "desampar", "solo"] },
  { from: "abandon", to: ["desampar", "dejare", "contig", "abandon"] },
  { from: "rechaz",  to: ["menospre", "despreciad", "desech"] },
  { from: "familia", to: ["familia"] },
  { from: "nadie",   to: ["nadie", "ninguno"] },
  // Perdón
  { from: "perdon",  to: ["perdon"] },
  { from: "culpa",   to: ["pecad", "culpa", "iniquid", "transgres"] },
  { from: "pecado",  to: ["pecad", "iniquid", "culpa", "transgres"] },
  { from: "arrepent",to: ["arrepen", "convers", "vuelvos", "contrito"] },
  { from: "verguen", to: ["verguen", "confundi", "avergon"] },
  { from: "padre",   to: ["padre", "padres", "progenitor"] },
  { from: "madre",   to: ["madre", "madres"] },
  { from: "hijo",    to: ["hijo", "hijos", "hija", "hijas"] },
  // Esperanza
  { from: "esperan", to: ["esperan", "confian", "aguarda", "confia"] },
  { from: "desespe", to: ["esperan", "confia", "aguarda", "animo"] },
  { from: "futuro",  to: ["venir", "porven", "futuro", "dias"] },
  { from: "salida",  to: ["libra", "salva", "rescue", "escap"] },
  // Fortaleza
  { from: "cansad",  to: ["esfuerz", "fuerza", "fortale", "cansad", "renova"] },
  { from: "debil",   to: ["fuerza", "fortale", "esfuerz", "fortif"] },
  { from: "agotad",  to: ["renova", "fuerza", "descans", "esfuerz"] },
  { from: "fuerzas", to: ["fuerza", "esfuerz", "fortale", "vigor"] },
  { from: "batall",  to: ["batall", "guerra", "combate", "pelear"] },
  // Sabiduría
  { from: "decisi",  to: ["camino", "sabidu", "ensen", "instruy"] },
  { from: "sabidu",  to: ["sabidu", "entend", "instruy", "ciencia"] },
  { from: "camino",  to: ["camino", "senda", "vereda"] },
  { from: "matrim",  to: ["matrimon", "casad"] },
  { from: "guia",    to: ["guia", "dirigir", "encamin", "ensen"] },
  // Amor
  { from: "amor",    to: ["amor", "amar", "amad", "caridad"] },
  { from: "carid",   to: ["caridad", "amor", "benign"] },
  // Fe
  { from: "fe",      to: ["fe", "creer", "creen", "creed", "fiel"] },
  { from: "duda",    to: ["duda", "incredul", "vacila"] },
  // Paz
  { from: "paz",     to: ["paz", "sosieg", "tranquil", "repos"] },
  { from: "tranqui", to: ["paz", "sosieg", "repos", "tranquil"] },
  // Misericordia
  { from: "miseri",  to: ["misericord", "piedaд", "clement", "benign"] },
  // Luz
  { from: "luz",     to: ["luz", "lumbre", "lamp", "resplan"] },
  { from: "oscuri",  to: ["tinieblas", "oscur", "sombra"] },
  // Verdad
  { from: "verdad",  to: ["verdad", "veraz", "fiel"] },
  { from: "mentir",  to: ["mentir", "engañ", "falsedad"] },
  // Libertad
  { from: "libert",  to: ["libert", "libre", "libra", "desata"] },
  { from: "cautiv",  to: ["cautiv", "preso", "escla"] },
  // Salvación
  { from: "salvaci", to: ["salvaci", "salvo", "salva", "redenci"] },
  // Oración
  { from: "oraci",   to: ["oraci", "orar", "clama", "ruego"] },
  // Gozo
  { from: "gozo",    to: ["gozo", "goce", "jubilo", "alegr"] },
  // Humildad
  { from: "humild",  to: ["humild", "humble", "manso", "mansa"] },
  { from: "orgullo", to: ["soberb", "altiv", "jactanci"] },
  // Santidad
  { from: "santid",  to: ["santid", "santo", "santa", "santif", "puro", "pura"] },
];

/** Truncate to first 5 chars for lightweight stemming (handles conjugations). */
function stem(word: string): string {
  if (word.length <= 5) return word;
  return word.slice(0, 5);
}

/**
 * Tokenizes text into meaningful Spanish words.
 * Returns accent-free, lowercase tokens ≥ 4 chars, without stop-words.
 */
export function extractKeywords(text: string): string[] {
  const clean = removeAccents(text.toLowerCase()).replace(/[^a-z\s]/g, " ");
  return clean
    .split(/\s+/)
    .filter((w) => w.length >= 4 && !STOP_WORDS.has(w));
}

/**
 * Expands user keywords with Bible-vocabulary synonyms and stems.
 */
export function enrichKeywords(keywords: string[]): string[] {
  const enriched = new Set<string>();
  for (const word of keywords) {
    enriched.add(word);
    enriched.add(stem(word));
    for (const entry of SYNONYM_BRIDGE) {
      if (word.startsWith(entry.from) || entry.from.startsWith(stem(word))) {
        for (const t of entry.to) enriched.add(t);
      }
    }
  }
  return Array.from(enriched);
}

/**
 * Scores a Bible verse against a set of enriched search patterns.
 */
export function scoreVerse(verseText: string, patterns: string[]): number {
  if (patterns.length === 0) return 0;
  const normalizedVerse = removeAccents(verseText.toLowerCase());
  return patterns.reduce(
    (score, pat) => (normalizedVerse.includes(pat) ? score + 1 : score),
    0
  );
}

/**
 * Judgment/destruction language patterns.
 */
const JUDGMENT_PATTERNS = [
  "no perdonare", "no perdonaré",
  "no tendre piedad", "no tendré piedad",
  "destruire", "destruiré",
  "castigare", "castigaré",
  "espada sobre vosotros",
  "enviaré sobre vosotros",
  "matare a tu pueblo", "mataré a tu pueblo",
  "sera destruida", "será destruida",
  "seran destruidos", "serán destruidos",
  "los quemare", "los quemaré",
];

/** Returns true if a verse contains judgment/punishment language. */
export function isJudgmentVerse(verseText: string): boolean {
  const normalized = removeAccents(verseText.toLowerCase());
  return JUDGMENT_PATTERNS.some((p) => normalized.includes(p));
}

/**
 * Well-known "classic" comfort verses for each category.
 */
export const FEATURED_VERSES: Record<string, string> = {
  ansiedad:              "Filipenses 4:6",
  miedo:                 "Isaías 41:10",
  tristeza:              "Salmos 34:18",
  soledad:               "Hebreos 13:5",
  perdon:                "1 Juan 1:9",
  esperanza:             "Jeremías 29:11",
  fortaleza:             "Isaías 40:31",
  sabiduria:             "Proverbios 3:5",
  amor:                  "Juan 3:16",
  fe:                    "Hebreos 11:1",
  paciencia:             "Lamentaciones 3:26",
  gratitud:              "1 Tesalonicenses 5:18",
  alegria:               "Nehemías 8:10",
  confianza:             "Proverbios 3:5",
  perseverancia:         "Gálatas 6:9",
  salud:                 "Éxodo 15:26",
  proteccion:            "Salmos 91:1",
  paz:                   "Juan 14:27",
  humildad:              "Santiago 4:6",
  obediencia:            "1 Samuel 15:22",
  justicia:              "Amós 5:24",
  salvacion:             "Hechos 4:12",
  oracion:               "Mateo 7:7",
  disciplina:            "Hebreos 12:11",
  bondad:                "Salmos 34:8",
  misericordia:          "Lamentaciones 3:22",
  renovacion:            "2 Corintios 5:17",
  fortaleza_espiritual:  "Efesios 6:10",
  luz:                   "Salmos 27:1",
  verdad:                "Juan 8:32",
  libertad:              "Juan 8:36",
  gozo:                  "Nehemías 8:10",
  compasion:             "Salmos 103:13",
  esperanza_dificil:     "Romanos 8:28",
  redencion:             "Colosenses 1:14",
  santidad:              "1 Pedro 1:15",
  servicio:              "Marcos 10:45",
  unidad:                "Salmos 133:1",
  perdon_reconciliacion: "Efesios 4:32",
  confianza_dios:        "Proverbios 3:5",
};
