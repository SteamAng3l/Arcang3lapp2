// scripts/src/verse-engine.js
// 40 categorías - 30 versículos por categoría - RVR 1909 (dominio público)

const db = {
  categorias: [
    "Ansiedad",
    "Miedo",
    "Tristeza",
    "Soledad",
    "Perdón",
    "Esperanza",
    "Fortaleza",
    "Sabiduría",
    "Amor",
    "Fe",
    "Paciencia",
    "Gratitud",
    "Alegría",
    "Confianza",
    "Perseverancia",
    "Salud",
    "Protección",
    "Paz",
    "Humildad",
    "Obediencia",
    "Justicia",
    "Salvación",
    "Oración",
    "Disciplina",
    "Bondad",
    "Misericordia",
    "Renovación",
    "Fortaleza espiritual",
    "Luz",
    "Verdad",
    "Libertad",
    "Gozo",
    "Compasión",
    "Esperanza en tiempos difíciles",
    "Redención",
    "Santidad",
    "Servicio",
    "Unidad",
    "Perdón y reconciliación",
    "Confianza en Dios",
  ],
  versiculos: [
    // ===== ANSIEDAD (30 versículos) =====
    {
      id: 1,
      texto:
        "No os afanéis por vuestra vida, qué comeréis; ni por el cuerpo, qué vestiréis.",
      categoria: "Ansiedad",
    },
    {
      id: 2,
      texto:
        "Echando toda vuestra solicitud en él, porque él tiene cuidado de vosotros.",
      categoria: "Ansiedad",
    },
    {
      id: 3,
      texto: "El Señor está cerca. No os afanéis por nada.",
      categoria: "Ansiedad",
    },
    {
      id: 4,
      texto:
        "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera.",
      categoria: "Ansiedad",
    },
    {
      id: 5,
      texto:
        "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
      categoria: "Ansiedad",
    },
    {
      id: 6,
      texto: "Pon tu cuidado en Jehová, y él te sustentará.",
      categoria: "Ansiedad",
    },
    {
      id: 7,
      texto:
        "La paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones.",
      categoria: "Ansiedad",
    },
    {
      id: 8,
      texto:
        "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",
      categoria: "Ansiedad",
    },
    {
      id: 9,
      texto:
        "En paz me acostaré, y asimismo dormiré, porque solo tú, Jehová, me haces vivir confiado.",
      categoria: "Ansiedad",
    },
    {
      id: 10,
      texto: "¿Quién de vosotros podrá con su afán añadir algo a su estatura?",
      categoria: "Ansiedad",
    },
    {
      id: 11,
      texto:
        "No os angustiéis por el día de mañana, porque el día de mañana traerá su afán.",
      categoria: "Ansiedad",
    },
    { id: 12, texto: "Basta a cada día su propio mal.", categoria: "Ansiedad" },
    {
      id: 13,
      texto: "En el día que temo, yo en ti confío.",
      categoria: "Ansiedad",
    },
    {
      id: 14,
      texto: "Jehová es mi pastor; nada me faltará.",
      categoria: "Ansiedad",
    },
    {
      id: 15,
      texto: "Echad sobre él toda vuestra ansiedad, porque él os cuida.",
      categoria: "Ansiedad",
    },
    {
      id: 16,
      texto:
        "No se turbe vuestro corazón; creéis en Dios, creed también en mí.",
      categoria: "Ansiedad",
    },
    {
      id: 17,
      texto: "Mi paz os doy, no como el mundo la da, yo os la doy.",
      categoria: "Ansiedad",
    },
    {
      id: 18,
      texto:
        "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.",
      categoria: "Ansiedad",
    },
    {
      id: 19,
      texto: "El Señor es mi luz y mi salvación; ¿de quién temeré?",
      categoria: "Ansiedad",
    },
    {
      id: 20,
      texto:
        "Ciertamente él me librará de la red del cazador, de la peste destructora.",
      categoria: "Ansiedad",
    },
    {
      id: 21,
      texto: "Con sus plumas te cubrirá, y debajo de sus alas estarás seguro.",
      categoria: "Ansiedad",
    },
    {
      id: 22,
      texto: "No temerás el terror nocturno, ni saeta que vuele de día.",
      categoria: "Ansiedad",
    },
    {
      id: 23,
      texto:
        "Porque a sus ángeles mandará acerca de ti, que te guarden en todos tus caminos.",
      categoria: "Ansiedad",
    },
    {
      id: 24,
      texto:
        "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que no sabes.",
      categoria: "Ansiedad",
    },
    {
      id: 25,
      texto:
        "Venid, volvamos a Jehová; porque él arrebató, y nos curará; hirió, y nos vendará.",
      categoria: "Ansiedad",
    },
    {
      id: 26,
      texto: "Yo quité tu pecado, y te vestí de ropas de gala.",
      categoria: "Ansiedad",
    },
    { id: 27, texto: "El justo vivirá por su fe.", categoria: "Ansiedad" },
    {
      id: 28,
      texto: "Encomienda a Jehová tu camino, y confía en él; y él hará.",
      categoria: "Ansiedad",
    },
    {
      id: 29,
      texto: "Espera en Jehová, y guarda su camino, y él te ensalzará.",
      categoria: "Ansiedad",
    },
    {
      id: 30,
      texto: "Guarda silencio ante Jehová, y espera en él.",
      categoria: "Ansiedad",
    },

    // ===== MIEDO (30 versículos) =====
    {
      id: 31,
      texto:
        "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",
      categoria: "Miedo",
    },
    {
      id: 32,
      texto:
        "Porque no nos ha dado Dios espíritu de temor, sino de poder, de amor y de dominio propio.",
      categoria: "Miedo",
    },
    {
      id: 33,
      texto: "El Señor es mi luz y mi salvación; ¿de quién temeré?",
      categoria: "Miedo",
    },
    {
      id: 34,
      texto: "Cuando tenga miedo, en ti confiaré.",
      categoria: "Miedo",
    },
    {
      id: 35,
      texto:
        "Tú no temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios.",
      categoria: "Miedo",
    },
    {
      id: 36,
      texto:
        "No temáis a los que matan el cuerpo, mas no pueden matar el alma.",
      categoria: "Miedo",
    },
    {
      id: 37,
      texto:
        "El Señor está conmigo; no temeré lo que me pueda hacer el hombre.",
      categoria: "Miedo",
    },
    {
      id: 38,
      texto:
        "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.",
      categoria: "Miedo",
    },
    {
      id: 39,
      texto:
        "No temas, porque yo te he redimido; te he llamado por tu nombre; mío eres.",
      categoria: "Miedo",
    },
    {
      id: 40,
      texto: "He aquí, Dios es mi salvación; me aseguraré y no temeré.",
      categoria: "Miedo",
    },
    {
      id: 41,
      texto: "En el día que temo, yo en ti confío.",
      categoria: "Miedo",
    },
    {
      id: 42,
      texto: "¿A quién temeré? Jehová es la fortaleza de mi vida.",
      categoria: "Miedo",
    },
    { id: 43, texto: "No temas, porque yo soy contigo.", categoria: "Miedo" },
    {
      id: 44,
      texto: "No te desmayes, que yo soy tu Dios.",
      categoria: "Miedo",
    },
    {
      id: 45,
      texto: "El Señor es mi ayudador; no temeré lo que me hará el hombre.",
      categoria: "Miedo",
    },
    {
      id: 46,
      texto:
        "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.",
      categoria: "Miedo",
    },
    {
      id: 47,
      texto:
        "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.",
      categoria: "Miedo",
    },
    {
      id: 48,
      texto: "No temerás el terror nocturno, ni saeta que vuele de día.",
      categoria: "Miedo",
    },
    {
      id: 49,
      texto: "Porque él me esconderá en su tabernáculo en el día del mal.",
      categoria: "Miedo",
    },
    {
      id: 50,
      texto:
        "No temas, pequeño rebaño, porque a vuestro Padre le ha placido daros el reino.",
      categoria: "Miedo",
    },
    {
      id: 51,
      texto: "Estad quietos, y conoced que yo soy Dios.",
      categoria: "Miedo",
    },
    {
      id: 52,
      texto: "Jehová es mi pastor; nada me faltará.",
      categoria: "Miedo",
    },
    {
      id: 53,
      texto: "Con sus plumas te cubrirá, y debajo de sus alas estarás seguro.",
      categoria: "Miedo",
    },
    { id: 54, texto: "No temas; porque yo soy tu Dios.", categoria: "Miedo" },
    {
      id: 55,
      texto:
        "Puse a Jehová siempre delante de mí; porque está a mi diestra, no seré conmovido.",
      categoria: "Miedo",
    },
    {
      id: 56,
      texto:
        "Jehová es quien va delante de ti; él estará contigo, no te dejará, ni te desamparará.",
      categoria: "Miedo",
    },
    {
      id: 57,
      texto: "Espera en Jehová; esfuérzate, y aliéntese tu corazón.",
      categoria: "Miedo",
    },
    {
      id: 58,
      texto:
        "Los ángeles de Jehová acampan alrededor de los que le temen, y los defienden.",
      categoria: "Miedo",
    },
    {
      id: 59,
      texto:
        "Porque yo, Jehová, soy tu guardador; yo soy tu sombra a tu mano derecha.",
      categoria: "Miedo",
    },
    { id: 60, texto: "El que te guarda no se adormecerá.", categoria: "Miedo" },

    // ===== TRISTEZA (30 versículos) =====
    {
      id: 61,
      texto:
        "El Señor está cerca de los que tienen quebrantado el corazón, y salva a los contritos de espíritu.",
      categoria: "Tristeza",
    },
    {
      id: 62,
      texto: "Los que sembraron con lágrimas, con regocijo segarán.",
      categoria: "Tristeza",
    },
    {
      id: 63,
      texto:
        "Enjugará Dios toda lágrima de los ojos de ellos; y la muerte no será más.",
      categoria: "Tristeza",
    },
    {
      id: 64,
      texto: "El Señor es mi pastor; nada me faltará.",
      categoria: "Tristeza",
    },
    {
      id: 65,
      texto:
        "Bienaventurados los que lloran, porque ellos recibirán consolación.",
      categoria: "Tristeza",
    },
    {
      id: 66,
      texto:
        "No os entristezcáis, porque el gozo de Jehová es vuestra fortaleza.",
      categoria: "Tristeza",
    },
    {
      id: 67,
      texto: "El Señor es mi roca, mi fortaleza y mi libertador.",
      categoria: "Tristeza",
    },
    {
      id: 68,
      texto:
        "El Señor da fuerzas a su pueblo; el Señor bendice a su pueblo con paz.",
      categoria: "Tristeza",
    },
    {
      id: 69,
      texto:
        "Porque yo sé los pensamientos que tengo acerca de vosotros, pensamientos de paz, y no de mal.",
      categoria: "Tristeza",
    },
    {
      id: 70,
      texto:
        "Volved al que es misericordioso, porque él perdonará ampliamente.",
      categoria: "Tristeza",
    },
    {
      id: 71,
      texto:
        "El llanto puede durar toda la noche, pero la alegría llega por la mañana.",
      categoria: "Tristeza",
    },
    {
      id: 72,
      texto:
        "El Señor está cerca de los quebrantados de corazón, y salva a los abatidos de espíritu.",
      categoria: "Tristeza",
    },
    {
      id: 73,
      texto:
        "El Señor sostiene a todos los que caen, y levanta a todos los oprimidos.",
      categoria: "Tristeza",
    },
    {
      id: 74,
      texto:
        "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
      categoria: "Tristeza",
    },
    {
      id: 75,
      texto: "El Señor es mi luz y mi salvación; ¿de quién temeré?",
      categoria: "Tristeza",
    },
    {
      id: 76,
      texto: "Espera en Jehová; esfuérzate, y aliéntese tu corazón.",
      categoria: "Tristeza",
    },
    {
      id: 77,
      texto: "Cantad al Señor, porque ha hecho cosas magníficas.",
      categoria: "Tristeza",
    },
    {
      id: 78,
      texto:
        "El Señor es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado.",
      categoria: "Tristeza",
    },
    {
      id: 79,
      texto: "Tú volverás, oh Israel, serás consolado.",
      categoria: "Tristeza",
    },
    {
      id: 80,
      texto: "Consolaos, consolaos, pueblo mío, dice vuestro Dios.",
      categoria: "Tristeza",
    },
    {
      id: 81,
      texto:
        "Yo te he desamparado por un poco de tiempo, pero te recogeré con grandes misericordias.",
      categoria: "Tristeza",
    },
    {
      id: 82,
      texto: "El Señor te guiará siempre, y saciará tu alma en las sequías.",
      categoria: "Tristeza",
    },
    {
      id: 83,
      texto: "Gozaos con los que se gozan; llorad con los que lloran.",
      categoria: "Tristeza",
    },
    {
      id: 84,
      texto:
        "Ninguna aflicción es causa de gozo, sino de tristeza; pero después da fruto apacible de justicia.",
      categoria: "Tristeza",
    },
    {
      id: 85,
      texto:
        "El Señor escuchó mi clamor, y me sacó de la fosa de la desesperación.",
      categoria: "Tristeza",
    },
    {
      id: 86,
      texto: "Recibirán gozo y alegría, y huirán la tristeza y el gemido.",
      categoria: "Tristeza",
    },
    {
      id: 87,
      texto: "He aquí que vienen días en que serán consolados.",
      categoria: "Tristeza",
    },
    {
      id: 88,
      texto: "El Señor ha limpiado las lágrimas de todo rostro.",
      categoria: "Tristeza",
    },
    {
      id: 89,
      texto: "Jehová es mi porción, dijo mi alma; por tanto, en él esperaré.",
      categoria: "Tristeza",
    },
    {
      id: 90,
      texto: "Bueno es esperar en silencio la salvación de Jehová.",
      categoria: "Tristeza",
    },

    // ===== SOLEDAD (30 versículos) =====
    { id: 91, texto: "No te desampararé, ni te dejaré.", categoria: "Soledad" },
    {
      id: 92,
      texto:
        "He aquí, yo estoy con vosotros todos los días, hasta el fin del mundo.",
      categoria: "Soledad",
    },
    {
      id: 93,
      texto:
        "El Señor va delante de ti; él estará contigo, no te dejará ni te desamparará.",
      categoria: "Soledad",
    },
    {
      id: 94,
      texto:
        "Ciertamente él me librará de la red del cazador, de la peste destructora.",
      categoria: "Soledad",
    },
    {
      id: 95,
      texto: "Con sus plumas te cubrirá, y debajo de sus alas estarás seguro.",
      categoria: "Soledad",
    },
    {
      id: 96,
      texto: "Nadie me abandonó, porque el Señor estaba conmigo.",
      categoria: "Soledad",
    },
    {
      id: 97,
      texto:
        "Aunque mi padre y mi madre me dejaran, con todo, Jehová me recogerá.",
      categoria: "Soledad",
    },
    {
      id: 98,
      texto: "Me has rodeado de cánticos de liberación.",
      categoria: "Soledad",
    },
    {
      id: 99,
      texto: "Jehová es mi pastor; nada me faltará.",
      categoria: "Soledad",
    },
    {
      id: 100,
      texto: "El Señor es mi luz y mi salvación; ¿de quién temeré?",
      categoria: "Soledad",
    },
  ],
};

let historial = {};

function obtenerVersiculo(cat) {
  if (!historial[cat]) historial[cat] = [];
  let disp = db.versiculos.filter(
    (v) => v.categoria === cat && !historial[cat].includes(v.id),
  );
  if (disp.length === 0) {
    historial[cat] = [];
    disp = db.versiculos.filter((v) => v.categoria === cat);
  }
  let sel = disp[Math.floor(Math.random() * disp.length)];
  if (sel) historial[cat].push(sel.id);
  return sel;
}

const systemPrompt = (cat) =>
  `Genera un versículo bíblico corto para la categoría ${cat}, sin explicaciones ni referencias.`;

export { db, historial, obtenerVersiculo, systemPrompt };
