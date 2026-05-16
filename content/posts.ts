export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "tecnologia-desde-necesidades-reales",
    title: "De una necesidad social a un proyecto útil",
    date: "2026-05-14",
    category: "Reflexión",
    excerpt:
      "La tecnología tiene sentido cuando mejora algo concreto en la vida diaria de una persona, una familia o una entidad.",
    tags: ["ONG", "Tecnología social", "Calidad de vida"],
    content: [
      "En Leonoa Lab partimos de una idea sencilla: somos una ONG, no una fábrica de software. La tecnología aparece cuando puede mejorar autonomía, comunicación, organización, acceso a información o calidad de vida.",
      "Por eso antes de construir nos interesa escuchar, acotar y entender. Quién vive el problema, quién acompaña a esas personas, qué barreras existen y qué tendría que cambiar para que el proyecto merezca la pena.",
      "La tecnología social no debería medirse por lo sofisticada que parece, sino por la mejora real que produce cuando llega al contexto donde se necesita.",
    ],
  },
  {
    slug: "como-colaborar-con-leonoa-lab",
    title: "Cómo proponer una necesidad a Leonoa Lab",
    date: "2026-05-14",
    category: "Colaboración",
    excerpt:
      "Entidades sociales, familias, docentes, profesionales y voluntariado pueden participar si existe una necesidad concreta y un contexto real.",
    tags: ["Colaboración", "Entidades", "Voluntariado"],
    content: [
      "La forma más sencilla de empezar es describir una necesidad concreta: qué ocurre, a quién afecta, cómo se resuelve ahora, qué limitaciones hay y qué mejora sería valiosa.",
      "A partir de ahí podemos valorar si tiene sentido una herramienta digital, una formación, una automatización, una documentación mejor, una jornada de trabajo o simplemente una orientación técnica inicial.",
      "También pueden colaborar profesionales técnicos, diseñadores, docentes, estudiantes, entidades y empresas que quieran aportar recursos o conocimiento a proyectos con utilidad social real.",
    ],
  },
  {
    slug: "del-aula-al-producto-real",
    title: "Del aula al producto real",
    date: "2026-05-14",
    category: "Formación",
    excerpt:
      "Aprender tecnología cambia cuando el ejercicio deja de ser ficticio y se convierte en una respuesta a una necesidad social concreta.",
    tags: ["Formación", "Software", "Aprendizaje"],
    content: [
      "La formación técnica suele abusar de ejercicios cerrados. Son útiles para practicar, pero no enseñan del todo qué significa entregar algo a usuarios reales.",
      "Cuando un proyecto tiene contexto, restricciones y consecuencias, aparecen aprendizajes más profundos: documentación, mantenibilidad, comunicación, gestión del alcance, seguridad, privacidad y trabajo en equipo.",
      "Leonoa Lab quiere ser un puente entre aprendizaje tecnológico, entidades sociales y proyectos que tengan sentido fuera del aula.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
