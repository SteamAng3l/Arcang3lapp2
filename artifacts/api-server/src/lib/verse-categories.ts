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
  },
  {
    name: "miedo",
    label: "Miedo",
    keywords: ["miedo", "temor", "terror", "inseguridad", "asustado", "asustada", "temo", "atemorizado"],
  },
  {
    name: "tristeza",
    label: "Tristeza",
    keywords: ["triste", "tristeza", "dolor", "llanto", "depresion", "depresión", "desanimo", "desánimo", "llorando", "pena"],
  },
  {
    name: "soledad",
    label: "Soledad",
    keywords: ["solo", "sola", "soledad", "abandono", "rechazo", "abandonado", "abandonada", "nadie"],
  },
  {
    name: "perdon",
    label: "Perdón",
    keywords: ["perdon", "perdón", "culpa", "pecado", "fallé", "falle", "arrepentimiento", "vergüenza", "verguenza", "culpable"],
  },
  {
    name: "esperanza",
    label: "Esperanza",
    keywords: ["esperanza", "futuro", "sin salida", "desesperado", "desesperada", "rendirme", "rendirse", "no puedo más", "no puedo mas"],
  },
  {
    name: "fortaleza",
    label: "Fortaleza",
    keywords: ["débil", "debil", "cansado", "cansada", "fuerza", "fortaleza", "batalla", "agotado", "agotada", "cansancio"],
  },
  {
    name: "sabiduria",
    label: "Sabiduría",
    keywords: ["decision", "decisión", "guia", "guía", "sabiduria", "sabiduría", "camino", "qué hacer", "que hacer", "dirección", "direccion"],
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

export const categoryMessages: Record<string, string> = {
  ansiedad: "Dios invita a dejar la ansiedad en sus manos. Respira, ora y descansa en su cuidado.",
  miedo: "Cuando hay miedo, la Biblia recuerda que Dios acompaña y fortalece.",
  tristeza: "En medio de la tristeza, Dios permanece cerca del corazón quebrantado.",
  soledad: "Aunque te sientas solo o sola, Dios no abandona a quienes le buscan.",
  perdon: "Hay perdón y restauración para quien se acerca a Dios con sinceridad.",
  esperanza: "Aun cuando parece que no hay salida, Dios sigue siendo fuente de esperanza.",
  fortaleza: "Cuando tus fuerzas se acaban, Dios puede sostenerte y renovarte.",
  sabiduria: "Dios puede dar dirección y sabiduría cuando no sabes qué hacer.",
};
