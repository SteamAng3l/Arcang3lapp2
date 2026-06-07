import { db, versesTable } from "../../lib/db/src/index.js";
import { sql } from "drizzle-orm";

const NEW_VERSES = [
  // ── AMOR ──────────────────────────────────────────────────────────────
  { category: "amor", verse_reference: "Juan 3:16", verse_text: "Porque de tal manera amó Dios al mundo, que ha dado á su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." },
  { category: "amor", verse_reference: "1 Juan 4:8", verse_text: "El que no ama, no conoce á Dios; porque Dios es amor." },
  { category: "amor", verse_reference: "1 Juan 4:16", verse_text: "Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor; y el que está en amor, está en Dios, y Dios en él." },
  { category: "amor", verse_reference: "Romanos 8:39", verse_text: "Ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro." },
  { category: "amor", verse_reference: "1 Corintios 13:13", verse_text: "Y ahora permanecen la fe, la esperanza, el amor, estos tres; pero el mayor de ellos es el amor." },
  { category: "amor", verse_reference: "1 Corintios 13:4", verse_text: "La caridad es sufrida, es benigna; la caridad no tiene envidia, la caridad no es jactanciosa, no se ensoberbece." },
  { category: "amor", verse_reference: "1 Pedro 4:8", verse_text: "Y ante todo, tened entre vosotros fervorosa caridad; porque la caridad cubrirá multitud de pecados." },
  { category: "amor", verse_reference: "Deuteronomio 7:9", verse_text: "Conoce, pues, que Jehová tu Dios, él es Dios, Dios fiel, que guarda el pacto y la misericordia á los que le aman y guardan sus mandamientos, por mil generaciones." },
  { category: "amor", verse_reference: "Juan 15:13", verse_text: "Nadie tiene mayor amor que éste, que ponga alguno su vida por sus amigos." },

  // ── FE ────────────────────────────────────────────────────────────────
  { category: "fe", verse_reference: "Hebreos 11:1", verse_text: "Es pues la fe la certeza de lo que se espera, la demostración de lo que no se ve." },
  { category: "fe", verse_reference: "Marcos 9:23", verse_text: "Y Jesús le dijo: Si puedes creer, al que cree todo le es posible." },
  { category: "fe", verse_reference: "Efesios 2:8", verse_text: "Porque por gracia sois salvos por la fe; y esto no de vosotros, pues es don de Dios." },
  { category: "fe", verse_reference: "Romanos 10:17", verse_text: "Así que la fe es por el oír, y el oír, por la palabra de Dios." },
  { category: "fe", verse_reference: "Mateo 17:20", verse_text: "Y Jesús les dijo: Por vuestra incredulidad: porque de cierto os digo, que si tuviéreis fe como un grano de mostaza, diréis á este monte: Pásate de aquí allá, y se pasará; y nada os será imposible." },
  { category: "fe", verse_reference: "Hebreos 11:6", verse_text: "Pero sin fe es imposible agradar á Dios; porque es necesario que el que se allega á Dios, crea que le hay, y que es galardonador de los que le buscan." },
  { category: "fe", verse_reference: "Habacuc 2:4", verse_text: "He aquí que el que no es recto en su alma, fallecerá: mas el justo por su fe vivirá." },
  { category: "fe", verse_reference: "Santiago 2:17", verse_text: "Así también la fe, si no tuviere obras, es muerta en sí misma." },
  { category: "fe", verse_reference: "Marcos 11:22", verse_text: "Y respondiendo Jesús, les dijo: Tened fe en Dios." },

  // ── PACIENCIA ─────────────────────────────────────────────────────────
  { category: "paciencia", verse_reference: "Lamentaciones 3:26", verse_text: "Bueno es esperar en silencio la salud de Jehová." },
  { category: "paciencia", verse_reference: "Romanos 5:3", verse_text: "Y no sólo esto, sino que también nos gloriamos en las tribulaciones; sabiendo que la tribulación obra la paciencia." },
  { category: "paciencia", verse_reference: "Santiago 1:3", verse_text: "Sabiendo que la prueba de vuestra fe obra la paciencia." },
  { category: "paciencia", verse_reference: "Hebreos 10:36", verse_text: "Porque os es necesaria la paciencia; para que, habiendo hecho la voluntad de Dios, obtengáis la promesa." },
  { category: "paciencia", verse_reference: "Salmos 37:7", verse_text: "Guarda silencio ante Jehová, y espérale: no te alteres á causa del que prospera en su camino, por el hombre que hace maldades." },
  { category: "paciencia", verse_reference: "Isaías 40:31", verse_text: "Pero los que esperan á Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán." },
  { category: "paciencia", verse_reference: "Santiago 5:11", verse_text: "He aquí, tenemos por bienaventurados á los que sufren. Habéis oído la paciencia de Job, y habéis visto el fin del Señor, que el Señor es muy misericordioso y piadoso." },
  { category: "paciencia", verse_reference: "Romanos 15:4", verse_text: "Porque las cosas que se escribieron antes, para nuestra enseñanza se escribieron; para que por la paciencia y la consolación de las Escrituras, tengamos esperanza." },

  // ── GRATITUD ──────────────────────────────────────────────────────────
  { category: "gratitud", verse_reference: "1 Tesalonicenses 5:18", verse_text: "Dad gracias en todo: porque esta es la voluntad de Dios para con vosotros en Cristo Jesús." },
  { category: "gratitud", verse_reference: "Salmos 100:4", verse_text: "Entrad por sus puertas con alabanza, por sus atrios con alabanza; alabadle, bendecid su nombre." },
  { category: "gratitud", verse_reference: "Salmos 107:1", verse_text: "Alabad á Jehová, porque él es bueno; porque para siempre es su misericordia." },
  { category: "gratitud", verse_reference: "Efesios 5:20", verse_text: "Dando siempre gracias por todo al Dios y Padre, en el nombre de nuestro Señor Jesucristo." },
  { category: "gratitud", verse_reference: "Colosenses 3:17", verse_text: "Y todo lo que hacéis, sea de palabra ó de obra, hacedlo todo en el nombre del Señor Jesús, dando gracias á Dios y Padre por él." },
  { category: "gratitud", verse_reference: "Salmos 136:1", verse_text: "Alabad á Jehová, porque él es bueno: Porque para siempre es su misericordia." },
  { category: "gratitud", verse_reference: "Salmos 50:23", verse_text: "El que sacrifica alabanza me honrará; y al que ordenare su camino, le mostraré la salvación de Dios." },
  { category: "gratitud", verse_reference: "Filipenses 4:6", verse_text: "Por nada estéis afanosos; sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con hacimiento de gracias." },

  // ── ALEGRÍA ───────────────────────────────────────────────────────────
  { category: "alegria", verse_reference: "Nehemías 8:10", verse_text: "Y les dijo: Id, comed grosuras, y bebed vino dulce, y enviad partes á los que no tienen nada preparado; porque día santo es á nuestro Señor: no os entristezcáis; porque el gozo de Jehová es vuestra fortaleza." },
  { category: "alegria", verse_reference: "Salmos 16:11", verse_text: "Me mostrarás la senda de la vida: en tu presencia hay hartura de gozos; á tu diestra hay deleites para siempre." },
  { category: "alegria", verse_reference: "Salmos 126:3", verse_text: "Grandes cosas ha hecho Jehová con nosotros; estaremos alegres." },
  { category: "alegria", verse_reference: "Juan 15:11", verse_text: "Estas cosas os he hablado, para que mi gozo esté en vosotros, y vuestro gozo sea cumplido." },
  { category: "alegria", verse_reference: "Salmos 32:11", verse_text: "Alegraos en Jehová y gozaos, justos; y cantad con júbilo todos vosotros los rectos de corazón." },
  { category: "alegria", verse_reference: "Romanos 15:13", verse_text: "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por la virtud del Espíritu Santo." },
  { category: "alegria", verse_reference: "Filipenses 4:4", verse_text: "Alegraos en el Señor siempre: otra vez digo que os alegréis." },
  { category: "alegria", verse_reference: "Salmos 30:5", verse_text: "Porque un momento durará su ira, mas su buena voluntad toda la vida. El lloro puede durar una noche, mas la alegría viene en la mañana." },

  // ── CONFIANZA ─────────────────────────────────────────────────────────
  { category: "confianza", verse_reference: "Proverbios 3:5", verse_text: "Confía en Jehová de todo tu corazón, y no te apoyes en tu propia prudencia." },
  { category: "confianza", verse_reference: "Salmos 46:1", verse_text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." },
  { category: "confianza", verse_reference: "Isaías 26:3", verse_text: "Tú guardarás en completa paz á aquel cuyo pensamiento en ti persevera: porque en ti ha confiado." },
  { category: "confianza", verse_reference: "Jeremías 17:7", verse_text: "Bendito el varón que confía en Jehová, y cuya confianza es Jehová." },
  { category: "confianza", verse_reference: "Salmos 56:4", verse_text: "En Dios alabaré su palabra; en Dios he confiado, no temeré: ¿Qué puede hacerme el hombre?" },
  { category: "confianza", verse_reference: "Salmos 62:8", verse_text: "Esperad en él en todo tiempo, oh pueblos: derramad delante de él vuestro corazón: Dios es nuestro refugio." },
  { category: "confianza", verse_reference: "Salmos 27:1", verse_text: "Jehová es mi luz y mi salvación: ¿de quién temeré? Jehová es la fortaleza de mi vida: ¿de quién me receleré?" },
  { category: "confianza", verse_reference: "Salmos 9:10", verse_text: "Y en ti confiarán los que conocen tu nombre; por cuanto no desamparaste á los que te buscaron, oh Jehová." },

  // ── PERSEVERANCIA ─────────────────────────────────────────────────────
  { category: "perseverancia", verse_reference: "Gálatas 6:9", verse_text: "Y no nos cansemos de hacer bien; porque á su tiempo segaremos, si no desmayáremos." },
  { category: "perseverancia", verse_reference: "Hebreos 12:1", verse_text: "Por tanto, nosotros también, teniendo en derredor nuestro tan grande nube de testigos, despojémonos de todo peso y del pecado que nos cerca, y corramos con paciencia la carrera que tenemos por delante." },
  { category: "perseverancia", verse_reference: "Santiago 1:12", verse_text: "Bienaventurado el varón que soporta la prueba; porque cuando fuere probado, recibirá la corona de vida, que Dios ha prometido á los que le aman." },
  { category: "perseverancia", verse_reference: "Romanos 12:12", verse_text: "Gozosos en la esperanza; pacientes en la tribulación; constantes en la oración." },
  { category: "perseverancia", verse_reference: "2 Timoteo 4:7", verse_text: "He peleado la buena batalla, he acabado la carrera, he guardado la fe." },
  { category: "perseverancia", verse_reference: "Josué 1:7", verse_text: "Solamente esfuérzate y sé muy valiente, para cuidar de hacer conforme á toda la ley que mi siervo Moisés te mandó." },
  { category: "perseverancia", verse_reference: "Apocalipsis 2:10", verse_text: "Sé fiel hasta la muerte, y yo te daré la corona de la vida." },
  { category: "perseverancia", verse_reference: "1 Corintios 15:58", verse_text: "Así que, hermanos míos amados, estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano." },

  // ── SALUD ─────────────────────────────────────────────────────────────
  { category: "salud", verse_reference: "Éxodo 15:26", verse_text: "Y dijo: Si oyeres atentamente la voz de Jehová tu Dios, é hicieres lo recto delante de sus ojos, y dieres oído á sus mandamientos, y guardares todos sus estatutos, ninguna enfermedad de las que envié á los Egipcios te enviaré á ti; porque yo soy Jehová tu sanador." },
  { category: "salud", verse_reference: "Salmos 103:3", verse_text: "Él es quien perdona todas tus iniquidades, el que sana todas tus dolencias." },
  { category: "salud", verse_reference: "Jeremías 30:17", verse_text: "Mas yo haré venir sanidad para ti, y sanaré tus heridas, dice Jehová." },
  { category: "salud", verse_reference: "3 Juan 1:2", verse_text: "Amado, yo deseo que tú seas prosperado en todas las cosas, y que tengas salud, así como prospera tu alma." },
  { category: "salud", verse_reference: "Santiago 5:15", verse_text: "Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si estuviere en pecados, le serán perdonados." },
  { category: "salud", verse_reference: "Isaías 53:5", verse_text: "Mas él fue herido por nuestras rebeliones, molido por nuestros pecados: el castigo de nuestra paz sobre él, y por su llaga fuimos nosotros curados." },
  { category: "salud", verse_reference: "Proverbios 4:22", verse_text: "Porque vida son á los que las hallaren, y medicina á todo su cuerpo." },
  { category: "salud", verse_reference: "Salmos 107:20", verse_text: "Envió su palabra, y los sanó, y los libró de su ruina." },

  // ── PROTECCIÓN ────────────────────────────────────────────────────────
  { category: "proteccion", verse_reference: "Salmos 91:1", verse_text: "El que habita al abrigo del Altísimo, morará bajo la sombra del Omnipotente." },
  { category: "proteccion", verse_reference: "Salmos 91:11", verse_text: "Pues que á sus ángeles mandará acerca de ti, que te guarden en todos tus caminos." },
  { category: "proteccion", verse_reference: "Salmos 34:7", verse_text: "El ángel de Jehová acampa alrededor de los que le temen, y los defiende." },
  { category: "proteccion", verse_reference: "Salmos 121:7", verse_text: "Jehová te guardará de todo mal; él guardará tu alma." },
  { category: "proteccion", verse_reference: "2 Tesalonicenses 3:3", verse_text: "Mas fiel es el Señor, que os afirmará y guardará del mal." },
  { category: "proteccion", verse_reference: "Salmos 27:5", verse_text: "Porque él me esconderá en su tabernáculo en el día del mal; me ocultará en lo reservado de su pabellón; sobre una roca me pondrá en alto." },
  { category: "proteccion", verse_reference: "Isaías 54:17", verse_text: "Ninguna arma forjada contra ti prosperará; y condenarás toda lengua que se levantare contra ti en juicio." },
  { category: "proteccion", verse_reference: "Deuteronomio 31:6", verse_text: "Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos; porque Jehová tu Dios, es el que va contigo; no te dejará, ni te desamparará." },
  { category: "proteccion", verse_reference: "Salmos 46:2", verse_text: "Por tanto no temeremos, aunque la tierra se cambie, y aunque los montes se traspasen al corazón de la mar." },

  // ── PAZ ───────────────────────────────────────────────────────────────
  { category: "paz", verse_reference: "Juan 14:27", verse_text: "La paz os dejo, mi paz os doy; no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo." },
  { category: "paz", verse_reference: "Filipenses 4:7", verse_text: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús." },
  { category: "paz", verse_reference: "Isaías 26:3", verse_text: "Tú guardarás en completa paz á aquel cuyo pensamiento en ti persevera: porque en ti ha confiado." },
  { category: "paz", verse_reference: "Salmos 4:8", verse_text: "En paz me acostaré asimismo, y dormiré; porque solo tú, Jehová, me haces vivir confiado." },
  { category: "paz", verse_reference: "Romanos 8:6", verse_text: "Porque el ocuparse de la carne es muerte; mas el ocuparse del espíritu, es vida y paz." },
  { category: "paz", verse_reference: "Números 6:26", verse_text: "Jehová alce sobre ti su rostro, y ponga en ti paz." },
  { category: "paz", verse_reference: "Isaías 32:17", verse_text: "Y el trabajo de la justicia será paz; y la labor de la justicia, reposo y seguridad para siempre." },
  { category: "paz", verse_reference: "Salmos 29:11", verse_text: "Jehová dará fortaleza á su pueblo; Jehová bendecirá á su pueblo con paz." },

  // ── HUMILDAD ──────────────────────────────────────────────────────────
  { category: "humildad", verse_reference: "Santiago 4:6", verse_text: "Mas él da mayor gracia. Por esto dice: Dios resiste á los soberbios, y da gracia á los humildes." },
  { category: "humildad", verse_reference: "Miqueas 6:8", verse_text: "Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer juicio, y amar misericordia, y humillarte ante tu Dios." },
  { category: "humildad", verse_reference: "Mateo 23:12", verse_text: "Porque cualquiera que se ensalzare, será humillado; y el que se humillare, será ensalzado." },
  { category: "humildad", verse_reference: "Proverbios 11:2", verse_text: "Cuando viniere la soberbia, vendrá también la deshonra; mas con los humildes está la sabiduría." },
  { category: "humildad", verse_reference: "1 Pedro 5:6", verse_text: "Humillaos pues bajo la poderosa mano de Dios, para que él os ensalce á su tiempo." },
  { category: "humildad", verse_reference: "Filipenses 2:3", verse_text: "Nada hagáis por contienda ó por vanagloria; sino en humildad, estimando cada uno á los otros como superiores á él mismo." },
  { category: "humildad", verse_reference: "Proverbios 22:4", verse_text: "Riquezas y honra y vida son el galardón de la humildad y del temor de Jehová." },
  { category: "humildad", verse_reference: "Salmos 138:6", verse_text: "Porque Jehová es excelso, y atiende al humilde; mas al soberbio conoce de lejos." },

  // ── OBEDIENCIA ────────────────────────────────────────────────────────
  { category: "obediencia", verse_reference: "1 Samuel 15:22", verse_text: "Y Samuel respondió: ¿Tiénese Jehová tanto contentamiento con los holocaustos y víctimas, como cuando se obedece á la voz de Jehová? Ciertamente el obedecer es mejor que los sacrificios; el prestar atención, que el gordo de los carneros." },
  { category: "obediencia", verse_reference: "Juan 14:15", verse_text: "Si me amáis, guardad mis mandamientos." },
  { category: "obediencia", verse_reference: "Salmos 119:11", verse_text: "En mi corazón he guardado tus dichos, para no pecar contra ti." },
  { category: "obediencia", verse_reference: "Hechos 5:29", verse_text: "Respondiendo Pedro y los apóstoles, dijeron: Es menester obedecer á Dios antes que á los hombres." },
  { category: "obediencia", verse_reference: "Lucas 11:28", verse_text: "Y él dijo: Antes bienaventurados los que oyen la palabra de Dios, y la guardan." },
  { category: "obediencia", verse_reference: "Deuteronomio 11:1", verse_text: "Amarás pues á Jehová tu Dios, y guardarás sus ordenanzas y sus estatutos y sus decretos y sus mandamientos, todos los días." },
  { category: "obediencia", verse_reference: "Romanos 6:17", verse_text: "Pero gracias á Dios, que aunque erais siervos del pecado, habéis obedecido de corazón á aquella forma de doctrina á que fuisteis entregados." },

  // ── JUSTICIA ──────────────────────────────────────────────────────────
  { category: "justicia", verse_reference: "Amós 5:24", verse_text: "Antes corra el juicio como las aguas, y la justicia como impetuoso arroyo." },
  { category: "justicia", verse_reference: "Proverbios 21:3", verse_text: "El hacer justicia y juicio es á Jehová más agradable que el sacrificio." },
  { category: "justicia", verse_reference: "Salmos 89:14", verse_text: "Justicia y juicio son el asiento de tu trono: misericordia y verdad van delante de tu rostro." },
  { category: "justicia", verse_reference: "Isaías 61:8", verse_text: "Porque yo Jehová amo el juicio; aborrezco el robo con iniquidad; y les daré su paga con verdad, y haré con ellos alianza perpetua." },
  { category: "justicia", verse_reference: "Salmos 37:28", verse_text: "Porque Jehová ama el juicio, y no desampara á sus santos; para siempre serán guardados." },
  { category: "justicia", verse_reference: "Proverbios 29:7", verse_text: "El justo entiende la causa de los pobres; el impío no entiende saberla." },
  { category: "justicia", verse_reference: "Romanos 12:19", verse_text: "No os venguéis vosotros mismos, amados míos, sino dejad lugar á la ira de Dios; porque escrito está: Mía es la venganza, yo pagaré, dice el Señor." },

  // ── SALVACIÓN ─────────────────────────────────────────────────────────
  { category: "salvacion", verse_reference: "Hechos 4:12", verse_text: "Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado á los hombres, en que podamos ser salvos." },
  { category: "salvacion", verse_reference: "Romanos 10:9", verse_text: "Que si confesares con tu boca al Señor Jesús, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo." },
  { category: "salvacion", verse_reference: "Isaías 12:2", verse_text: "He aquí que Dios es mi salvación; me aseguraré y no temeré: porque mi fortaleza y mi canción es JAH Jehová, el cual ha sido mi salud." },
  { category: "salvacion", verse_reference: "Efesios 2:8", verse_text: "Porque por gracia sois salvos por la fe; y esto no de vosotros, pues es don de Dios." },
  { category: "salvacion", verse_reference: "Tito 3:5", verse_text: "No por obras de justicia que nosotros hayamos hecho, sino por su misericordia, nos salvó, por el lavamiento de la regeneración y de la renovación del Espíritu Santo." },
  { category: "salvacion", verse_reference: "2 Timoteo 1:9", verse_text: "El cual nos salvó y llamó con vocación santa, no conforme á nuestras obras, sino conforme al propósito suyo y á la gracia que nos fue dada en Cristo Jesús antes de los tiempos de los siglos." },
  { category: "salvacion", verse_reference: "Juan 10:9", verse_text: "Yo soy la puerta: el que por mí entrare, será salvo; y entrará, y saldrá, y hallará pastos." },

  // ── ORACIÓN ───────────────────────────────────────────────────────────
  { category: "oracion", verse_reference: "Mateo 7:7", verse_text: "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá." },
  { category: "oracion", verse_reference: "1 Tesalonicenses 5:17", verse_text: "Orad sin cesar." },
  { category: "oracion", verse_reference: "Santiago 5:16", verse_text: "Confesaos vuestras ofensas los unos á los otros, y orad los unos por los otros, para que seáis sanos. La oración eficaz del justo puede mucho." },
  { category: "oracion", verse_reference: "Jeremías 33:3", verse_text: "Clama á mí, y yo te responderé, y te enseñaré cosas grandes y dificultosas que tú no sabes." },
  { category: "oracion", verse_reference: "Lucas 18:1", verse_text: "Y les dijo también una parábola sobre que era necesario orar siempre, y no desmayar." },
  { category: "oracion", verse_reference: "1 Juan 5:14", verse_text: "Y ésta es la confianza que tenemos en él, que si demandáremos alguna cosa conforme á su voluntad, él nos oye." },
  { category: "oracion", verse_reference: "Filipenses 4:6", verse_text: "Por nada estéis afanosos; sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con hacimiento de gracias." },
  { category: "oracion", verse_reference: "Salmos 55:22", verse_text: "Echa sobre Jehová tu carga, y él te sustentará; no dejará para siempre caído al justo." },

  // ── DISCIPLINA ────────────────────────────────────────────────────────
  { category: "disciplina", verse_reference: "Hebreos 12:11", verse_text: "Y ninguna disciplina parece por el presente ser de gozo sino de tristeza; mas después da fruto apacible de justicia á los que por ella están ejercitados." },
  { category: "disciplina", verse_reference: "Proverbios 3:11", verse_text: "Hijo mío, no desprecies la corrección de Jehová, ni te fatigues de su reprensión: Porque Jehová al que ama castiga, como el padre al hijo que quiere." },
  { category: "disciplina", verse_reference: "Proverbios 10:17", verse_text: "El que guarda la enseñanza, está en la carrera de la vida; mas el que desecha la reprensión, yerra." },
  { category: "disciplina", verse_reference: "2 Timoteo 1:7", verse_text: "Porque no nos ha dado Dios el espíritu de cobardía, sino de poder, y de amor, y de templanza." },
  { category: "disciplina", verse_reference: "Proverbios 12:1", verse_text: "El que ama la doctrina, ama la sabiduría; mas el que aborrece la reprensión, es ignorante." },
  { category: "disciplina", verse_reference: "Tito 2:12", verse_text: "Enseñándonos que, renunciando á la impiedad y á los deseos mundanos, vivamos en este siglo sobria, justa, y piadosamente." },
  { category: "disciplina", verse_reference: "1 Corintios 9:27", verse_text: "Sino que golpeo mi cuerpo y lo pongo en servidumbre; no sea que habiendo predicado á otros, yo mismo venga á ser reprobado." },

  // ── BONDAD ────────────────────────────────────────────────────────────
  { category: "bondad", verse_reference: "Salmos 34:8", verse_text: "Gustad, y ved que es bueno Jehová: bienaventurado el hombre que en él confia." },
  { category: "bondad", verse_reference: "Gálatas 5:22", verse_text: "Mas el fruto del Espíritu es: amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza: contra tales cosas no hay ley." },
  { category: "bondad", verse_reference: "Salmos 107:8", verse_text: "Alaben la misericordia de Jehová, y sus maravillas para con los hijos de los hombres." },
  { category: "bondad", verse_reference: "Tito 3:4", verse_text: "Mas cuando la bondad de Dios nuestro Salvador y su amor para con los hombres se manifestó, no por obras de justicia que nosotros hayamos hecho, sino por su misericordia, nos salvó." },
  { category: "bondad", verse_reference: "Romanos 15:14", verse_text: "Pero yo mismo estoy persuadido de vosotros, hermanos míos, que vosotros también estáis llenos de bondad, llenos de todo conocimiento, y que podéis los unos á los otros amonestar." },
  { category: "bondad", verse_reference: "Salmos 145:9", verse_text: "Bueno es Jehová para todos, y sus misericordias sobre todas sus obras." },
  { category: "bondad", verse_reference: "Proverbios 19:22", verse_text: "Lo que hace al hombre de estimar es su misericordia; y mejor es el pobre que el mentiroso." },

  // ── MISERICORDIA ──────────────────────────────────────────────────────
  { category: "misericordia", verse_reference: "Lamentaciones 3:22", verse_text: "Las misericordias de Jehová no se han acabado; porque no faltaron sus bondades. Nuevas son cada mañana; grande es tu fidelidad." },
  { category: "misericordia", verse_reference: "Salmos 103:8", verse_text: "Misericordioso y clemente es Jehová; lento para la ira, y grande en misericordia." },
  { category: "misericordia", verse_reference: "Efesios 2:4", verse_text: "Mas Dios, que es rico en misericordia, por su mucho amor con que nos amó, aun estando nosotros muertos en pecados, nos dio vida juntamente con Cristo." },
  { category: "misericordia", verse_reference: "Lucas 6:36", verse_text: "Sed pues misericordiosos, como también vuestro Padre es misericordioso." },
  { category: "misericordia", verse_reference: "1 Pedro 1:3", verse_text: "Bendito el Dios y Padre de nuestro Señor Jesucristo, que según su grande misericordia nos regeneró para una esperanza viva, por la resurrección de Jesucristo de los muertos." },
  { category: "misericordia", verse_reference: "Salmos 136:26", verse_text: "Alabad al Dios de los cielos: Porque para siempre es su misericordia." },
  { category: "misericordia", verse_reference: "Miqueas 7:18", verse_text: "¿Qué Dios como tú, que perdona la maldad y olvida el pecado del remanente de su heredad? No retuvo para siempre su ira, porque se deleita en misericordia." },

  // ── RENOVACIÓN ────────────────────────────────────────────────────────
  { category: "renovacion", verse_reference: "2 Corintios 5:17", verse_text: "De modo que si alguno está en Cristo, nueva criatura es: las cosas viejas pasaron; he aquí, todas son hechas nuevas." },
  { category: "renovacion", verse_reference: "2 Corintios 4:16", verse_text: "Por tanto, no desmayamos; antes aunque este nuestro hombre exterior se va corrompiendo, el interior no obstante se renueva de día en día." },
  { category: "renovacion", verse_reference: "Romanos 12:2", verse_text: "No os conforméis á este mundo; sino transformaos por la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta." },
  { category: "renovacion", verse_reference: "Isaías 43:19", verse_text: "He aquí que yo hago nuevas cosas; y antes que salgan á luz, yo os las haré notorias. Haré también camino en el desierto, ríos en la soledad." },
  { category: "renovacion", verse_reference: "Ezequiel 36:26", verse_text: "Os daré un corazón nuevo, y pondré dentro de vosotros un espíritu nuevo; y quitaré el corazón de piedra de vuestra carne, y os daré un corazón de carne." },
  { category: "renovacion", verse_reference: "Tito 3:5", verse_text: "No por obras de justicia que nosotros hayamos hecho, sino por su misericordia, nos salvó, por el lavamiento de la regeneración y de la renovación del Espíritu Santo." },
  { category: "renovacion", verse_reference: "Salmos 51:10", verse_text: "Crea en mí, oh Dios, un corazón limpio; y renueva un espíritu recto dentro de mí." },

  // ── FORTALEZA ESPIRITUAL ───────────────────────────────────────────────
  { category: "fortaleza_espiritual", verse_reference: "Efesios 6:10", verse_text: "Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza." },
  { category: "fortaleza_espiritual", verse_reference: "Efesios 3:16", verse_text: "Para que os dé, conforme á las riquezas de su gloria, el ser fortalecidos con poder en el hombre interior por su Espíritu." },
  { category: "fortaleza_espiritual", verse_reference: "Filipenses 4:13", verse_text: "Todo lo puedo en Cristo que me fortalece." },
  { category: "fortaleza_espiritual", verse_reference: "2 Corintios 12:9", verse_text: "Y me ha dicho: Bástate mi gracia: porque mi potencia en la flaqueza se perfecciona. Por tanto, de buena gana me gloriaré más bien en mis flaquezas, para que repose sobre mí la potencia de Cristo." },
  { category: "fortaleza_espiritual", verse_reference: "Josué 1:9", verse_text: "¿No te mandé que te esforzases y fueses valiente? No temas, ni desmayes; porque Jehová tu Dios será contigo en dondequiera que fueres." },
  { category: "fortaleza_espiritual", verse_reference: "Salmos 73:26", verse_text: "Mi carne y mi corazón desfallecen: mas la roca de mi corazón y mi porción es Dios para siempre." },
  { category: "fortaleza_espiritual", verse_reference: "Zacarías 4:6", verse_text: "Respondió él y me habló diciendo: Esta es la palabra de Jehová á Zorobabel, que dice: No con ejército, ni con fuerza, sino con mi Espíritu, dice Jehová de los ejércitos." },

  // ── LUZ ───────────────────────────────────────────────────────────────
  { category: "luz", verse_reference: "Salmos 27:1", verse_text: "Jehová es mi luz y mi salvación: ¿de quién temeré?" },
  { category: "luz", verse_reference: "Juan 8:12", verse_text: "Otra vez Jesús les habló, diciendo: Yo soy la luz del mundo; el que me sigue no andará en tinieblas, sino que tendrá la lumbre de la vida." },
  { category: "luz", verse_reference: "Salmos 119:105", verse_text: "Lámpara es á mis pies tu palabra, y lumbrera á mi camino." },
  { category: "luz", verse_reference: "Proverbios 4:18", verse_text: "Mas la senda de los justos es como la luz de la aurora, que va en aumento hasta que el día es perfecto." },
  { category: "luz", verse_reference: "Isaías 9:2", verse_text: "El pueblo que andaba en tinieblas vio grande luz; los que moraban en tierra de sombra de muerte, luz resplandeció sobre ellos." },
  { category: "luz", verse_reference: "1 Juan 1:7", verse_text: "Mas si anduviéremos en luz, como él está en luz, tenemos comunión entre nosotros, y la sangre de Jesucristo su Hijo nos limpia de todo pecado." },
  { category: "luz", verse_reference: "2 Corintios 4:6", verse_text: "Porque Dios, que mandó que de las tinieblas resplandeciese la luz, es el que resplandeció en nuestros corazones." },
  { category: "luz", verse_reference: "Mateo 5:14", verse_text: "Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no puede esconderse." },

  // ── VERDAD ────────────────────────────────────────────────────────────
  { category: "verdad", verse_reference: "Juan 8:32", verse_text: "Y conoceréis la verdad, y la verdad os hará libres." },
  { category: "verdad", verse_reference: "Juan 14:6", verse_text: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí." },
  { category: "verdad", verse_reference: "Salmos 119:160", verse_text: "El principio de tu palabra es verdad; y cada uno de los juicios de tu justicia es para siempre." },
  { category: "verdad", verse_reference: "Juan 17:17", verse_text: "Santifícalos en tu verdad; tu palabra es verdad." },
  { category: "verdad", verse_reference: "Efesios 4:15", verse_text: "Sino que siguiendo la verdad en amor, crezcamos en todo en aquel que es la cabeza, es á saber, Cristo." },
  { category: "verdad", verse_reference: "3 Juan 1:4", verse_text: "No tengo yo mayor gozo que éste, que oiga que mis hijos andan en la verdad." },
  { category: "verdad", verse_reference: "Proverbios 12:17", verse_text: "El que habla verdad declara justicia; mas el testigo mentiroso, engaño." },

  // ── LIBERTAD ──────────────────────────────────────────────────────────
  { category: "libertad", verse_reference: "Juan 8:36", verse_text: "Así que, si el Hijo os libertare, seréis verdaderamente libres." },
  { category: "libertad", verse_reference: "Gálatas 5:1", verse_text: "Estad pues firmes en la libertad con que Cristo nos hizo libres, y no estéis otra vez sujetos al yugo de la servidumbre." },
  { category: "libertad", verse_reference: "Romanos 8:2", verse_text: "Porque la ley del Espíritu de vida en Cristo Jesús me ha librado de la ley del pecado y de la muerte." },
  { category: "libertad", verse_reference: "2 Corintios 3:17", verse_text: "Porque el Señor es el Espíritu: y donde está el Espíritu del Señor, allí hay libertad." },
  { category: "libertad", verse_reference: "Salmos 119:45", verse_text: "Y andaré en libertad, porque busqué tus mandamientos." },
  { category: "libertad", verse_reference: "Isaías 61:1", verse_text: "El Espíritu de Jehová el Señor es sobre mí; porque me ungió Jehová: hame enviado á predicar buenas nuevas á los abatidos, á ligar á los quebrantados de corazón, á publicar libertad á los cautivos, y á los presos abertura de la cárcel." },
  { category: "libertad", verse_reference: "Gálatas 5:13", verse_text: "Porque vosotros, hermanos, á libertad fuisteis llamados; solamente que no uséis la libertad para ocasión de la carne, sino servíos por el amor los unos á los otros." },

  // ── GOZO ──────────────────────────────────────────────────────────────
  { category: "gozo", verse_reference: "Salmos 16:11", verse_text: "Me mostrarás la senda de la vida: en tu presencia hay hartura de gozos; á tu diestra hay deleites para siempre." },
  { category: "gozo", verse_reference: "Habacuc 3:18", verse_text: "Con todo, yo me alegraré en Jehová, y me gozaré en el Dios de mi salvación." },
  { category: "gozo", verse_reference: "Salmos 30:5", verse_text: "Porque un momento durará su ira, mas su buena voluntad toda la vida. El lloro puede durar una noche, mas la alegría viene en la mañana." },
  { category: "gozo", verse_reference: "Juan 16:24", verse_text: "Hasta ahora nada habéis pedido en mi nombre: pedid, y recibiréis, para que vuestro gozo sea cumplido." },
  { category: "gozo", verse_reference: "Romanos 15:13", verse_text: "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por la virtud del Espíritu Santo." },
  { category: "gozo", verse_reference: "Salmos 126:5", verse_text: "Los que sembraron con lágrimas, con regocijo segarán." },
  { category: "gozo", verse_reference: "Nehemías 8:10", verse_text: "El gozo de Jehová es vuestra fortaleza." },

  // ── COMPASIÓN ─────────────────────────────────────────────────────────
  { category: "compasion", verse_reference: "Salmos 103:13", verse_text: "Como el padre se compadece de los hijos, se compadece Jehová de los que le temen." },
  { category: "compasion", verse_reference: "Zacarías 7:9", verse_text: "Así habló Jehová de los ejércitos, diciendo: Juzgad conforme á la verdad, y haced misericordia y compasión cada cual con su hermano." },
  { category: "compasion", verse_reference: "Colosenses 3:12", verse_text: "Vestíos pues, como escogidos de Dios, santos y amados, de entrañas de misericordia, de benignidad, de humildad, de mansedumbre, de longanimidad." },
  { category: "compasion", verse_reference: "Isaías 49:15", verse_text: "¿Olvidará la mujer su hijo que amamanta, para dejar de compadecerse del hijo de su vientre? Aunque éstas olvidaran, yo nunca me olvidaré de ti." },
  { category: "compasion", verse_reference: "1 Pedro 3:8", verse_text: "Finalmente, sed todos de un mismo ánimo, compasivos, amándoos fraternalmente, misericordiosos, amigables." },
  { category: "compasion", verse_reference: "Mateo 9:36", verse_text: "Y viendo las gentes, tuvo compasión de ellas; porque estaban cansadas y tendidas como ovejas que no tienen pastor." },
  { category: "compasion", verse_reference: "Lucas 6:36", verse_text: "Sed pues misericordiosos, como también vuestro Padre es misericordioso." },

  // ── ESPERANZA EN TIEMPOS DIFÍCILES ───────────────────────────────────
  { category: "esperanza_dificil", verse_reference: "Romanos 8:28", verse_text: "Y sabemos que á los que aman á Dios, todas las cosas les ayudan á bien, á los que conforme á su propósito son llamados." },
  { category: "esperanza_dificil", verse_reference: "Salmos 46:1", verse_text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." },
  { category: "esperanza_dificil", verse_reference: "Romanos 5:3", verse_text: "Y no sólo esto, sino que también nos gloriamos en las tribulaciones; sabiendo que la tribulación obra la paciencia; y la paciencia, la prueba; y la prueba, la esperanza." },
  { category: "esperanza_dificil", verse_reference: "Nahum 1:7", verse_text: "Jehová es bueno, fortaleza en el día de la angustia; y conoce á los que en él esperan." },
  { category: "esperanza_dificil", verse_reference: "Salmos 34:19", verse_text: "Muchas son las aflicciones del justo; mas de todas ellas le librará Jehová." },
  { category: "esperanza_dificil", verse_reference: "2 Corintios 4:8", verse_text: "Que en todo somos atribulados, mas no angustiados; en apuros, mas no desesperados; perseguidos, mas no desamparados; derribados, mas no destruídos." },
  { category: "esperanza_dificil", verse_reference: "Jeremías 29:11", verse_text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz y no de mal, para daros el fin que esperáis." },
  { category: "esperanza_dificil", verse_reference: "Santiago 1:2", verse_text: "Hermanos míos, tened por sumo gozo cuando cayereis en diversas tentaciones; sabiendo que la prueba de vuestra fe obra paciencia." },

  // ── REDENCIÓN ─────────────────────────────────────────────────────────
  { category: "redencion", verse_reference: "Colosenses 1:14", verse_text: "En quien tenemos redención por su sangre, el perdón de los pecados." },
  { category: "redencion", verse_reference: "Isaías 44:22", verse_text: "Yo desvanecí como nube tus transgresiones, y como niebla tus pecados: vuélvete á mí, porque yo te redimí." },
  { category: "redencion", verse_reference: "Efesios 1:7", verse_text: "En quien tenemos redención por su sangre, el perdón de los pecados según las riquezas de su gracia." },
  { category: "redencion", verse_reference: "Salmos 130:7", verse_text: "Espere Israel á Jehová: porque en Jehová hay misericordia, y abundante redención con él." },
  { category: "redencion", verse_reference: "Isaías 43:1", verse_text: "Ahora pues, así dice Jehová, Criador tuyo, oh Jacob, y Formador tuyo, oh Israel: No temas, porque yo te redimí; te puse nombre, mío eres tú." },
  { category: "redencion", verse_reference: "Romanos 3:24", verse_text: "Siendo justificados gratuitamente por su gracia, por la redención que es en Cristo Jesús." },
  { category: "redencion", verse_reference: "Gálatas 3:13", verse_text: "Cristo nos redimió de la maldición de la ley, hecho por nosotros maldición: porque está escrito: Maldito cualquiera que es colgado en palo." },

  // ── SANTIDAD ──────────────────────────────────────────────────────────
  { category: "santidad", verse_reference: "1 Pedro 1:15", verse_text: "Sino como aquel que os ha llamado es santo, sed también vosotros santos en toda vuestra manera de vivir." },
  { category: "santidad", verse_reference: "Levítico 11:44", verse_text: "Porque yo soy Jehová vuestro Dios: vosotros pues os santificaréis, y seréis santos, porque yo soy santo." },
  { category: "santidad", verse_reference: "Hebreos 12:14", verse_text: "Seguid la paz con todos, y la santidad, sin la cual nadie verá al Señor." },
  { category: "santidad", verse_reference: "Romanos 6:22", verse_text: "Mas ahora librados del pecado, y hechos siervos para Dios, tenéis por vuestro fruto la santificación, y por fin la vida eterna." },
  { category: "santidad", verse_reference: "1 Tesalonicenses 4:7", verse_text: "Porque no nos ha llamado Dios á impureza, sino á santificación." },
  { category: "santidad", verse_reference: "2 Corintios 7:1", verse_text: "Así que, amados, pues tenemos tales promesas, limpiémonos de toda inmundicia de carne y de espíritu, perfeccionando la santificación en el temor de Dios." },
  { category: "santidad", verse_reference: "Salmos 51:10", verse_text: "Crea en mí, oh Dios, un corazón limpio; y renueva un espíritu recto dentro de mí." },

  // ── SERVICIO ──────────────────────────────────────────────────────────
  { category: "servicio", verse_reference: "Marcos 10:45", verse_text: "Porque el Hijo del hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos." },
  { category: "servicio", verse_reference: "Gálatas 5:13", verse_text: "Porque vosotros, hermanos, á libertad fuisteis llamados; solamente que no uséis la libertad para ocasión de la carne, sino servíos por el amor los unos á los otros." },
  { category: "servicio", verse_reference: "1 Pedro 4:10", verse_text: "Cada uno según el don que ha recibido, minístrelo á los otros, como buenos dispensadores de las diferentes gracias de Dios." },
  { category: "servicio", verse_reference: "Mateo 25:40", verse_text: "Y respondiendo el Rey, les dirá: De cierto os digo que en cuanto lo hicisteis á uno de estos mis hermanos pequeños, á mí lo hicisteis." },
  { category: "servicio", verse_reference: "Efesios 6:7", verse_text: "Con benevolencia sirviendo, como al Señor y no á los hombres." },
  { category: "servicio", verse_reference: "Lucas 22:27", verse_text: "Porque ¿cuál es mayor, el que está á la mesa, ó el que sirve? ¿No es el que está á la mesa? Mas yo estoy entre vosotros como el que sirve." },
  { category: "servicio", verse_reference: "Josué 24:15", verse_text: "Y si mal os parece servir á Jehová, escogeos hoy á quien sirváis; pero yo y mi casa serviremos á Jehová." },

  // ── UNIDAD ────────────────────────────────────────────────────────────
  { category: "unidad", verse_reference: "Salmos 133:1", verse_text: "¡Mirad cuán bueno y cuán delicioso es habitar los hermanos en unión!" },
  { category: "unidad", verse_reference: "Efesios 4:3", verse_text: "Solícitos en guardar la unidad del Espíritu en el vínculo de la paz." },
  { category: "unidad", verse_reference: "Juan 17:21", verse_text: "Para que todos sean una cosa; como tú, oh Padre, en mí, y yo en ti, que también ellos sean una cosa en nosotros: para que el mundo crea que tú me enviaste." },
  { category: "unidad", verse_reference: "1 Corintios 1:10", verse_text: "Os ruego, pues, hermanos, por el nombre de nuestro Señor Jesucristo, que habléis todos una misma cosa, y que no haya entre vosotros disensiones, sino que estéis perfectamente juntos en una misma mente y en un mismo parecer." },
  { category: "unidad", verse_reference: "Colosenses 3:14", verse_text: "Y sobre todas estas cosas, el amor, que es el vínculo de la perfección." },
  { category: "unidad", verse_reference: "Filipenses 2:2", verse_text: "Henchid mi gozo, que tengáis un mismo sentir, teniendo un mismo amor, unidos de alma, sintiendo una misma cosa." },
  { category: "unidad", verse_reference: "Romanos 15:5", verse_text: "Y el Dios de la paciencia y de la consolación os dé que seáis de un mismo sentir los unos con los otros según Jesucristo." },

  // ── PERDÓN Y RECONCILIACIÓN ───────────────────────────────────────────
  { category: "perdon_reconciliacion", verse_reference: "Efesios 4:32", verse_text: "Sed pues benignos unos con otros, misericordiosos, perdonándoos unos á otros, como también Dios os perdonó á vosotros en Cristo." },
  { category: "perdon_reconciliacion", verse_reference: "Mateo 5:24", verse_text: "Deja allí tu presente delante del altar, y ve, reconcíliate primero con tu hermano, y entonces ven y presenta tu presente." },
  { category: "perdon_reconciliacion", verse_reference: "Colosenses 3:13", verse_text: "Sufriéndoos los unos á los otros, y perdonándoos los unos á los otros, si alguno tuviere queja contra otro: de la manera que Cristo os perdonó, así también hacedlo vosotros." },
  { category: "perdon_reconciliacion", verse_reference: "Mateo 18:22", verse_text: "Jesús le dijo: No te digo hasta siete, sino hasta setenta veces siete." },
  { category: "perdon_reconciliacion", verse_reference: "2 Corintios 5:18", verse_text: "Y todo esto es de Dios, que nos reconcilió consigo mismo por Cristo, y nos dió el ministerio de la reconciliación." },
  { category: "perdon_reconciliacion", verse_reference: "Marcos 11:25", verse_text: "Y cuando estéis orando, perdonad, si tuviéreis algo contra alguno; para que también vuestro Padre que está en los cielos, os perdone vuestras ofensas." },
  { category: "perdon_reconciliacion", verse_reference: "Romanos 5:10", verse_text: "Porque si siendo enemigos, fuimos reconciliados con Dios por la muerte de su Hijo; mucho más, estando reconciliados, seremos salvos por su vida." },

  // ── CONFIANZA EN DIOS ─────────────────────────────────────────────────
  { category: "confianza_dios", verse_reference: "Salmos 37:5", verse_text: "Encomienda á Jehová tu camino, y espera en él; y él hará." },
  { category: "confianza_dios", verse_reference: "Proverbios 3:5", verse_text: "Confía en Jehová de todo tu corazón, y no te apoyes en tu propia prudencia." },
  { category: "confianza_dios", verse_reference: "Salmos 62:8", verse_text: "Esperad en él en todo tiempo, oh pueblos: derramad delante de él vuestro corazón: Dios es nuestro refugio." },
  { category: "confianza_dios", verse_reference: "Jeremías 17:7", verse_text: "Bendito el varón que confía en Jehová, y cuya confianza es Jehová." },
  { category: "confianza_dios", verse_reference: "Isaías 26:4", verse_text: "Confiad en Jehová para siempre; porque en Jehová el Señor está la fortaleza de los siglos." },
  { category: "confianza_dios", verse_reference: "Salmos 56:3", verse_text: "El día que temo, yo en ti confío." },
  { category: "confianza_dios", verse_reference: "Nahum 1:7", verse_text: "Jehová es bueno, fortaleza en el día de la angustia; y conoce á los que en él esperan." },
  { category: "confianza_dios", verse_reference: "Salmos 9:10", verse_text: "Y en ti confiarán los que conocen tu nombre; por cuanto no desamparaste á los que te buscaron, oh Jehová." },
];

async function seed() {
  console.log(`Seeding ${NEW_VERSES.length} verses for 32 new categories...`);

  let inserted = 0;
  let skipped = 0;

  for (const verse of NEW_VERSES) {
    const existing = await db
      .select({ id: versesTable.id })
      .from(versesTable)
      .where(
        sql`${versesTable.verseReference} = ${verse.verse_reference}
         AND ${versesTable.category} = ${verse.category}`
      );

    if (existing.length > 0) {
      skipped++;
      continue;
    }

    await db.insert(versesTable).values({
      category: verse.category,
      verseReference: verse.verse_reference,
      verseText: verse.verse_text,
    });
    inserted++;
  }

  console.log(`Done: ${inserted} inserted, ${skipped} skipped (already existed).`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
