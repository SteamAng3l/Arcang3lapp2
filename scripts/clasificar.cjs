const fs = require('fs');

console.log('📖 Leyendo archivo JSON...');

// Leer el archivo como texto primero para depurar
const rawData = fs.readFileSync('./attached_assets/biblia2es_rvr_1778273603358.json', 'utf-8');
console.log('✅ Archivo leído, tamaño:', rawData.length, 'caracteres');

// Intentar parsear
let biblia;
try {
  biblia = JSON.parse(rawData);
  console.log('✅ JSON parseado correctamente');
  console.log('📚 Libros encontrados:', biblia.length);
} catch(e) {
  console.log('❌ Error al parsear:', e.message);
  process.exit(1);
}

const categorias = [
  'Ansiedad', 'Miedo', 'Tristeza', 'Soledad', 'Perdón', 'Esperanza',
  'Fortaleza', 'Sabiduría', 'Amor', 'Fe', 'Paciencia', 'Gratitud',
  'Alegría', 'Confianza', 'Perseverancia', 'Salud', 'Protección',
  'Paz', 'Humildad', 'Obediencia', 'Justicia', 'Salvación', 'Oración',
  'Disciplina', 'Bondad', 'Misericordia', 'Renovación', 'Fortaleza espiritual',
  'Luz', 'Verdad', 'Libertad', 'Gozo', 'Compasión', 'Esperanza en tiempos difíciles',
  'Redención', 'Santidad', 'Servicio', 'Unidad', 'Perdón y reconciliación',
  'Confianza en Dios'
];

const palabrasClave = {
  'Ansiedad': ['ansiedad', 'afan', 'cuidado', 'angustia'],
  'Miedo': ['miedo', 'temor', 'espanto', 'terror'],
  'Tristeza': ['triste', 'lloro', 'afligido', 'lamento'],
  'Soledad': ['solo', 'soledad', 'desamparado'],
  'Perdón': ['perdon', 'remision', 'indulto'],
  'Esperanza': ['esperanza', 'esperar', 'confiar'],
  'Fortaleza': ['fortaleza', 'fuerza', 'poder', 'valiente', 'animo'],
  'Sabiduría': ['sabiduria', 'sabio', 'inteligencia'],
  'Amor': ['amor', 'amar', 'caridad', 'bondad'],
  'Fe': ['fe', 'creer', 'fidelidad'],
  'Paciencia': ['paciencia', 'sufrimiento', 'tolerancia'],
  'Gratitud': ['gracias', 'alabanza', 'bendecir'],
  'Alegría': ['alegria', 'gozo', 'regocijo', 'contento'],
  'Confianza': ['confianza', 'seguridad'],
  'Perseverancia': ['perseverancia', 'constancia'],
  'Salud': ['salud', 'sanidad', 'curacion', 'enfermo'],
  'Protección': ['proteccion', 'amparo', 'defensa', 'escudo', 'refugio'],
  'Paz': ['paz', 'tranquilidad', 'quietud', 'reposo'],
  'Humildad': ['humildad', 'humilde', 'manso'],
  'Obediencia': ['obediencia', 'obedecer'],
  'Justicia': ['justicia', 'rectitud', 'justo'],
  'Salvación': ['salvacion', 'salvar', 'redimir'],
  'Oración': ['oracion', 'orar', 'clamar', 'rogar'],
  'Disciplina': ['disciplina', 'correccion'],
  'Bondad': ['bondad', 'bueno', 'benignidad'],
  'Misericordia': ['misericordia', 'compasion', 'piedad'],
  'Renovación': ['renovacion', 'nuevo', 'transformar'],
  'Fortaleza espiritual': ['espiritu', 'animo', 'vigor'],
  'Luz': ['luz', 'brillar', 'iluminar'],
  'Verdad': ['verdad', 'veraz', 'verdadero'],
  'Libertad': ['libertad', 'libre', 'soltar'],
  'Gozo': ['gozo', 'alegria', 'deleite'],
  'Compasión': ['compasion', 'piedad', 'ternura'],
  'Esperanza en tiempos difíciles': ['esperanza', 'afliccion', 'tribulacion'],
  'Redención': ['redencion', 'redimir', 'rescatar'],
  'Santidad': ['santidad', 'santo', 'puro', 'consagrado'],
  'Servicio': ['servicio', 'servir', 'ayudar'],
  'Unidad': ['unidad', 'union', 'concordia'],
  'Perdón y reconciliación': ['perdon', 'reconciliacion'],
  'Confianza en Dios': ['confianza', 'dios', 'jehova', 'senor']
};

// Inicializar resultado
const resultado = {};
categorias.forEach(c => resultado[c] = []);

let idVersiculo = 1;
let totalVersiculos = 0;

console.log('🔍 Clasificando versículos...');

// Recorrer todos los libros
for (const libro of biblia) {
  const nombreLibro = libro.name;
  const capitulos = libro.chapters;
  
  if (!capitulos) continue;
  
  for (let numCap = 0; numCap < capitulos.length; numCap++) {
    const versiculos = capitulos[numCap];
    if (!versiculos || !Array.isArray(versiculos)) continue;
    
    for (let numVers = 0; numVers < versiculos.length; numVers++) {
      const texto = versiculos[numVers];
      totalVersiculos++;
      
      // Buscar categoría para este versículo
      for (const [categoria, palabras] of Object.entries(palabrasClave)) {
        if (resultado[categoria].length >= 30) continue;
        
        let coincide = false;
        for (const palabra of palabras) {
          if (texto.toLowerCase().includes(palabra.toLowerCase())) {
            coincide = true;
            break;
          }
        }
        
        if (coincide) {
          resultado[categoria].push({
            id: idVersiculo++,
            texto: texto,
            referencia: `${nombreLibro} ${numCap + 1}:${numVers + 1}`,
            categoria: categoria
          });
          break;
        }
      }
    }
  }
}

// Mostrar resultados
console.log(`\n📊 Total versículos procesados: ${totalVersiculos}`);
console.log('📋 Resultados por categoría:');
for (const categoria of categorias) {
  const count = resultado[categoria].length;
  const emoji = count >= 30 ? '✅' : (count > 0 ? '⚠️' : '❌');
  console.log(`${emoji} ${categoria}: ${count} versículos`);
}

// Guardar archivo
fs.writeFileSync('./categorias_llenas.json', JSON.stringify(resultado, null, 2));
console.log('\n💾 Archivo guardado: categorias_llenas.json');
