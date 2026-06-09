const fs = require('fs');
const path = require('path');

const CATEGORIAS = [
  "Ansiedad", "Miedo", "Tristeza", "Soledad", "Perdón", "Esperanza",
  "Fortaleza", "Sabiduría", "Amor", "Fe", "Paciencia", "Gratitud",
  "Alegría", "Confianza", "Perseverancia", "Salud", "Protección",
  "Paz", "Humildad", "Obediencia", "Justicia", "Salvación", "Oración",
  "Disciplina", "Bondad", "Misericordia", "Renovación", "Fortaleza espiritual",
  "Luz", "Verdad", "Libertad", "Gozo", "Compasión", "Esperanza en tiempos difíciles",
  "Redención", "Santidad", "Servicio", "Unidad", "Perdón y reconciliación",
  "Confianza en Dios"
];

const palabrasClave = {
  "Ansiedad": ["ansiedad", "afan", "cuidado", "angustia", "preocup"],
  "Miedo": ["miedo", "temor", "espanto", "terror"],
  "Tristeza": ["triste", "lloro", "lamento", "afligido", "duelo"],
  "Soledad": ["solo", "soledad", "desamparado", "abandonado"],
  "Perdon": ["perdon", "remision", "indulto"],
  "Esperanza": ["esperanza", "esperar", "confiar", "aguardar"],
  "Fortaleza": ["fortaleza", "fuerza", "poder", "valiente", "animo"],
  "Sabiduria": ["sabiduria", "sabio", "inteligencia", "entendimiento"],
  "Amor": ["amor", "amar", "caridad", "bondad"],
  "Fe": ["fe", "creer", "fidelidad"],
  "Paciencia": ["paciencia", "sufrimiento", "tolerancia"],
  "Gratitud": ["gracias", "alabanza", "bendecir"],
  "Alegria": ["alegria", "gozo", "regocijo", "contento"],
  "Confianza": ["confianza", "seguridad", "apoyo"],
  "Perseverancia": ["perseverancia", "constancia", "persistir"],
  "Salud": ["salud", "sanidad", "curacion", "enfermo", "sano"],
  "Proteccion": ["proteccion", "amparo", "defensa", "escudo", "refugio"],
  "Paz": ["paz", "tranquilidad", "quietud", "reposo"],
  "Humildad": ["humildad", "humilde", "manso"],
  "Obediencia": ["obediencia", "obedecer", "escuchar"],
  "Justicia": ["justicia", "rectitud", "justo"],
  "Salvacion": ["salvacion", "salvar", "redimir", "libertad"],
  "Oracion": ["oracion", "orar", "clamar", "rogar"],
  "Disciplina": ["disciplina", "correccion", "ensenanza"],
  "Bondad": ["bondad", "bueno", "benignidad"],
  "Misericordia": ["misericordia", "compasion", "piedad"],
  "Renovacion": ["renovacion", "nuevo", "transformar", "cambiar"],
  "Fortaleza espiritual": ["espiritu", "animo", "vigor"],
  "Luz": ["luz", "brillar", "iluminar", "resplandor"],
  "Verdad": ["verdad", "veraz", "cierto", "verdadero"],
  "Libertad": ["libertad", "libre", "soltar", "desatar"],
  "Gozo": ["gozo", "alegria", "deleite"],
  "Compasion": ["compasion", "piedad", "ternura"],
  "Esperanza en tiempos dificiles": ["esperanza", "afliccion", "tribulacion", "angustia"],
  "Redencion": ["redencion", "redimir", "rescatar"],
  "Santidad": ["santidad", "santo", "consagrado", "puro"],
  "Servicio": ["servicio", "servir", "ayudar", "ministerio"],
  "Unidad": ["unidad", "union", "concordia"],
  "Perdon y reconciliacion": ["perdon", "reconciliacion", "restauracion"],
  "Confianza en Dios": ["confianza", "dios", "jehova", "senor"]
};

function clasificarVersiculo(texto) {
  const textoLower = texto.toLowerCase();
  let categoriaAsignada = null;
  let maxPuntaje = 0;

  for (const [categoria, palabras] of Object.entries(palabrasClave)) {
    let puntaje = 0;
    for (const palabra of palabras) {
      if (textoLower.includes(palabra.toLowerCase())) {
        puntaje++;
      }
    }
    if (puntaje > maxPuntaje && puntaje > 0) {
      maxPuntaje = puntaje;
      categoriaAsignada = categoria;
    }
  }
  return categoriaAsignada;
}

const bibliaPath = './attached_assets/biblia2es_rvr_1778273603358.json';
const biblia = JSON.parse(fs.readFileSync(bibliaPath, 'utf-8'));

const versiculosPorCategoria = {};
CATEGORIAS.forEach(cat => { versiculosPorCategoria[cat] = []; });

let idVersiculo = 1;

for (const libro of biblia) {
  const nombreLibro = libro.name;
  const capitulos = libro.chapters;

  for (let numCap = 0; numCap < capitulos.length; numCap++) {
    const versiculos = capitulos[numCap];
    for (let numVers = 0; numVers < versiculos.length; numVers++) {
      const texto = versiculos[numVers];
      const categoria = clasificarVersiculo(texto);

      if (categoria && versiculosPorCategoria[categoria].length < 30) {
        versiculosPorCategoria[categoria].push({
          id: idVersiculo++,
          texto: texto,
          referencia: nombreLibro + " " + (numCap + 1) + ":" + (numVers + 1),
          categoria: categoria
        });
      }
    }
  }
}

for (const categoria of CATEGORIAS) {
  console.log(categoria + ": " + versiculosPorCategoria[categoria].length + " versiculos");
}

fs.writeFileSync('./categorias_llenas.json', JSON.stringify(versiculosPorCategoria, null, 2));
console.log("\nArchivo guardado: categorias_llenas.json");
