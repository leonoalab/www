"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Code2, ExternalLink, Mail, MapPin, Newspaper, Sparkles } from "lucide-react";
import { collaborationPaths, impactAreas, operatingModel, principles, projectTracks, services, site, timeline } from "@/lib/site-data";
import { posts } from "@/content/posts";
import { Container, SectionLabel } from "@/components/ui";

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "short", year: "numeric" }).format(new Date(dateString));
}

const serviceStyles = [
  { icon: "bg-bluebolt/10 text-bluebolt", hover: "group-hover:bg-bluebolt group-hover:text-white", ring: "hover:border-bluebolt/25" },
  { icon: "bg-coral/10 text-coral", hover: "group-hover:bg-coral group-hover:text-white", ring: "hover:border-coral/25" },
  { icon: "bg-violetlab/10 text-violetlab", hover: "group-hover:bg-violetlab group-hover:text-white", ring: "hover:border-violetlab/25" },
  { icon: "bg-aqua/10 text-aqua", hover: "group-hover:bg-aqua group-hover:text-white", ring: "hover:border-aqua/25" },
];

const projectStyles = [
  { icon: "bg-bluebolt/10 text-bluebolt", chip: "bg-bluebolt/10 text-bluebolt", corner: "bg-bluebolt/10" },
  { icon: "bg-coral/10 text-coral", chip: "bg-coral/10 text-coral", corner: "bg-coral/10" },
  { icon: "bg-aqua/10 text-aqua", chip: "bg-aqua/10 text-aqua", corner: "bg-citrus/20" },
];

