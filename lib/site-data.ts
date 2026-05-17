import { Accessibility, Baby, BookOpen, Brain, BriefcaseBusiness, CalendarDays, Code2, FileText, Handshake, HeartPulse, Home, MessagesSquare, ShieldCheck, Users, Wrench } from "lucide-react";

export const site = {
  publicName: "Leonoa Lab",
  legalName: "ASOCIACIÓN LEONOA LABORATORIO DE TECNOLOGÍA SOCIAL",
  domain: "leonoalab.org",
  email: "hola@leonoalab.org",
  location: "Valdemoro, Madrid",
  baseline: "ONG · Laboratorio de tecnología social",
  claim: "Proyectos digitales para mejorar calidad de vida.",
};

export const navItems = [
  { label: "Qué hacemos", href: "/#que-hacemos" },
  { label: "Impacto", href: "/#impacto" },
  { label: "Cómo funcionamos", href: "/#funcionamos" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Método", href: "/#metodo" },
  { label: "Posts", href: "/#posts" },
  { label: "Contacto", href: "/#contacto" },
];

export const services = [
  {
    title: "Proyectos sociales",
    text: "Diseñamos iniciativas con entidades para mejorar autonomía, comunicación, acompañamiento, organización o acceso a recursos. El proyecto social va antes que la herramienta.",
    icon: HeartPulse,
  },
  {
    title: "Soluciones digitales",
    text: "Aplicaciones, paneles, automatizaciones, prototipos, documentación y herramientas que nacen de una necesidad social concreta.",
    icon: Code2,
  },
  {
    title: "Formación y talleres",
    text: "Charlas, cursos, jornadas y sesiones prácticas para entidades, familias, profesionales, alumnado y personas voluntarias.",
    icon: BookOpen,
  },
  {
    title: "Red de colaboración",
    text: "Conectamos asociaciones, centros educativos, profesionales, empresas y personas que quieren aportar de forma útil y transparente.",
    icon: Handshake,
  },
];


export const operatingModel = [
  {
    title: "Proyectos con entidades",
    text: "Trabajamos con asociaciones, fundaciones, centros y colectivos que conocen una necesidad real. El resultado puede ser una herramienta, una formación, una guía o un proceso mejor organizado.",
    icon: Handshake,
  },
  {
    title: "Formaciones y talleres",
    text: "Organizamos charlas, cursos y talleres sobre tecnología útil, accesibilidad, IA, programación, producto digital, automatización o buenas prácticas para entidades y equipos.",
    icon: BookOpen,
  },
  {
    title: "Eventos y comunidad",
    text: "Impulsamos encuentros, jornadas, retos, laboratorios de ideas y espacios de colaboración para conectar necesidades sociales con talento técnico y educativo.",
    icon: CalendarDays,
  },
  {
    title: "Apoyo y sostenimiento",
    text: "La actividad se puede sostener mediante convenios, colaboraciones, donaciones, patrocinios responsables, cuotas, voluntariado y aportaciones vinculadas a proyectos concretos.",
    icon: FileText,
  },
];

export const projectTracks = [
  {
    title: "Autonomía y vida diaria",
    label: "Calidad de vida",
    text: "Herramientas para recordar rutinas, comunicar necesidades, organizar tareas, anticipar actividades o facilitar apoyos cotidianos.",
    icon: Home,
  },
  {
    title: "Comunicación y accesibilidad",
    label: "Inclusión",
    text: "Prototipos y recursos para mejorar comunicación, comprensión, acceso a información y participación en entornos educativos o sociales.",
    icon: Accessibility,
  },
  {
    title: "Gestión para entidades",
    label: "ONG",
    text: "Soluciones pequeñas para seguimiento de casos, coordinación interna, formularios, documentación, voluntariado o comunicación con familias.",
    icon: Wrench,
  },
];

export const timeline = [
  ["01", "Escuchar", "Entender la necesidad social, las personas implicadas y el contexto donde aparece el problema."],
  ["02", "Aterrizar", "Definir qué cambio real queremos conseguir: ahorrar tiempo, ganar autonomía, mejorar comunicación o reducir barreras."],
  ["03", "Construir", "Crear prototipos, herramientas, materiales o formaciones con alcance claro y utilidad comprobable."],
  ["04", "Validar", "Probar con usuarios, familias, profesionales o entidades antes de dar por buena una solución."],
  ["05", "Sostener", "Documentar, formar y dejar un plan mínimo para que el proyecto pueda seguir vivo."],
] as const;

export const principles = [
  "Somos una ONG: construimos tecnología con propósito, pero también formación, comunidad y acompañamiento.",
  "Cada proyecto debe tener una necesidad real, una entidad o un colectivo detrás.",
  "Privacidad, accesibilidad y protección de personas vulnerables desde el principio.",
  "Soluciones, materiales y documentación mantenibles para no dejar iniciativas abandonadas.",
  "Transparencia en colaboraciones, recursos, decisiones y resultados.",
];

export const collaborationPaths = [
  {
    title: "Entidad social",
    text: "Comparte una necesidad real de tu organización, equipo, usuarios, familias o comunidad.",
    icon: ShieldCheck,
  },
  {
    title: "Profesional",
    text: "Aporta diseño, código, producto, datos, accesibilidad, formación, comunicación o acompañamiento.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Centro educativo",
    text: "Conecta aprendizaje y proyectos reales mediante talleres, retos, mentorías o aprendizaje-servicio.",
    icon: BookOpen,
  },
  {
    title: "Apoyo y donaciones",
    text: "Ayuda con recursos, difusión, contactos, espacios, financiación o infraestructura para sostener proyectos.",
    icon: Handshake,
  },
];

export const impactAreas = [
  {
    title: "Personas con necesidades de apoyo",
    text: "Recursos digitales para comunicación, rutinas, anticipación, autonomía, accesibilidad cognitiva o apoyo a familias y profesionales.",
    icon: Accessibility,
  },
  {
    title: "Infancia, jóvenes y educación",
    text: "Proyectos y talleres que conectan aprendizaje tecnológico con necesidades reales de centros, alumnado y comunidad educativa.",
    icon: Baby,
  },
  {
    title: "Entidades sociales pequeñas",
    text: "Herramientas sencillas para reducir carga administrativa, ordenar información, coordinar voluntariado o mejorar seguimiento.",
    icon: Users,
  },
  {
    title: "Salud, bienestar y acompañamiento",
    text: "Prototipos para registro de hábitos, seguimiento no clínico, apoyo cotidiano, orientación y mejora de procesos de acompañamiento.",
    icon: Brain,
  },
];
