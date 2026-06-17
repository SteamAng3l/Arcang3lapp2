export interface VerseResponse {
  detected_category: string;
  message: string;
  verse_reference: string;
  verse_text: string;
  verse_id: number;
}

export interface CategoryInfo {
  category: string;
  label: string;
  verse_count: number;
}

interface RawVerse {
  id: number;
  category: string;
  verseReference: string;
  verseText: string;
}

const RAW_VERSES: RawVerse[] = [
  { id: 1, category: "ansiedad", verseReference: "Filipenses 4:6", verseText: "Por nada estéis afanosos; sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con hacimiento de gracias." },
  { id: 2, category: "ansiedad", verseReference: "Mateo 6:34", verseText: "Así que, no os afanéis por el día de mañana; porque el día de mañana traerá su afán. Basta al día su mal." },
  { id: 3, category: "ansiedad", verseReference: "1 Pedro 5:7", verseText: "Echad toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros." },
  { id: 4, category: "ansiedad", verseReference: "Salmos 55:22", verseText: "Echa sobre Jehová tu carga, y él te sustentará; no dejará para siempre caído al justo." },
  { id: 5, category: "ansiedad", verseReference: "Filipenses 4:7", verseText: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús." },
  { id: 6, category: "ansiedad", verseReference: "Mateo 11:28", verseText: "Venid á mí todos los que estáis trabajados y cargados, y yo os haré descansar." },
  { id: 7, category: "ansiedad", verseReference: "Salmos 94:19", verseText: "En la multitud de mis pensamientos dentro de mí, tus consolaciones alegraban mi alma." },
  { id: 8, category: "ansiedad", verseReference: "Isaías 41:13", verseText: "Porque yo soy Jehová tu Dios, que te enseño para tu provecho, que te encamino por el camino que debes andar." },
  { id: 9, category: "miedo", verseReference: "Isaías 41:10", verseText: "No temas, porque yo soy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia." },
  { id: 10, category: "miedo", verseReference: "2 Timoteo 1:7", verseText: "Porque no nos ha dado Dios el espíritu de cobardía, sino de poder, y de amor, y de templanza." },
  { id: 11, category: "miedo", verseReference: "Salmos 34:4", verseText: "Busqué á Jehová, y él me oyó, y libróme de todos mis temores." },
  { id: 12, category: "miedo", verseReference: "Salmos 23:4", verseText: "Aunque ande en valle de sombra de muerte, no temeré mal alguno; porque tú estás conmigo; tu vara y tu cayado me infundirán aliento." },
  { id: 13, category: "miedo", verseReference: "Josué 1:9", verseText: "¿No te mandé que te esforzases y fueses valiente? No temas, ni desmayes; porque Jehová tu Dios será contigo en dondequiera que fueres." },
  { id: 14, category: "miedo", verseReference: "Salmos 27:1", verseText: "Jehová es mi luz y mi salvación: ¿de quién temeré? Jehová es la fortaleza de mi vida: ¿de quién me receleré?" },
  { id: 15, category: "miedo", verseReference: "Proverbios 29:25", verseText: "El temor del hombre pondrá lazo; mas el que confiare en Jehová será levantado." },
  { id: 16, category: "miedo", verseReference: "Salmos 56:3", verseText: "El día que temo, yo en ti confío." },
  { id: 17, category: "tristeza", verseReference: "Salmos 34:18", verseText: "Cercano está Jehová á los quebrantados de corazón; y salvará á los contritos de espíritu." },
  { id: 18, category: "tristeza", verseReference: "Mateo 5:4", verseText: "Bienaventurados los que lloran; porque ellos recibirán consolación." },
  { id: 19, category: "tristeza", verseReference: "Salmos 30:5", verseText: "Porque un momento durará su ira, mas su buena voluntad toda la vida. El lloro puede durar una noche, mas la alegría viene en la mañana." },
  { id: 20, category: "tristeza", verseReference: "Apocalipsis 21:4", verseText: "Y Dios limpiará toda lágrima de los ojos de ellos; y la muerte no será más; y habrá llanto, ni clamor, ni dolor más; porque las primeras cosas son pasadas." },
  { id: 21, category: "tristeza", verseReference: "2 Corintios 1:3", verseText: "Bendito sea el Dios y Padre de nuestro Señor Jesucristo, Padre de misericordias y Dios de toda consolación." },
  { id: 22, category: "tristeza", verseReference: "Salmos 147:3", verseText: "El sana á los quebrantados de corazón, y liga sus heridas." },
  { id: 23, category: "tristeza", verseReference: "Isaías 43:2", verseText: "Cuando pases por las aguas, yo seré contigo; y por los ríos, no te anegarán. Cuando pases por el fuego, no te quemarás, ni la llama arderá en ti." },
  { id: 24, category: "tristeza", verseReference: "Salmos 42:11", verseText: "¿Por qué te abates, oh alma mía, y por qué te conturbas en mí? Espera á Dios; porque aún le tengo de alabar á él." },
  { id: 25, category: "soledad", verseReference: "Hebreos 13:5", verseText: "No te desampararé, ni te dejaré." },
  { id: 26, category: "soledad", verseReference: "Deuteronomio 31:6", verseText: "Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos; porque Jehová tu Dios, es el que va contigo; no te dejará, ni te desamparará." },
  { id: 27, category: "soledad", verseReference: "Isaías 49:15", verseText: "¿Olvidará la mujer su hijo que amamanta, para dejar de compadecerse del hijo de su vientre? Aunque éstas olvidaran, yo nunca me olvidaré de ti." },
  { id: 28, category: "soledad", verseReference: "Salmos 139:7", verseText: "¿A dónde me iré de tu espíritu? ¿Y á dónde huiré de tu presencia?" },
  { id: 29, category: "soledad", verseReference: "Mateo 28:20", verseText: "Enseñándoles que guarden todas las cosas que os he mandado; y he aquí, yo estoy con vosotros todos los días, hasta el fin del mundo." },
  { id: 30, category: "soledad", verseReference: "Salmos 27:10", verseText: "Aunque mi padre y mi madre me dejaron, con todo, Jehová me recogerá." },
  { id: 31, category: "soledad", verseReference: "Juan 14:18", verseText: "No os dejaré huérfanos; vendré á vosotros." },
  { id: 32, category: "soledad", verseReference: "Salmos 23:1", verseText: "Jehová es mi pastor; nada me faltará." },
  { id: 33, category: "perdon", verseReference: "1 Juan 1:9", verseText: "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad." },
  { id: 34, category: "perdon", verseReference: "Salmos 103:12", verseText: "Cuanto está lejos el oriente del occidente, hizo alejar de nosotros nuestras rebeliones." },
  { id: 35, category: "perdon", verseReference: "Isaías 1:18", verseText: "Si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos; si fueren rojos como el carmesí, vendrán á ser como blanca lana." },
  { id: 36, category: "perdon", verseReference: "Romanos 8:1", verseText: "Ahora pues, ninguna condenación hay para los que están en Cristo Jesús." },
  { id: 37, category: "perdon", verseReference: "Salmos 51:1", verseText: "Ten misericordia de mí, oh Dios, conforme á tu misericordia; conforme á la multitud de tus piedades borra mis transgresiones." },
  { id: 38, category: "perdon", verseReference: "Efesios 1:7", verseText: "En quien tenemos redención por su sangre, el perdón de los pecados según las riquezas de su gracia." },
  { id: 39, category: "perdon", verseReference: "Miqueas 7:19", verseText: "Tornará á tener misericordia de nosotros; sepultará nuestras iniquidades, y echará en lo profundo del mar todos nuestros pecados." },
  { id: 40, category: "perdon", verseReference: "Lucas 15:21", verseText: "Y el hijo le dijo: Padre, he pecado contra el cielo y contra ti, y ya no soy digno de ser llamado tu hijo." },
  { id: 41, category: "esperanza", verseReference: "Jeremías 29:11", verseText: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz y no de mal, para daros el fin que esperáis." },
  { id: 42, category: "esperanza", verseReference: "Romanos 15:13", verseText: "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por la virtud del Espíritu Santo." },
  { id: 43, category: "esperanza", verseReference: "Salmos 31:24", verseText: "Esforzaos, y tome aliento vuestro corazón; todos los que esperáis en Jehová." },
  { id: 44, category: "esperanza", verseReference: "Lamentaciones 3:22", verseText: "Las misericordias de Jehová no se han acabado; porque no faltaron sus bondades. Nuevas son cada mañana; grande es tu fidelidad." },
  { id: 45, category: "esperanza", verseReference: "Romanos 5:5", verseText: "Y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos fue dado." },
  { id: 46, category: "esperanza", verseReference: "Salmos 130:5", verseText: "Esperé yo á Jehová, esperó mi alma; en su palabra he esperado." },
  { id: 47, category: "esperanza", verseReference: "Hebreos 6:19", verseText: "La cual tenemos como ancla del alma, segura y firme, y que entra hasta dentro del velo." },
  { id: 48, category: "esperanza", verseReference: "Isaías 40:31", verseText: "Pero los que esperan á Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán." },
  { id: 49, category: "fortaleza", verseReference: "Isaías 40:31", verseText: "Pero los que esperan á Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán." },
  { id: 50, category: "fortaleza", verseReference: "Filipenses 4:13", verseText: "Todo lo puedo en Cristo que me fortalece." },
  { id: 51, category: "fortaleza", verseReference: "Salmos 28:7", verseText: "Jehová es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado, por lo que se gozó mi corazón." },
  { id: 52, category: "fortaleza", verseReference: "2 Corintios 12:9", verseText: "Bástate mi gracia: porque mi potencia en la flaqueza se perfecciona. Por tanto, de buena gana me gloriaré más bien en mis flaquezas, para que repose sobre mí la potencia de Cristo." },
  { id: 53, category: "fortaleza", verseReference: "Salmos 46:1", verseText: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." },
  { id: 54, category: "fortaleza", verseReference: "Efesios 6:10", verseText: "Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza." },
  { id: 55, category: "fortaleza", verseReference: "Josué 1:9", verseText: "No temas, ni desmayes; porque Jehová tu Dios será contigo en dondequiera que fueres." },
  { id: 56, category: "fortaleza", verseReference: "Salmos 18:2", verseText: "Jehová, roca mía, y castillo mío, y mi libertador; Dios mío, fortaleza mía, en él confiaré." },
  { id: 57, category: "sabiduria", verseReference: "Proverbios 3:5", verseText: "Confía en Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas." },
  { id: 58, category: "sabiduria", verseReference: "Santiago 1:5", verseText: "Y si alguno de vosotros tiene falta de sabiduría, demándela á Dios, el cual da á todos abundantemente y sin reproche, y le será dada." },
  { id: 59, category: "sabiduria", verseReference: "Salmos 111:10", verseText: "El principio de la sabiduría es el temor de Jehová; buen entendimiento tienen todos los que lo practican." },
  { id: 60, category: "sabiduria", verseReference: "Proverbios 2:6", verseText: "Porque Jehová da la sabiduría, y de su boca viene el conocimiento y la inteligencia." },
  { id: 61, category: "sabiduria", verseReference: "Proverbios 16:3", verseText: "Encomienda á Jehová tus obras, y tus pensamientos serán afirmados." },
  { id: 62, category: "sabiduria", verseReference: "Isaías 30:21", verseText: "Entonces tus oídos oirán á tus espaldas la palabra que diga: Este es el camino, andad por él; y no echéis á la mano derecha, ni tampoco torzáis á la mano izquierda." },
  { id: 63, category: "sabiduria", verseReference: "Salmos 32:8", verseText: "Te haré entender, y te enseñaré el camino en que debes andar; sobre ti fijaré mis ojos." },
  { id: 64, category: "sabiduria", verseReference: "Proverbios 4:7", verseText: "Lo principal es la sabiduría; adquiere sabiduría; y ante todas tus posesiones adquiere inteligencia." },
  { id: 65, category: "amor", verseReference: "Juan 3:16", verseText: "Porque de tal manera amó Dios al mundo, que ha dado á su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." },
  { id: 66, category: "amor", verseReference: "1 Juan 4:8", verseText: "El que no ama, no conoce á Dios; porque Dios es amor." },
  { id: 67, category: "amor", verseReference: "1 Juan 4:16", verseText: "Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor; y el que está en amor, está en Dios, y Dios en él." },
  { id: 68, category: "amor", verseReference: "Romanos 8:39", verseText: "Ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro." },
  { id: 69, category: "amor", verseReference: "1 Corintios 13:13", verseText: "Y ahora permanecen la fe, la esperanza, el amor, estos tres; pero el mayor de ellos es el amor." },
  { id: 70, category: "amor", verseReference: "1 Corintios 13:4", verseText: "La caridad es sufrida, es benigna; la caridad no tiene envidia, la caridad no es jactanciosa, no se ensoberbece." },
  { id: 71, category: "amor", verseReference: "1 Pedro 4:8", verseText: "Y ante todo, tened entre vosotros fervorosa caridad; porque la caridad cubrirá multitud de pecados." },
  { id: 72, category: "amor", verseReference: "Juan 15:13", verseText: "Nadie tiene mayor amor que éste, que ponga alguno su vida por sus amigos." },
  { id: 73, category: "fe", verseReference: "Hebreos 11:1", verseText: "Es pues la fe la certeza de lo que se espera, la demostración de lo que no se ve." },
  { id: 74, category: "fe", verseReference: "Marcos 9:23", verseText: "Y Jesús le dijo: Si puedes creer, al que cree todo le es posible." },
  { id: 75, category: "fe", verseReference: "Efesios 2:8", verseText: "Porque por gracia sois salvos por la fe; y esto no de vosotros, pues es don de Dios." },
  { id: 76, category: "fe", verseReference: "Romanos 10:17", verseText: "Así que la fe es por el oír, y el oír, por la palabra de Dios." },
  { id: 77, category: "fe", verseReference: "Mateo 17:20", verseText: "Y Jesús les dijo: Por vuestra incredulidad: porque de cierto os digo, que si tuviéreis fe como un grano de mostaza, diréis á este monte: Pásate de aquí allá, y se pasará; y nada os será imposible." },
  { id: 78, category: "fe", verseReference: "Hebreos 11:6", verseText: "Pero sin fe es imposible agradar á Dios; porque es necesario que el que se allega á Dios, crea que le hay, y que es galardonador de los que le buscan." },
  { id: 79, category: "fe", verseReference: "Santiago 2:17", verseText: "Así también la fe, si no tuviere obras, es muerta en sí misma." },
  { id: 80, category: "fe", verseReference: "Marcos 11:22", verseText: "Y respondiendo Jesús, les dijo: Tened fe en Dios." },
  { id: 81, category: "paciencia", verseReference: "Lamentaciones 3:26", verseText: "Bueno es esperar en silencio la salud de Jehová." },
  { id: 82, category: "paciencia", verseReference: "Romanos 5:3", verseText: "Y no sólo esto, sino que también nos gloriamos en las tribulaciones; sabiendo que la tribulación obra la paciencia." },
  { id: 83, category: "paciencia", verseReference: "Santiago 1:3", verseText: "Sabiendo que la prueba de vuestra fe obra la paciencia." },
  { id: 84, category: "paciencia", verseReference: "Hebreos 10:36", verseText: "Porque os es necesaria la paciencia; para que, habiendo hecho la voluntad de Dios, obtengáis la promesa." },
  { id: 85, category: "paciencia", verseReference: "Salmos 37:7", verseText: "Guarda silencio ante Jehová, y espérale: no te alteres á causa del que prospera en su camino, por el hombre que hace maldades." },
  { id: 86, category: "paciencia", verseReference: "Santiago 5:11", verseText: "He aquí, tenemos por bienaventurados á los que sufren. Habéis oído la paciencia de Job, y habéis visto el fin del Señor, que el Señor es muy misericordioso y piadoso." },
  { id: 87, category: "paciencia", verseReference: "Romanos 15:4", verseText: "Porque las cosas que se escribieron antes, para nuestra enseñanza se escribieron; para que por la paciencia y la consolación de las Escrituras, tengamos esperanza." },
  { id: 88, category: "paciencia", verseReference: "Salmos 40:1", verseText: "Esperé yo á Jehová, estuvo atento á mí, y oyó mi clamor." },
  { id: 89, category: "gratitud", verseReference: "1 Tesalonicenses 5:18", verseText: "Dad gracias en todo: porque esta es la voluntad de Dios para con vosotros en Cristo Jesús." },
  { id: 90, category: "gratitud", verseReference: "Salmos 100:4", verseText: "Entrad por sus puertas con alabanza, por sus atrios con alabanza; alabadle, bendecid su nombre." },
  { id: 91, category: "gratitud", verseReference: "Salmos 107:1", verseText: "Alabad á Jehová, porque él es bueno; porque para siempre es su misericordia." },
  { id: 92, category: "gratitud", verseReference: "Efesios 5:20", verseText: "Dando siempre gracias por todo al Dios y Padre, en el nombre de nuestro Señor Jesucristo." },
  { id: 93, category: "gratitud", verseReference: "Colosenses 3:17", verseText: "Y todo lo que hacéis, sea de palabra ó de obra, hacedlo todo en el nombre del Señor Jesús, dando gracias á Dios y Padre por él." },
  { id: 94, category: "gratitud", verseReference: "Salmos 136:1", verseText: "Alabad á Jehová, porque él es bueno: Porque para siempre es su misericordia." },
  { id: 95, category: "gratitud", verseReference: "Salmos 50:23", verseText: "El que sacrifica alabanza me honrará; y al que ordenare su camino, le mostraré la salvación de Dios." },
  { id: 96, category: "alegria", verseReference: "Nehemías 8:10", verseText: "Y les dijo: Id, comed grosuras, y bebed vino dulce, y enviad partes á los que no tienen nada preparado; porque día santo es á nuestro Señor: no os entristezcáis; porque el gozo de Jehová es vuestra fortaleza." },
  { id: 97, category: "alegria", verseReference: "Salmos 16:11", verseText: "Me mostrarás la senda de la vida: en tu presencia hay hartura de gozos; á tu diestra hay deleites para siempre." },
  { id: 98, category: "alegria", verseReference: "Salmos 126:3", verseText: "Grandes cosas ha hecho Jehová con nosotros; estaremos alegres." },
  { id: 99, category: "alegria", verseReference: "Juan 15:11", verseText: "Estas cosas os he hablado, para que mi gozo esté en vosotros, y vuestro gozo sea cumplido." },
  { id: 100, category: "alegria", verseReference: "Filipenses 4:4", verseText: "Alegraos en el Señor siempre: otra vez digo que os alegréis." },
  { id: 101, category: "alegria", verseReference: "Salmos 32:11", verseText: "Alegraos en Jehová y gozaos, justos; y cantad con júbilo todos vosotros los rectos de corazón." },
  { id: 102, category: "confianza", verseReference: "Proverbios 3:5", verseText: "Confía en Jehová de todo tu corazón, y no te apoyes en tu propia prudencia." },
  { id: 103, category: "confianza", verseReference: "Salmos 46:1", verseText: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." },
  { id: 104, category: "confianza", verseReference: "Isaías 26:3", verseText: "Tú guardarás en completa paz á aquel cuyo pensamiento en ti persevera: porque en ti ha confiado." },
  { id: 105, category: "confianza", verseReference: "Jeremías 17:7", verseText: "Bendito el varón que confía en Jehová, y cuya confianza es Jehová." },
  { id: 106, category: "confianza", verseReference: "Salmos 56:4", verseText: "En Dios alabaré su palabra; en Dios he confiado, no temeré: ¿Qué puede hacerme el hombre?" },
  { id: 107, category: "confianza", verseReference: "Salmos 62:8", verseText: "Esperad en él en todo tiempo, oh pueblos: derramad delante de él vuestro corazón: Dios es nuestro refugio." },
  { id: 108, category: "confianza", verseReference: "Salmos 9:10", verseText: "Y en ti confiarán los que conocen tu nombre; por cuanto no desamparaste á los que te buscaron, oh Jehová." },
  { id: 109, category: "perseverancia", verseReference: "Gálatas 6:9", verseText: "Y no nos cansemos de hacer bien; porque á su tiempo segaremos, si no desmayáremos." },
  { id: 110, category: "perseverancia", verseReference: "Hebreos 12:1", verseText: "Por tanto, nosotros también, teniendo en derredor nuestro tan grande nube de testigos, despojémonos de todo peso y del pecado que nos cerca, y corramos con paciencia la carrera que tenemos por delante." },
  { id: 111, category: "perseverancia", verseReference: "Santiago 1:12", verseText: "Bienaventurado el varón que soporta la prueba; porque cuando fuere probado, recibirá la corona de vida, que Dios ha prometido á los que le aman." },
  { id: 112, category: "perseverancia", verseReference: "Romanos 12:12", verseText: "Gozosos en la esperanza; pacientes en la tribulación; constantes en la oración." },
  { id: 113, category: "perseverancia", verseReference: "2 Timoteo 4:7", verseText: "He peleado la buena batalla, he acabado la carrera, he guardado la fe." },
  { id: 114, category: "perseverancia", verseReference: "Josué 1:7", verseText: "Solamente esfuérzate y sé muy valiente, para cuidar de hacer conforme á toda la ley que mi siervo Moisés te mandó." },
  { id: 115, category: "perseverancia", verseReference: "Apocalipsis 2:10", verseText: "Sé fiel hasta la muerte, y yo te daré la corona de la vida." },
  { id: 116, category: "perseverancia", verseReference: "1 Corintios 15:58", verseText: "Así que, hermanos míos amados, estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano." },
  { id: 117, category: "salud", verseReference: "Éxodo 15:26", verseText: "Y dijo: Si oyeres atentamente la voz de Jehová tu Dios, é hicieres lo recto delante de sus ojos, y dieres oído á sus mandamientos, y guardares todos sus estatutos, ninguna enfermedad de las que envié á los Egipcios te enviaré á ti; porque yo soy Jehová tu sanador." },
  { id: 118, category: "salud", verseReference: "Salmos 103:3", verseText: "Él es quien perdona todas tus iniquidades, el que sana todas tus dolencias." },
  { id: 119, category: "salud", verseReference: "Jeremías 30:17", verseText: "Mas yo haré venir sanidad para ti, y sanaré tus heridas, dice Jehová." },
  { id: 120, category: "salud", verseReference: "3 Juan 1:2", verseText: "Amado, yo deseo que tú seas prosperado en todas las cosas, y que tengas salud, así como prospera tu alma." },
  { id: 121, category: "salud", verseReference: "Santiago 5:15", verseText: "Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si estuviere en pecados, le serán perdonados." },
  { id: 122, category: "salud", verseReference: "Isaías 53:5", verseText: "Mas él fue herido por nuestras rebeliones, molido por nuestros pecados: el castigo de nuestra paz sobre él, y por su llaga fuimos nosotros curados." },
  { id: 123, category: "salud", verseReference: "Salmos 107:20", verseText: "Envió su palabra, y los sanó, y los libró de su ruina." },
  { id: 124, category: "proteccion", verseReference: "Salmos 91:1", verseText: "El que habita al abrigo del Altísimo, morará bajo la sombra del Omnipotente." },
  { id: 125, category: "proteccion", verseReference: "Salmos 91:11", verseText: "Pues que á sus ángeles mandará acerca de ti, que te guarden en todos tus caminos." },
  { id: 126, category: "proteccion", verseReference: "Salmos 34:7", verseText: "El ángel de Jehová acampa alrededor de los que le temen, y los defiende." },
  { id: 127, category: "proteccion", verseReference: "Salmos 121:7", verseText: "Jehová te guardará de todo mal; él guardará tu alma." },
  { id: 128, category: "proteccion", verseReference: "2 Tesalonicenses 3:3", verseText: "Mas fiel es el Señor, que os afirmará y guardará del mal." },
  { id: 129, category: "proteccion", verseReference: "Isaías 54:17", verseText: "Ninguna arma forjada contra ti prosperará; y condenarás toda lengua que se levantare contra ti en juicio." },
  { id: 130, category: "proteccion", verseReference: "Deuteronomio 31:6", verseText: "Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos; porque Jehová tu Dios, es el que va contigo; no te dejará, ni te desamparará." },
  { id: 131, category: "paz", verseReference: "Juan 14:27", verseText: "La paz os dejo, mi paz os doy; no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo." },
  { id: 132, category: "paz", verseReference: "Filipenses 4:7", verseText: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús." },
  { id: 133, category: "paz", verseReference: "Isaías 26:3", verseText: "Tú guardarás en completa paz á aquel cuyo pensamiento en ti persevera: porque en ti ha confiado." },
  { id: 134, category: "paz", verseReference: "Salmos 4:8", verseText: "En paz me acostaré asimismo, y dormiré; porque solo tú, Jehová, me haces vivir confiado." },
  { id: 135, category: "paz", verseReference: "Romanos 8:6", verseText: "Porque el ocuparse de la carne es muerte; mas el ocuparse del espíritu, es vida y paz." },
  { id: 136, category: "paz", verseReference: "Números 6:26", verseText: "Jehová alce sobre ti su rostro, y ponga en ti paz." },
  { id: 137, category: "paz", verseReference: "Salmos 29:11", verseText: "Jehová dará fortaleza á su pueblo; Jehová bendecirá á su pueblo con paz." },
  { id: 138, category: "humildad", verseReference: "Santiago 4:6", verseText: "Mas él da mayor gracia. Por esto dice: Dios resiste á los soberbios, y da gracia á los humildes." },
  { id: 139, category: "humildad", verseReference: "Miqueas 6:8", verseText: "Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer juicio, y amar misericordia, y humillarte ante tu Dios." },
  { id: 140, category: "humildad", verseReference: "Mateo 23:12", verseText: "Porque cualquiera que se ensalzare, será humillado; y el que se humillare, será ensalzado." },
  { id: 141, category: "humildad", verseReference: "1 Pedro 5:6", verseText: "Humillaos pues bajo la poderosa mano de Dios, para que él os ensalce á su tiempo." },
  { id: 142, category: "humildad", verseReference: "Filipenses 2:3", verseText: "Nada hagáis por contienda ó por vanagloria; sino en humildad, estimando cada uno á los otros como superiores á él mismo." },
  { id: 143, category: "obediencia", verseReference: "1 Samuel 15:22", verseText: "Ciertamente el obedecer es mejor que los sacrificios; el prestar atención, que el gordo de los carneros." },
  { id: 144, category: "obediencia", verseReference: "Juan 14:15", verseText: "Si me amáis, guardad mis mandamientos." },
  { id: 145, category: "obediencia", verseReference: "Salmos 119:11", verseText: "En mi corazón he guardado tus dichos, para no pecar contra ti." },
  { id: 146, category: "obediencia", verseReference: "Hechos 5:29", verseText: "Es menester obedecer á Dios antes que á los hombres." },
  { id: 147, category: "obediencia", verseReference: "Lucas 11:28", verseText: "Antes bienaventurados los que oyen la palabra de Dios, y la guardan." },
  { id: 148, category: "justicia", verseReference: "Amós 5:24", verseText: "Antes corra el juicio como las aguas, y la justicia como impetuoso arroyo." },
  { id: 149, category: "justicia", verseReference: "Proverbios 21:3", verseText: "El hacer justicia y juicio es á Jehová más agradable que el sacrificio." },
  { id: 150, category: "justicia", verseReference: "Salmos 89:14", verseText: "Justicia y juicio son el asiento de tu trono: misericordia y verdad van delante de tu rostro." },
  { id: 151, category: "justicia", verseReference: "Salmos 37:28", verseText: "Porque Jehová ama el juicio, y no desampara á sus santos; para siempre serán guardados." },
  { id: 152, category: "justicia", verseReference: "Romanos 12:19", verseText: "No os venguéis vosotros mismos, amados míos, sino dejad lugar á la ira de Dios; porque escrito está: Mía es la venganza, yo pagaré, dice el Señor." },
  { id: 153, category: "salvacion", verseReference: "Hechos 4:12", verseText: "Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado á los hombres, en que podamos ser salvos." },
  { id: 154, category: "salvacion", verseReference: "Romanos 10:9", verseText: "Que si confesares con tu boca al Señor Jesús, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo." },
  { id: 155, category: "salvacion", verseReference: "Efesios 2:8", verseText: "Porque por gracia sois salvos por la fe; y esto no de vosotros, pues es don de Dios." },
  { id: 156, category: "salvacion", verseReference: "Juan 10:9", verseText: "Yo soy la puerta: el que por mí entrare, será salvo; y entrará, y saldrá, y hallará pastos." },
  { id: 157, category: "oracion", verseReference: "Mateo 7:7", verseText: "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá." },
  { id: 158, category: "oracion", verseReference: "1 Tesalonicenses 5:17", verseText: "Orad sin cesar." },
  { id: 159, category: "oracion", verseReference: "Santiago 5:16", verseText: "La oración eficaz del justo puede mucho." },
  { id: 160, category: "oracion", verseReference: "Jeremías 33:3", verseText: "Clama á mí, y yo te responderé, y te enseñaré cosas grandes y dificultosas que tú no sabes." },
  { id: 161, category: "oracion", verseReference: "Salmos 55:22", verseText: "Echa sobre Jehová tu carga, y él te sustentará; no dejará para siempre caído al justo." },
  { id: 162, category: "disciplina", verseReference: "Hebreos 12:11", verseText: "Y ninguna disciplina parece por el presente ser de gozo sino de tristeza; mas después da fruto apacible de justicia á los que por ella están ejercitados." },
  { id: 163, category: "disciplina", verseReference: "Proverbios 3:11", verseText: "Hijo mío, no desprecies la corrección de Jehová, ni te fatigues de su reprensión: Porque Jehová al que ama castiga, como el padre al hijo que quiere." },
  { id: 164, category: "disciplina", verseReference: "2 Timoteo 1:7", verseText: "Porque no nos ha dado Dios el espíritu de cobardía, sino de poder, y de amor, y de templanza." },
  { id: 165, category: "bondad", verseReference: "Salmos 34:8", verseText: "Gustad, y ved que es bueno Jehová: bienaventurado el hombre que en él confia." },
  { id: 166, category: "bondad", verseReference: "Gálatas 5:22", verseText: "Mas el fruto del Espíritu es: amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza: contra tales cosas no hay ley." },
  { id: 167, category: "bondad", verseReference: "Salmos 145:9", verseText: "Bueno es Jehová para todos, y sus misericordias sobre todas sus obras." },
  { id: 168, category: "misericordia", verseReference: "Lamentaciones 3:22", verseText: "Las misericordias de Jehová no se han acabado; porque no faltaron sus bondades. Nuevas son cada mañana; grande es tu fidelidad." },
  { id: 169, category: "misericordia", verseReference: "Salmos 103:8", verseText: "Misericordioso y clemente es Jehová; lento para la ira, y grande en misericordia." },
  { id: 170, category: "misericordia", verseReference: "Efesios 2:4", verseText: "Mas Dios, que es rico en misericordia, por su mucho amor con que nos amó, aun estando nosotros muertos en pecados, nos dio vida juntamente con Cristo." },
  { id: 171, category: "misericordia", verseReference: "Lucas 6:36", verseText: "Sed pues misericordiosos, como también vuestro Padre es misericordioso." },
  { id: 172, category: "misericordia", verseReference: "Miqueas 7:18", verseText: "¿Qué Dios como tú, que perdona la maldad y olvida el pecado del remanente de su heredad? No retuvo para siempre su ira, porque se deleita en misericordia." },
  { id: 173, category: "renovacion", verseReference: "2 Corintios 5:17", verseText: "De modo que si alguno está en Cristo, nueva criatura es: las cosas viejas pasaron; he aquí, todas son hechas nuevas." },
  { id: 174, category: "renovacion", verseReference: "Romanos 12:2", verseText: "No os conforméis á este mundo; sino transformaos por la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta." },
  { id: 175, category: "renovacion", verseReference: "Isaías 43:19", verseText: "He aquí que yo hago nuevas cosas; y antes que salgan á luz, yo os las haré notorias." },
  { id: 176, category: "renovacion", verseReference: "Ezequiel 36:26", verseText: "Os daré un corazón nuevo, y pondré dentro de vosotros un espíritu nuevo; y quitaré el corazón de piedra de vuestra carne, y os daré un corazón de carne." },
  { id: 177, category: "renovacion", verseReference: "Salmos 51:10", verseText: "Crea en mí, oh Dios, un corazón limpio; y renueva un espíritu recto dentro de mí." },
  { id: 178, category: "fortaleza_espiritual", verseReference: "Efesios 6:10", verseText: "Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza." },
  { id: 179, category: "fortaleza_espiritual", verseReference: "Filipenses 4:13", verseText: "Todo lo puedo en Cristo que me fortalece." },
  { id: 180, category: "fortaleza_espiritual", verseReference: "2 Corintios 12:9", verseText: "Bástate mi gracia: porque mi potencia en la flaqueza se perfecciona. Por tanto, de buena gana me gloriaré más bien en mis flaquezas, para que repose sobre mí la potencia de Cristo." },
  { id: 181, category: "fortaleza_espiritual", verseReference: "Josué 1:9", verseText: "No temas, ni desmayes; porque Jehová tu Dios será contigo en dondequiera que fueres." },
  { id: 182, category: "fortaleza_espiritual", verseReference: "Zacarías 4:6", verseText: "No con ejército, ni con fuerza, sino con mi Espíritu, dice Jehová de los ejércitos." },
  { id: 183, category: "luz", verseReference: "Salmos 27:1", verseText: "Jehová es mi luz y mi salvación: ¿de quién temeré?" },
  { id: 184, category: "luz", verseReference: "Juan 8:12", verseText: "Otra vez Jesús les habló, diciendo: Yo soy la luz del mundo; el que me sigue no andará en tinieblas, sino que tendrá la lumbre de la vida." },
  { id: 185, category: "luz", verseReference: "Salmos 119:105", verseText: "Lámpara es á mis pies tu palabra, y lumbrera á mi camino." },
  { id: 186, category: "luz", verseReference: "Isaías 9:2", verseText: "El pueblo que andaba en tinieblas vio grande luz; los que moraban en tierra de sombra de muerte, luz resplandeció sobre ellos." },
  { id: 187, category: "luz", verseReference: "Mateo 5:14", verseText: "Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no puede esconderse." },
  { id: 188, category: "verdad", verseReference: "Juan 8:32", verseText: "Y conoceréis la verdad, y la verdad os hará libres." },
  { id: 189, category: "verdad", verseReference: "Juan 14:6", verseText: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí." },
  { id: 190, category: "verdad", verseReference: "Juan 17:17", verseText: "Santifícalos en tu verdad; tu palabra es verdad." },
  { id: 191, category: "verdad", verseReference: "Salmos 119:160", verseText: "El principio de tu palabra es verdad; y cada uno de los juicios de tu justicia es para siempre." },
  { id: 192, category: "libertad", verseReference: "Juan 8:36", verseText: "Así que, si el Hijo os libertare, seréis verdaderamente libres." },
  { id: 193, category: "libertad", verseReference: "Gálatas 5:1", verseText: "Estad pues firmes en la libertad con que Cristo nos hizo libres, y no estéis otra vez sujetos al yugo de la servidumbre." },
  { id: 194, category: "libertad", verseReference: "2 Corintios 3:17", verseText: "Porque el Señor es el Espíritu: y donde está el Espíritu del Señor, allí hay libertad." },
  { id: 195, category: "libertad", verseReference: "Romanos 8:2", verseText: "Porque la ley del Espíritu de vida en Cristo Jesús me ha librado de la ley del pecado y de la muerte." },
  { id: 196, category: "gozo", verseReference: "Salmos 16:11", verseText: "Me mostrarás la senda de la vida: en tu presencia hay hartura de gozos; á tu diestra hay deleites para siempre." },
  { id: 197, category: "gozo", verseReference: "Habacuc 3:18", verseText: "Con todo, yo me alegraré en Jehová, y me gozaré en el Dios de mi salvación." },
  { id: 198, category: "gozo", verseReference: "Juan 16:24", verseText: "Hasta ahora nada habéis pedido en mi nombre: pedid, y recibiréis, para que vuestro gozo sea cumplido." },
  { id: 199, category: "gozo", verseReference: "Nehemías 8:10", verseText: "El gozo de Jehová es vuestra fortaleza." },
  { id: 200, category: "compasion", verseReference: "Salmos 103:13", verseText: "Como el padre se compadece de los hijos, se compadece Jehová de los que le temen." },
  { id: 201, category: "compasion", verseReference: "Isaías 49:15", verseText: "¿Olvidará la mujer su hijo que amamanta, para dejar de compadecerse del hijo de su vientre? Aunque éstas olvidaran, yo nunca me olvidaré de ti." },
  { id: 202, category: "compasion", verseReference: "Colosenses 3:12", verseText: "Vestíos pues, como escogidos de Dios, santos y amados, de entrañas de misericordia, de benignidad, de humildad, de mansedumbre, de longanimidad." },
  { id: 203, category: "compasion", verseReference: "Lucas 6:36", verseText: "Sed pues misericordiosos, como también vuestro Padre es misericordioso." },
  { id: 204, category: "esperanza_dificil", verseReference: "Romanos 8:28", verseText: "Y sabemos que á los que aman á Dios, todas las cosas les ayudan á bien, á los que conforme á su propósito son llamados." },
  { id: 205, category: "esperanza_dificil", verseReference: "Salmos 46:1", verseText: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." },
  { id: 206, category: "esperanza_dificil", verseReference: "Jeremías 29:11", verseText: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz y no de mal, para daros el fin que esperáis." },
  { id: 207, category: "esperanza_dificil", verseReference: "2 Corintios 4:8", verseText: "Que en todo somos atribulados, mas no angustiados; en apuros, mas no desesperados; perseguidos, mas no desamparados; derribados, mas no destruídos." },
  { id: 208, category: "esperanza_dificil", verseReference: "Nahum 1:7", verseText: "Jehová es bueno, fortaleza en el día de la angustia; y conoce á los que en él esperan." },
  { id: 209, category: "redencion", verseReference: "Colosenses 1:14", verseText: "En quien tenemos redención por su sangre, el perdón de los pecados." },
  { id: 210, category: "redencion", verseReference: "Efesios 1:7", verseText: "En quien tenemos redención por su sangre, el perdón de los pecados según las riquezas de su gracia." },
  { id: 211, category: "redencion", verseReference: "Isaías 43:1", verseText: "No temas, porque yo te redimí; te puse nombre, mío eres tú." },
  { id: 212, category: "redencion", verseReference: "Romanos 3:24", verseText: "Siendo justificados gratuitamente por su gracia, por la redención que es en Cristo Jesús." },
  { id: 213, category: "santidad", verseReference: "1 Pedro 1:15", verseText: "Sino como aquel que os ha llamado es santo, sed también vosotros santos en toda vuestra manera de vivir." },
  { id: 214, category: "santidad", verseReference: "Hebreos 12:14", verseText: "Seguid la paz con todos, y la santidad, sin la cual nadie verá al Señor." },
  { id: 215, category: "santidad", verseReference: "1 Tesalonicenses 4:7", verseText: "Porque no nos ha llamado Dios á impureza, sino á santificación." },
  { id: 216, category: "santidad", verseReference: "Salmos 51:10", verseText: "Crea en mí, oh Dios, un corazón limpio; y renueva un espíritu recto dentro de mí." },
  { id: 217, category: "servicio", verseReference: "Marcos 10:45", verseText: "Porque el Hijo del hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos." },
  { id: 218, category: "servicio", verseReference: "1 Pedro 4:10", verseText: "Cada uno según el don que ha recibido, minístrelo á los otros, como buenos dispensadores de las diferentes gracias de Dios." },
  { id: 219, category: "servicio", verseReference: "Mateo 25:40", verseText: "De cierto os digo que en cuanto lo hicisteis á uno de estos mis hermanos pequeños, á mí lo hicisteis." },
  { id: 220, category: "servicio", verseReference: "Josué 24:15", verseText: "Pero yo y mi casa serviremos á Jehová." },
  { id: 221, category: "unidad", verseReference: "Salmos 133:1", verseText: "¡Mirad cuán bueno y cuán delicioso es habitar los hermanos en unión!" },
  { id: 222, category: "unidad", verseReference: "Efesios 4:3", verseText: "Solícitos en guardar la unidad del Espíritu en el vínculo de la paz." },
  { id: 223, category: "unidad", verseReference: "Juan 17:21", verseText: "Para que todos sean una cosa; como tú, oh Padre, en mí, y yo en ti, que también ellos sean una cosa en nosotros." },
  { id: 224, category: "unidad", verseReference: "Colosenses 3:14", verseText: "Y sobre todas estas cosas, el amor, que es el vínculo de la perfección." },
  { id: 225, category: "perdon_reconciliacion", verseReference: "Efesios 4:32", verseText: "Sed pues benignos unos con otros, misericordiosos, perdonándoos unos á otros, como también Dios os perdonó á vosotros en Cristo." },
  { id: 226, category: "perdon_reconciliacion", verseReference: "Colosenses 3:13", verseText: "Sufriéndoos los unos á los otros, y perdonándoos los unos á los otros, si alguno tuviere queja contra otro: de la manera que Cristo os perdonó, así también hacedlo vosotros." },
  { id: 227, category: "perdon_reconciliacion", verseReference: "Mateo 18:22", verseText: "Jesús le dijo: No te digo hasta siete, sino hasta setenta veces siete." },
  { id: 228, category: "perdon_reconciliacion", verseReference: "2 Corintios 5:18", verseText: "Y todo esto es de Dios, que nos reconcilió consigo mismo por Cristo, y nos dió el ministerio de la reconciliación." },
  { id: 229, category: "confianza_dios", verseReference: "Salmos 37:5", verseText: "Encomienda á Jehová tu camino, y espera en él; y él hará." },
  { id: 230, category: "confianza_dios", verseReference: "Proverbios 3:5", verseText: "Confía en Jehová de todo tu corazón, y no te apoyes en tu propia prudencia." },
  { id: 231, category: "confianza_dios", verseReference: "Isaías 26:4", verseText: "Confiad en Jehová para siempre; porque en Jehová el Señor está la fortaleza de los siglos." },
  { id: 232, category: "confianza_dios", verseReference: "Salmos 56:3", verseText: "El día que temo, yo en ti confío." },
  { id: 233, category: "confianza_dios", verseReference: "Nahum 1:7", verseText: "Jehová es bueno, fortaleza en el día de la angustia; y conoce á los que en él esperan." },

  { id: 234, category: "disciplina", verseReference: "Proverbios 12:1", verseText: "El que ama la instrucción ama la sabiduría; mas el que aborrece la reprensión es ignorante." },
  { id: 235, category: "disciplina", verseReference: "Proverbios 6:23", verseText: "Porque el mandamiento es lámpara, y la enseñanza es luz; y camino de vida las reprensiones que te instruyen." },
  { id: 236, category: "disciplina", verseReference: "Hebreos 12:6", verseText: "Porque el Señor al que ama, castiga; y azota á cualquiera que recibe por hijo." },
  { id: 237, category: "disciplina", verseReference: "Proverbios 3:12", verseText: "Porque Jehová al que ama castiga, como el padre al hijo que se deleita." },
  { id: 238, category: "disciplina", verseReference: "1 Corintios 9:27", verseText: "Sino que golpeo mi cuerpo, y lo pongo en servidumbre; para que habiendo predicado á otros, yo mismo no sea descalificado." },

  { id: 239, category: "bondad", verseReference: "Romanos 15:14", verseText: "Mas estoy persuadido de vosotros, hermanos míos, de que vosotros también estáis llenos de bondad, llenos de todo conocimiento." },
  { id: 240, category: "bondad", verseReference: "Lucas 6:35", verseText: "Mas amad á vuestros enemigos, y haced bien, y prestad, no esperando de ello nada; y vuestro galardón será grande." },
  { id: 241, category: "bondad", verseReference: "Proverbios 11:17", verseText: "El alma misericordiosa hará bien á su alma; mas el cruel se hace mal á sí mismo." },
  { id: 242, category: "bondad", verseReference: "Tito 3:4", verseText: "Mas cuando se manifestó la bondad de Dios nuestro Salvador, y su amor para con los hombres." },
  { id: 243, category: "bondad", verseReference: "Zacarías 7:9", verseText: "Juzgad juicio verdadero, y haced misericordia y piedad cada cual con su hermano." },

  { id: 244, category: "salvacion", verseReference: "Juan 3:17", verseText: "Porque no envió Dios á su Hijo al mundo para que condene al mundo, sino para que el mundo sea salvo por él." },
  { id: 245, category: "salvacion", verseReference: "Hechos 16:31", verseText: "Cree en el Señor Jesucristo, y serás salvo, tú y tu casa." },
  { id: 246, category: "salvacion", verseReference: "Tito 3:5", verseText: "No por obras de justicia que nosotros hayamos hecho, sino según su misericordia nos salvó." },
  { id: 247, category: "salvacion", verseReference: "Salmos 62:2", verseText: "Él solamente es mi roca y mi salvación; es mi refugio, no resbalaré mucho." },

  { id: 248, category: "verdad", verseReference: "1 Juan 3:18", verseText: "Hijitos míos, no amemos de palabra ni de lengua, sino de hecho y en verdad." },
  { id: 249, category: "verdad", verseReference: "Efesios 4:15", verseText: "Mas siguiendo la verdad en amor, crezcamos en todas cosas en aquel que es la cabeza, esto es, Cristo." },
  { id: 250, category: "verdad", verseReference: "Proverbios 12:17", verseText: "El que habla verdad declara justicia; mas el testigo mentiroso, engaño." },
  { id: 251, category: "verdad", verseReference: "Zacarías 8:16", verseText: "Estas son las cosas que habéis de hacer: Hablad verdad cada cual con su prójimo." },

  { id: 252, category: "libertad", verseReference: "Gálatas 5:13", verseText: "Porque vosotros, hermanos, á libertad fuisteis llamados; solamente que no uséis la libertad como ocasión para la carne." },
  { id: 253, category: "libertad", verseReference: "Romanos 6:18", verseText: "Mas siendo libertados del pecado, vinisteis á ser siervos de la justicia." },
  { id: 254, category: "libertad", verseReference: "1 Pedro 2:16", verseText: "Como libres, pero no como los que tienen la libertad por cobertura de malicia, sino como siervos de Dios." },
  { id: 255, category: "libertad", verseReference: "Romanos 8:21", verseText: "Que también la misma criatura será libertada de la servidumbre de corrupción á la libertad gloriosa de los hijos de Dios." },

  { id: 256, category: "gozo", verseReference: "Salmos 118:24", verseText: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él." },
  { id: 257, category: "gozo", verseReference: "Romanos 14:17", verseText: "Porque el reino de Dios no es comida ni bebida, sino justicia, paz y gozo por el Espíritu Santo." },
  { id: 258, category: "gozo", verseReference: "Salmos 30:11", verseText: "Has cambiado mi lamento en baile; desataste mi cilicio, y me ceñiste de alegría." },
  { id: 259, category: "gozo", verseReference: "Filipenses 1:4", verseText: "Siempre en todas mis oraciones rogando con gozo por todos vosotros." },

  { id: 260, category: "compasion", verseReference: "Mateo 9:36", verseText: "Y viendo las gentes, tuvo compasión de ellas; porque estaban fatigadas y tendidas como ovejas que no tienen pastor." },
  { id: 261, category: "compasion", verseReference: "Romanos 12:15", verseText: "Gozaos con los que se gozan; llorad con los que lloran." },
  { id: 262, category: "compasion", verseReference: "1 Juan 3:17", verseText: "Pero el que tiene bienes de este mundo, y ve á su hermano tener necesidad, y le cierra su corazón, ¿cómo está el amor de Dios en él?" },
  { id: 263, category: "compasion", verseReference: "Proverbios 19:17", verseText: "Al que da al pobre presta á Jehová; y el bien que ha hecho, Él se lo volverá á pagar." },

  { id: 264, category: "redencion", verseReference: "1 Pedro 1:18", verseText: "Sabiendo que fuisteis rescatados de vuestra vana manera de vivir, no con cosas corruptibles, como oro ó plata." },
  { id: 265, category: "redencion", verseReference: "Tito 2:14", verseText: "Que se dio á sí mismo por nosotros para redimirnos de toda iniquidad, y purificar para sí un pueblo propio, celoso de buenas obras." },
  { id: 266, category: "redencion", verseReference: "Hebreos 9:12", verseText: "No por sangre de machos cabríos ni de becerros, sino por su propia sangre, entró una vez para siempre en el Lugar Santísimo, habiendo obtenido eterna redención." },
  { id: 267, category: "redencion", verseReference: "Isaías 44:22", verseText: "Yo deshice como una nube tus rebeliones, y como niebla tus pecados: vuélvete á mí, porque yo te redimí." },

  { id: 268, category: "santidad", verseReference: "2 Corintios 7:1", verseText: "Así que, amados, limpiémonos de toda contaminación de carne y de espíritu, perfeccionando la santidad en el temor de Dios." },
  { id: 269, category: "santidad", verseReference: "Romanos 6:22", verseText: "Mas ahora libertados del pecado, y hechos siervos á Dios, tenéis por vuestro fruto la santificación, y por fin la vida eterna." },
  { id: 270, category: "santidad", verseReference: "Levítico 19:2", verseText: "Santos seréis, porque yo soy santo, Jehová vuestro Dios." },
  { id: 271, category: "santidad", verseReference: "Efesios 4:24", verseText: "Y vestíos del nuevo hombre, criado según Dios en la justicia y santidad de la verdad." },

  { id: 272, category: "servicio", verseReference: "Mateo 20:26", verseText: "El que quisiere hacerse grande entre vosotros, sea vuestro servidor." },
  { id: 273, category: "servicio", verseReference: "Romanos 12:11", verseText: "En solicitud no perezosos; en espíritu fervientes; sirviendo al Señor." },
  { id: 274, category: "servicio", verseReference: "Colosenses 3:23", verseText: "Y todo lo que hagáis, hacedlo de corazón, como al Señor, y no á los hombres." },
  { id: 275, category: "servicio", verseReference: "Lucas 22:26", verseText: "El mayor entre vosotros, sea como el más joven; y el que dirige, como el que sirve." },

  { id: 276, category: "unidad", verseReference: "Filipenses 2:2", verseText: "Completad mi gozo, siendo del mismo sentir, con el mismo amor, unánimes, sintiendo una misma cosa." },
  { id: 277, category: "unidad", verseReference: "1 Corintios 1:10", verseText: "Os ruego, hermanos, que todos habléis una misma cosa, y que no haya entre vosotros divisiones." },
  { id: 278, category: "unidad", verseReference: "Efesios 4:4", verseText: "Un cuerpo, y un Espíritu, como fuisteis también llamados en una misma esperanza de vuestra vocación." },
  { id: 279, category: "unidad", verseReference: "Romanos 12:16", verseText: "Unánimes entre vosotros; no altivos, sino condescendiendo con los humildes." },

  { id: 280, category: "perdon_reconciliacion", verseReference: "Marcos 11:25", verseText: "Y cuando estuviereis orando, perdonad, si tenéis algo contra alguno; para que también vuestro Padre que está en los cielos os perdone vuestras ofensas." },
  { id: 281, category: "perdon_reconciliacion", verseReference: "Lucas 17:3", verseText: "Si tu hermano pecare contra ti, repréndele; y si se arrepintiere, perdónale." },
  { id: 282, category: "perdon_reconciliacion", verseReference: "Romanos 5:10", verseText: "Porque si cuando éramos enemigos, fuimos reconciliados con Dios por la muerte de su Hijo, mucho más, estando reconciliados, seremos salvos por su vida." },
  { id: 283, category: "perdon_reconciliacion", verseReference: "Proverbios 17:9", verseText: "El que encubre la falta busca amor; mas el que la divulga, aparta al amigo." },
];

const CATEGORIES_DEF = [
  { name: "ansiedad", label: "Ansiedad", keywords: ["ansiedad","angustia","estres","estrés","preocupacion","preocupación","nervios","agobio","ansioso","ansiosa"], message: "Dios invita a dejar la ansiedad en sus manos. Respira, ora y descansa en su cuidado." },
  { name: "miedo", label: "Miedo", keywords: ["miedo","temor","terror","inseguridad","asustado","asustada","temo","atemorizado"], message: "Cuando hay miedo, la Biblia recuerda que Dios acompaña y fortalece." },
  { name: "tristeza", label: "Tristeza", keywords: ["triste","tristeza","dolor","llanto","depresion","depresión","desanimo","desánimo","llorando","pena"], message: "En medio de la tristeza, Dios permanece cerca del corazón quebrantado." },
  { name: "soledad", label: "Soledad", keywords: ["solo","sola","soledad","abandono","rechazo","abandonado","abandonada","nadie"], message: "Aunque te sientas solo o sola, Dios no abandona a quienes le buscan." },
  { name: "perdon", label: "Perdón", keywords: ["perdon","perdón","culpa","pecado","fallé","falle","arrepentimiento","vergüenza","verguenza","culpable"], message: "Hay perdón y restauración para quien se acerca a Dios con sinceridad." },
  { name: "esperanza", label: "Esperanza", keywords: ["esperanza","futuro","sin salida","desesperado","desesperada","rendirme","rendirse","no puedo más","no puedo mas"], message: "Aun cuando parece que no hay salida, Dios sigue siendo fuente de esperanza." },
  { name: "fortaleza", label: "Fortaleza", keywords: ["débil","debil","cansado","cansada","fuerza","fortaleza","batalla","agotado","agotada","cansancio"], message: "Cuando tus fuerzas se acaban, Dios puede sostenerte y renovarte." },
  { name: "sabiduria", label: "Sabiduría", keywords: ["decision","decisión","guia","guía","sabiduria","sabiduría","camino","qué hacer","que hacer","dirección","direccion"], message: "Dios puede dar dirección y sabiduría cuando no sabes qué hacer." },
  { name: "amor", label: "Amor", keywords: ["amor","amar","amado","amada","caridad","querer","quiero","quiere"], message: "El amor de Dios es eterno e incondicional. Nada puede separarte de Él." },
  { name: "fe", label: "Fe", keywords: ["fe","creer","creo","increible","duda","dudar","dudo","incredulidad"], message: "La fe mueve montañas. Confía en el poder de creer aunque no puedas ver." },
  { name: "paciencia", label: "Paciencia", keywords: ["paciencia","esperar","espero","tardanza","demora","desesperacion","desesperación","urgencia"], message: "Dios actúa en su tiempo perfecto. Esperar en Él produce fruto duradero." },
  { name: "gratitud", label: "Gratitud", keywords: ["gratitud","gracias","agradecido","agradecida","bendicion","bendición","alabar","alabanza"], message: "Un corazón agradecido encuentra la presencia de Dios en cada momento." },
  { name: "alegria", label: "Alegría", keywords: ["alegria","alegría","feliz","felicidad","contento","contenta","gozo","gozoso"], message: "El gozo del Señor es tu fortaleza. Regocíjate en su amor cada día." },
  { name: "confianza", label: "Confianza", keywords: ["confianza","confiar","confio","confío","seguridad","refugio","amparo"], message: "Encomienda tu camino a Dios y Él enderezará tus pasos." },
  { name: "perseverancia", label: "Perseverancia", keywords: ["perseverar","perseverancia","rendirse","no me rindo","constancia","persistir","seguir adelante","continuar"], message: "No te canses de hacer el bien. A su tiempo cosecharás si no desmayás." },
  { name: "salud", label: "Salud", keywords: ["salud","enfermo","enferma","enfermedad","sanidad","sanar","curacion","curación","dolor fisico","hospital"], message: "Dios es tu sanador. En Él hay restauración para el cuerpo y el alma." },
  { name: "proteccion", label: "Protección", keywords: ["proteccion","protección","peligro","amenaza","seguro","segura","guardar","cuidar","cuidado"], message: "Dios es tu escudo y fortaleza. Él vela por ti en todo momento." },
  { name: "paz", label: "Paz", keywords: ["paz","tranquilidad","tranquilo","tranquila","calma","sosiego","inquieto","inquieta","agitado","agitada"], message: "La paz de Dios sobrepasa todo entendimiento y guarda tu corazón en Cristo." },
  { name: "humildad", label: "Humildad", keywords: ["humildad","humilde","orgullo","soberbia","arrogancia","engreido","engreída"], message: "Dios da gracia a los humildes. La mansedumbre es fortaleza verdadera." },
  { name: "obediencia", label: "Obediencia", keywords: ["obedecer","obediencia","mandamiento","mandamientos","voluntad de dios","seguir a dios"], message: "Obedecer a Dios es el camino a la vida. Su voluntad es siempre lo mejor." },
  { name: "justicia", label: "Justicia", keywords: ["justicia","injusticia","justo","injusto","opresion","opresión","maltrato","abuso"], message: "Dios es juez justo. Él defiende al oprimido y endereza lo torcido." },
  { name: "salvacion", label: "Salvación", keywords: ["salvacion","salvación","salvo","salva","pecados","vida eterna","redimido","redimida"], message: "En Cristo hay salvación completa. Quien cree en Él tiene vida eterna." },
  { name: "oracion", label: "Oración", keywords: ["oracion","oración","orar","orar a dios","interceder","clamor","clamar"], message: "La oración conecta tu corazón con el de Dios. Él te escucha siempre." },
  { name: "disciplina", label: "Disciplina", keywords: ["disciplina","correccion","corrección","habitos","hábitos","autocontrol","templanza","formacion","formación"], message: "La disciplina de Dios viene de su amor. Produce fruto de justicia y paz." },
  { name: "bondad", label: "Bondad", keywords: ["bondad","bondadoso","bondadosa","benignidad","generoso","generosa","generosidad","buen corazon","buen corazón"], message: "Dios es bueno y su bondad se extiende a todas sus obras. Refleja su amor." },
  { name: "misericordia", label: "Misericordia", keywords: ["misericordia","misericordioso","piedad","compasivo","compasiva","clemente"], message: "Las misericordias de Dios son nuevas cada mañana. Grande es su fidelidad." },
  { name: "renovacion", label: "Renovación", keywords: ["renovacion","renovación","nuevo comienzo","nueva vida","transformacion","transformación","cambio","restauracion","restauración"], message: "Dios hace nuevas todas las cosas. Su gracia renueva tu espíritu cada día." },
  { name: "fortaleza_espiritual", label: "Fortaleza espiritual", keywords: ["fortaleza espiritual","armadura","batalla espiritual","espiritual","poder espiritual","ungido","poderoso en dios"], message: "Fortalécete en el Señor. Su poder se perfecciona en tu debilidad." },
  { name: "luz", label: "Luz", keywords: ["luz","tinieblas","oscuridad","oscuro","iluminar","brillar","lampara"], message: "Jesús es la luz del mundo. En Él no hay tinieblas ni oscuridad alguna." },
  { name: "verdad", label: "Verdad", keywords: ["verdad","mentira","engaño","engañado","engañada","falso","falsa","veracidad"], message: "La verdad de Dios te hace libre. Su Palabra es lámpara a tus pies." },
  { name: "libertad", label: "Libertad", keywords: ["libertad","libre","liberar","liberado","liberada","atado","atada","cautivo","cautiva"], message: "Cristo vino a darte libertad. Donde está el Espíritu del Señor, allí hay libertad." },
  { name: "gozo", label: "Gozo", keywords: ["gozo","gozoso","gozosa","júbilo","jubilo","regocijo","alegrarse"], message: "El gozo de Dios no depende de las circunstancias. Es fruto de su Espíritu." },
  { name: "compasion", label: "Compasión", keywords: ["compasion","compasión","compasivo","lástima","lastima","empatia","empatía","sufrimiento ajeno"], message: "Dios se compadece como padre de sus hijos. Él ve tu dolor y te sostiene." },
  { name: "esperanza_dificil", label: "Esperanza en tiempos difíciles", keywords: ["tiempos dificiles","tiempos difíciles","crisis","calamidad","adversidad","prueba dura"], message: "En medio de la tormenta, Dios sigue siendo refugio y fortaleza segura." },
  { name: "redencion", label: "Redención", keywords: ["redencion","redención","redimido","redimida","rescatado","rescatada","sangre de cristo"], message: "Fuiste redimido por la sangre de Cristo. Eres libre de toda condenación." },
  { name: "santidad", label: "Santidad", keywords: ["santidad","santo","santa","pureza","puro","pura","santificado","santificada","consagrado"], message: "Dios te llama a ser santo porque Él es santo. La santidad es el camino a su presencia." },
  { name: "servicio", label: "Servicio", keywords: ["servir","servicio","servidor","ministerio","ayudar","ayudando","voluntario","vocacion","vocación"], message: "Servir a los demás es servir a Cristo. Usa tus dones para la gloria de Dios." },
  { name: "unidad", label: "Unidad", keywords: ["unidad","union","unión","hermanos","iglesia","comunidad","discordia","division","división"], message: "Qué bueno y delicioso es habitar los hermanos en unión. Dios habita en la unidad." },
  { name: "perdon_reconciliacion", label: "Perdón y reconciliación", keywords: ["reconciliacion","reconciliación","reconciliar","hacer las paces","perdonar a alguien","perdonar al que me hizo daño"], message: "Perdonar libera al que perdona. Dios nos reconcilió consigo; Él nos ayuda a reconciliarnos." },
  { name: "confianza_dios", label: "Confianza en Dios", keywords: ["confiar en dios","confio en dios","confío en dios","dios tiene el control","entregarse a dios"], message: "Confía de todo corazón en Dios. Él conoce tus caminos y los guiará." },
];

const categoryMessages: Record<string, string> = Object.fromEntries(
  CATEGORIES_DEF.map((c) => [c.name, c.message])
);

const JUDGMENT_PATTERNS = [
  "no perdonare","no perdonaré","no tendre piedad","no tendré piedad",
  "destruire","destruiré","espada sobre vosotros","matare a tu pueblo","mataré a tu pueblo",
];

function removeAccents(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function isJudgmentVerse(verseText: string): boolean {
  const n = removeAccents(verseText.toLowerCase());
  return JUDGMENT_PATTERNS.some((p) => n.includes(p));
}

const STOP_WORDS = new Set([
  "y","de","el","la","los","las","que","en","a","es","se","no","un","una","con","por","para",
  "mi","me","te","su","lo","le","del","al","yo","tu","son","si","ya","mas","pero","o","ni",
  "hay","he","ha","han","era","esto","eso","como","muy","asi","pues","porque","cuando","donde",
  "quien","tanto","todo","toda","todos","todas","puede","dios","sus","les","nos","nuestro",
  "nuestra","ellos","ellas","uno","dos","tres","ser","estar","fue","hay","esta","este","ese",
  "esa","esos","esas","entre","sobre","ante","bajo","sin","contra","tras","durante","mediante",
  "segun","hacia","hasta","desde","aunque","sino","bien","cada","más","menos","hizo","tenia",
  "tiene","tengo","quiero","quiere","siento","siente","puedo","puede","volver","volvio","nada",
  "algo","alguien","nunca","siempre","mucho","poco","aqui","alli","ahora","antes","despues",
]);

const SYNONYM_BRIDGE: Array<{ from: string; to: string[] }> = [
  { from: "angust",  to: ["angust","afan","solici","inquie"] },
  { from: "nervio",  to: ["tieml","espant","tema","turbad"] },
  { from: "preocup", to: ["afan","solici","cuidad"] },
  { from: "ansieda", to: ["afan","solici","inquie"] },
  { from: "agobio",  to: ["carga","peso","afan"] },
  { from: "estres",  to: ["afan","solici","inquie"] },
  { from: "triste",  to: ["triste","llor","lament","afligi","quebran","gemir"] },
  { from: "llorar",  to: ["llorar","lloro","llorad","lloran","llanto","lament"] },
  { from: "dolor",   to: ["dolor","angust","afligi","llaga"] },
  { from: "depres",  to: ["afligi","quebran","desfall","desfallec"] },
  { from: "pena",    to: ["pena","afligi","dolor","llanto"] },
  { from: "llanto",  to: ["llanto","llor","lament","gemir"] },
  { from: "miedo",   to: ["miedo","temas","tema","temor","espant","pavur"] },
  { from: "temor",   to: ["temor","temas","tema","espant"] },
  { from: "asusta",  to: ["espant","temas","tema","turbe"] },
  { from: "terror",  to: ["terror","espant","pavur","temor"] },
  { from: "solo",    to: ["contig","dejare","desampar","huerfan","solo","sola"] },
  { from: "soleda",  to: ["contig","dejare","desampar","solo"] },
  { from: "abandon", to: ["desampar","dejare","contig","abandon"] },
  { from: "rechaz",  to: ["menospre","despreciad","desech"] },
  { from: "nadie",   to: ["nadie","ninguno"] },
  { from: "perdon",  to: ["perdon"] },
  { from: "culpa",   to: ["pecad","culpa","iniquid","transgres"] },
  { from: "pecado",  to: ["pecad","iniquid","culpa","transgres"] },
  { from: "arrepent",to: ["arrepen","convers","vuelvos","contrito"] },
  { from: "verguen", to: ["verguen","confundi","avergon"] },
  { from: "esperan", to: ["esperan","confian","aguarda","confia"] },
  { from: "desespe", to: ["esperan","confia","aguarda","animo"] },
  { from: "futuro",  to: ["venir","porven","futuro","dias"] },
  { from: "cansad",  to: ["esfuerz","fuerza","fortale","cansad","renova"] },
  { from: "debil",   to: ["fuerza","fortale","esfuerz","fortif"] },
  { from: "agotad",  to: ["renova","fuerza","descans","esfuerz"] },
  { from: "fuerzas", to: ["fuerza","esfuerz","fortale","vigor"] },
  { from: "decisi",  to: ["camino","sabidu","ensen","instruy"] },
  { from: "sabidu",  to: ["sabidu","entend","instruy","ciencia"] },
  { from: "camino",  to: ["camino","senda","vereda"] },
  { from: "guia",    to: ["guia","dirigir","encamin","ensen"] },
  { from: "amor",    to: ["amor","amar","amad","caridad"] },
  { from: "fe",      to: ["fe","creer","creen","creed","fiel"] },
  { from: "duda",    to: ["duda","incredul","vacila"] },
  { from: "paz",     to: ["paz","sosieg","tranquil","repos"] },
  { from: "tranqui", to: ["paz","sosieg","repos","tranquil"] },
  { from: "miseri",  to: ["misericord","clement","benign"] },
  { from: "luz",     to: ["luz","lumbre","lamp","resplan"] },
  { from: "oscuri",  to: ["tinieblas","oscur","sombra"] },
  { from: "verdad",  to: ["verdad","veraz","fiel"] },
  { from: "libert",  to: ["libert","libre","libra","desata"] },
  { from: "salvaci", to: ["salvaci","salvo","salva","redenci"] },
  { from: "oraci",   to: ["oraci","orar","clama","ruego"] },
  { from: "gozo",    to: ["gozo","goce","jubilo","alegr"] },
  { from: "humild",  to: ["humild","humble","manso","mansa"] },
  { from: "orgullo", to: ["soberb","altiv","jactanci"] },
  { from: "santid",  to: ["santid","santo","santa","santif","puro","pura"] },
];

function stem(word: string): string {
  return word.length <= 5 ? word : word.slice(0, 5);
}

function extractKeywords(text: string): string[] {
  const clean = removeAccents(text.toLowerCase()).replace(/[^a-z\s]/g, " ");
  return clean.split(/\s+/).filter((w) => w.length >= 4 && !STOP_WORDS.has(w));
}

function enrichKeywords(keywords: string[]): string[] {
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

function scoreVerse(verseText: string, patterns: string[]): number {
  if (patterns.length === 0) return 0;
  const n = removeAccents(verseText.toLowerCase());
  return patterns.reduce((s, p) => (n.includes(p) ? s + 1 : s), 0);
}

function detectCategory(text: string): string {
  const normalized = text.toLowerCase();
  for (const cat of CATEGORIES_DEF) {
    for (const kw of cat.keywords) {
      if (normalized.includes(kw)) return cat.name;
    }
  }
  return "esperanza";
}

const FEATURED_VERSES: Record<string, string> = {
  ansiedad: "Filipenses 4:6", miedo: "Isaías 41:10", tristeza: "Salmos 34:18",
  soledad: "Hebreos 13:5", perdon: "1 Juan 1:9", esperanza: "Jeremías 29:11",
  fortaleza: "Isaías 40:31", sabiduria: "Proverbios 3:5", amor: "Juan 3:16",
  fe: "Hebreos 11:1", paciencia: "Lamentaciones 3:26", gratitud: "1 Tesalonicenses 5:18",
  alegria: "Nehemías 8:10", confianza: "Proverbios 3:5", perseverancia: "Gálatas 6:9",
  salud: "Éxodo 15:26", proteccion: "Salmos 91:1", paz: "Juan 14:27",
  humildad: "Santiago 4:6", obediencia: "1 Samuel 15:22", justicia: "Amós 5:24",
  salvacion: "Hechos 4:12", oracion: "Mateo 7:7", disciplina: "Hebreos 12:11",
  bondad: "Salmos 34:8", misericordia: "Lamentaciones 3:22", renovacion: "2 Corintios 5:17",
  fortaleza_espiritual: "Efesios 6:10", luz: "Salmos 27:1", verdad: "Juan 8:32",
  libertad: "Juan 8:36", gozo: "Nehemías 8:10", compasion: "Salmos 103:13",
  esperanza_dificil: "Romanos 8:28", redencion: "Colosenses 1:14", santidad: "1 Pedro 1:15",
  servicio: "Marcos 10:45", unidad: "Salmos 133:1",
  perdon_reconciliacion: "Efesios 4:32", confianza_dios: "Proverbios 3:5",
};

function findBestVerse(
  problem: string,
  category: string,
  excludedIds: number[] = []
): VerseResponse | null {
  const allInCategory = RAW_VERSES.filter((v) => v.category === category);
  if (allInCategory.length === 0) return null;

  let pool = excludedIds.length > 0
    ? allInCategory.filter((v) => !excludedIds.includes(v.id))
    : allInCategory;
  if (pool.length === 0) pool = allInCategory;

  const comforting = pool.filter((v) => !isJudgmentVerse(v.verseText));
  const safePool = comforting.length > 0 ? comforting : pool;

  const keywords = extractKeywords(problem);
  const patterns = enrichKeywords(keywords);

  const scored = safePool.map((v) => ({ ...v, score: scoreVerse(v.verseText, patterns) }));
  const maxScore = Math.max(...scored.map((v) => v.score));

  let chosen: RawVerse;
  if (maxScore > 0) {
    const top = scored.filter((v) => v.score === maxScore);
    chosen = top[Math.floor(Math.random() * top.length)];
  } else {
    const featuredRef = FEATURED_VERSES[category];
    const featured = featuredRef
      ? (safePool.find((v) => v.verseReference === featuredRef) ?? allInCategory.find((v) => v.verseReference === featuredRef))
      : undefined;
    chosen = featured ?? safePool[Math.floor(Math.random() * safePool.length)];
  }

  const message = categoryMessages[chosen.category] ?? categoryMessages["esperanza"];
  return {
    detected_category: chosen.category,
    message,
    verse_reference: chosen.verseReference,
    verse_text: chosen.verseText,
    verse_id: chosen.id,
  };
}

export function getVerseForProblem(
  problem: string,
  excludedIds: number[] = []
): VerseResponse | null {
  const category = detectCategory(problem);
  return findBestVerse(problem, category, excludedIds);
}

export function getVerseForCategory(
  categorySlug: string,
  excludedIds: number[] = []
): VerseResponse | null {
  const catDef = CATEGORIES_DEF.find((c) => c.name === categorySlug);
  const label = catDef?.label ?? categorySlug;
  return findBestVerse(label, categorySlug, excludedIds);
}

export function getAllVersesForCategory(categorySlug: string): VerseResponse[] {
  const verses = RAW_VERSES.filter((v) => v.category === categorySlug);
  const message = categoryMessages[categorySlug] ?? categoryMessages["esperanza"];
  return verses.map((v) => ({
    detected_category: v.category,
    message,
    verse_reference: v.verseReference,
    verse_text: v.verseText,
    verse_id: v.id,
  }));
}

export function getRandomVerseLocal(excludedIds: number[] = []): VerseResponse {
  let pool = excludedIds.length > 0
    ? RAW_VERSES.filter((v) => !excludedIds.includes(v.id))
    : RAW_VERSES;
  if (pool.length === 0) pool = RAW_VERSES;
  const v = pool[Math.floor(Math.random() * pool.length)];
  return {
    detected_category: v.category,
    message: categoryMessages[v.category] ?? categoryMessages["esperanza"],
    verse_reference: v.verseReference,
    verse_text: v.verseText,
    verse_id: v.id,
  };
}

export function getCategories(): CategoryInfo[] {
  return CATEGORIES_DEF.map((cat) => ({
    category: cat.name,
    label: cat.label,
    verse_count: getAllVersesForCategory(cat.name).length,
  }));
}