export function ServicesSection() {
  return (
    <section id="que-hacemos" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>Qué hacemos</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">Una ONG que convierte necesidades sociales en proyectos concretos.</h2>
          <p className="mt-5 text-lg leading-9 text-slate-600">No partimos de la tecnología, sino de personas, entidades y problemas cotidianos. A veces la respuesta será software; otras, formación, documentación, acompañamiento, automatización o simplemente ordenar un proceso.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const style = serviceStyles[index % serviceStyles.length];
            return (
              <article key={service.title} className={`group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft ${style.ring}`}>
                <div className={`grid h-12 w-12 place-items-center rounded-2xl transition ${style.icon} ${style.hover}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}


export function ImpactSection() {
  return (
    <section id="impacto" className="bg-cloud py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionLabel>Impacto social</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">No somos una empresa de software. Somos una ONG que construye tecnología con propósito.</h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              El foco está en la calidad de vida: autonomía, comunicación, acceso a información, reducción de carga para entidades y herramientas que permitan acompañar mejor a personas. El software es una parte del trabajo, pero no la única.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              const style = serviceStyles[index % serviceStyles.length];
              return (
                <article key={area.title} className="rounded-[1.75rem] border border-white bg-white p-6 shadow-soft">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${style.icon}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{area.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}


export function OperatingSection() {
  return (
    <section id="funcionamos" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionLabel>Cómo funcionamos</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">La asociación se sostiene combinando proyectos, formación y colaboración.</h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Leonoa Lab no se limita a crear aplicaciones. También organiza talleres, charlas, eventos, acompaña a entidades y documenta aprendizajes. Algunas iniciativas pueden ser gratuitas para las personas beneficiarias cuando cuentan con apoyo; otras se articulan mediante convenios, colaboraciones, formaciones o aportaciones que ayudan a sostener la actividad de la ONG.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-500">
              La idea es sencilla: los recursos que entren en la asociación vuelven a proyectos, materiales, infraestructura, formación y acompañamiento.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {operatingModel.map((item, index) => {
              const Icon = item.icon;
              const style = serviceStyles[index % serviceStyles.length];
              return (
                <article key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${style.icon}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-cloud py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>Tipos de proyecto</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">Proyectos sociales, aterrizados y sostenibles.</h2>
          </div>
          <p className="max-w-xl text-lg leading-9 text-slate-600">Trabajamos en iniciativas que puedan mejorar autonomía, comunicación, organización, acceso a información o calidad de vida. Preferimos impacto real antes que complejidad técnica.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projectTracks.map((project, index) => {
            const Icon = project.icon;
            const style = projectStyles[index % projectStyles.length];
            return (
              <article key={project.title} className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-7 shadow-soft">
                <div className={`absolute right-0 top-0 h-32 w-32 rounded-bl-[5rem] ${style.corner}`} />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className={`grid h-14 w-14 place-items-center rounded-2xl ${style.icon}`}><Icon className="h-7 w-7" /></div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${style.chip}`}>{project.label}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-ink">{project.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-slate-600">{project.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function MethodSection() {
  const colors = ["bg-bluebolt text-white", "bg-aqua text-white", "bg-violetlab text-white", "bg-coral text-white", "bg-amberline text-white"];
  return (
    <section id="metodo" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel>Método de trabajo</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">Antes de construir, entendemos a quién afecta.</h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">Una ONG tecnológica no debería diseñar desde lejos. Escuchamos a entidades, usuarios, familias y profesionales para que cada proyecto tenga sentido en la vida diaria.</p>
          </div>
          <div className="grid gap-4">
            {timeline.map(([number, title, text], index) => (
              <div key={number} className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[72px_1fr]">
                <div className={`grid h-14 w-14 place-items-center rounded-2xl text-lg font-semibold shadow-sm ${colors[index % colors.length]}`}>{number}</div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PrinciplesSection() {
  const principleStyles = [
    "border-bluebolt/20 bg-bluebolt/5",
    "border-aqua/25 bg-aqua/5",
    "border-coral/25 bg-coral/5",
    "border-violetlab/20 bg-violetlab/5",
    "border-citrus/40 bg-citrus/10",
  ];
  const dotStyles = ["bg-bluebolt", "bg-aqua", "bg-coral", "bg-violetlab", "bg-citrus"];

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionLabel>Criterios</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">Lo que significa ser ONG.</h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              La asociación existe para generar utilidad social. El código, los talleres y los eventos son herramientas; el centro son las personas, la transparencia y la continuidad de los proyectos.
            </p>
            <div className="mt-7 rounded-[1.5rem] border border-bluebolt/15 bg-cloud p-5 text-sm leading-7 text-slate-600">
              No buscamos proyectos llamativos: buscamos iniciativas que puedan mantenerse, explicarse y mejorar algo concreto en la vida de alguien.
            </div>
          </div>
          <div className="grid gap-3">
            {principles.map((principle, index) => (
              <div key={principle} className={`flex items-start gap-4 rounded-2xl border p-5 ${principleStyles[index % principleStyles.length]}`}>
                <span className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${dotStyles[index % dotStyles.length]}`} />
                <p className="text-base font-medium leading-8 text-slate-700">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PostsSection() {
  return (
    <section id="posts" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel><Newspaper className="h-4 w-4" /> Posts y documentación</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">Un espacio para proyectos, guías y aprendizajes.</h2>
          <p className="mt-5 text-lg leading-9 text-slate-600">Aquí podemos publicar avances de proyectos, guías para entidades, memorias de actividad, talleres realizados y aprendizajes. Los posts viven en <code className="rounded bg-bluebolt/10 px-2 py-1 text-sm font-medium text-bluebolt">content/posts.ts</code>.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.slug} className="flex min-h-[300px] flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold text-slate-500">
                <span>{post.category}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-ink">{post.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-8 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => <span key={tag} className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600">{tag}</span>)}
              </div>
              <Link href={`/posts/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bluebolt">Leer post <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CollaborationSection() {
  const questionStyles = [
    "border-bluebolt/20 bg-bluebolt/5",
    "border-aqua/25 bg-aqua/5",
    "border-coral/25 bg-coral/5",
    "border-violetlab/20 bg-violetlab/5",
    "border-citrus/40 bg-citrus/10",
  ];
  const questions = [
    "¿Qué mejora concreta buscamos en la vida de las personas?",
    "¿Quién conoce de verdad el contexto y participará en la validación?",
    "¿Qué barrera queremos reducir: tiempo, acceso, comunicación, autonomía u organización?",
    "¿Quién podrá mantener o usar la solución cuando la entreguemos?",
    "¿Qué datos personales o situaciones vulnerables debemos proteger?",
  ];

  return (
    <section className="bg-cloud py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <SectionLabel>Cómo colaborar</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">Una red para construir proyectos con utilidad social.</h2>
              <p className="mt-5 text-lg leading-9 text-slate-600">Como ONG, necesitamos entidades que conozcan los problemas, profesionales que aporten oficio, centros educativos que quieran aprender haciendo y apoyos que ayuden a sostener los proyectos.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {collaborationPaths.map((path, index) => {
                  const Icon = path.icon;
                  const style = serviceStyles[index % serviceStyles.length];
                  return (
                    <div key={path.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className={`grid h-10 w-10 place-items-center rounded-xl ${style.icon}`}><Icon className="h-5 w-5" /></div>
                      <h3 className="mt-4 font-semibold text-ink">{path.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{path.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border-t border-slate-200 bg-white p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-coral/20 bg-coral/10 px-4 py-2 text-sm font-semibold text-coral">
                  Antes de empezar
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-ink">Preguntas que ordenan cada proyecto.</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Sirven para evitar soluciones bonitas pero inútiles. Si estas preguntas tienen respuesta, el proyecto tiene más posibilidades de sostenerse.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                {questions.map((question, index) => (
                  <div key={question} className={`rounded-2xl border p-4 text-sm font-medium leading-7 text-slate-700 ${questionStyles[index % questionStyles.length]}`}>{question}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contacto" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">Cuéntanos una necesidad social concreta.</h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">Escríbenos si representas una entidad social, una familia, un centro educativo, un equipo profesional o una iniciativa que necesita apoyo tecnológico, formación o acompañamiento.</p>
            <div className="mt-8 space-y-4">
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-2xl border border-bluebolt/20 p-4 font-semibold text-ink transition hover:border-bluebolt hover:bg-bluebolt/5"><Mail className="h-5 w-5 text-bluebolt" /> {site.email}</a>
              <div className="flex items-center gap-3 rounded-2xl border border-coral/20 p-4 font-semibold text-ink"><MapPin className="h-5 w-5 text-coral" /> {site.location}</div>
            </div>
          </div>
          <form className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">Nombre<input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-bluebolt" placeholder="Tu nombre" /></label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">Email<input type="email" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-bluebolt" placeholder="tu@email.com" /></label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">Tipo de contacto<select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-bluebolt"><option>Proponer necesidad social</option><option>Solicitar formación o charla</option><option>Colaborar como profesional</option><option>Colaborar como entidad</option><option>Otra consulta</option></select></label>
            <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">Mensaje<textarea className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-bluebolt" placeholder="Describe a quién afecta, qué ocurre ahora y qué mejora os gustaría conseguir..." /></label>
            <button type="button" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-bluebolt px-6 py-4 text-sm font-medium text-white shadow-color transition hover:bg-blue-600">Enviar necesidad <ArrowRight className="h-4 w-4" /></button>
            <p className="mt-4 text-xs leading-5 text-slate-500">Formulario visual. Para producción, conéctalo a Resend, Formspree, Supabase, Airtable, un backend propio o cualquier servicio de formularios.</p>
          </form>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-bluebolt/10 bg-white py-10">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-bluebolt text-white shadow-color"><Code2 className="h-5 w-5" /></div>
              <div><div className="font-semibold text-ink">{site.publicName}</div><div className="text-sm text-slate-500">{site.legalName}</div></div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">ONG orientada a proyectos sociales, formación tecnológica y soluciones digitales para mejorar calidad de vida, autonomía, accesibilidad y organización de entidades.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-bluebolt/20 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-bluebolt hover:text-bluebolt"><Code2 className="h-4 w-4" /> Repositorios</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-coral/20 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-coral hover:text-coral">Transparencia <ExternalLink className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row"><span>© 2026 {site.publicName}. Todos los derechos reservados.</span><span>{site.domain} · {site.location}</span></div>
      </Container>
    </footer>
  );
}
