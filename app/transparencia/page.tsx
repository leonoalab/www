import {Container, SectionLabel} from "@/components/ui";
import {site} from "@/lib/site-data";
import {Header} from "@/components/header";
export default function Transparencia() {
    return (
        <main className="min-h-screen bg-white text-ink">
            <Header />
            <section
                className="relative overflow-hidden border-b border-bluebolt/10 bg-gradient-to-b from-bluebolt/5 via-white to-white py-20 sm:py-24">
                <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"/>

                <Container>
                    <div className="relative max-w-4xl">
                        <SectionLabel>Transparencia</SectionLabel>

                        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
                            Información institucional y compromiso de transparencia.
                        </h1>

                        <p className="mt-6 text-lg leading-9 text-slate-600">
                            En Leonoa Lab queremos construir una entidad clara, honesta y abierta.
                            Esta página recogerá progresivamente la información institucional,
                            económica y organizativa de la asociación.
                        </p>

                        <div className="mt-8 rounded-[1.75rem] border border-coral/20 bg-coral/5 p-6">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
                                Estado actual
                            </p>
                            <p className="mt-3 text-base leading-7 text-slate-700">
                                Leonoa Lab está en proceso de constitución como asociación sin ánimo
                                de lucro. A medida que se formalicen los trámites, iremos publicando
                                aquí la documentación relevante, los proyectos activos, las memorias
                                de actividad y la información económica disponible.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 sm:py-20">
                <Container>
                    <div className="grid gap-6 md:grid-cols-2">
                        <TransparencyCard
                            title="Datos de la entidad"
                            description="Información básica sobre Leonoa Lab, denominación legal, domicilio social, ámbito de actuación y datos de contacto."
                            status="Pendiente de constitución formal"
                        />

                        <TransparencyCard
                            title="Estatutos"
                            description="Documento que recogerá los fines de la asociación, normas internas, órganos de gobierno, derechos y deberes de las personas asociadas."
                            status="Pendiente de publicación"
                        />

                        <TransparencyCard
                            title="Órgano de gobierno"
                            description="Composición de la junta directiva o equipo responsable, cargos, funciones y periodo de vigencia."
                            status="Pendiente de publicación"
                        />

                        <TransparencyCard
                            title="Memoria de actividades"
                            description="Resumen anual de proyectos realizados, entidades colaboradoras, personas beneficiarias, formaciones y acciones desarrolladas."
                            status="Pendiente de actividad anual"
                        />

                        <TransparencyCard
                            title="Información económica"
                            description="Resumen de ingresos, gastos, donaciones, subvenciones, cuotas, colaboraciones y destino de los recursos."
                            status="Pendiente de primer ejercicio"
                        />

                        <TransparencyCard
                            title="Convenios y colaboraciones"
                            description="Relación de entidades sociales, educativas, profesionales o tecnológicas con las que Leonoa Lab colabore."
                            status="Pendiente de publicación"
                        />
                    </div>
                </Container>
            </section>

            <section className="bg-slate-50 py-16 sm:py-20">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <SectionLabel>Compromisos</SectionLabel>

                            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
                                Cómo entendemos la transparencia.
                            </h2>

                            <p className="mt-5 text-lg leading-9 text-slate-600">
                                La transparencia no es solo publicar documentos. Para nosotros implica
                                explicar con claridad qué hacemos, por qué lo hacemos, con quién
                                colaboramos y cómo se utilizan los recursos que recibamos.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <CommitmentItem
                                title="Claridad"
                                description="Publicaremos la información de forma comprensible, evitando lenguaje innecesariamente técnico o administrativo."
                            />

                            <CommitmentItem
                                title="Trazabilidad"
                                description="Intentaremos que cada proyecto tenga una explicación clara de su objetivo, destinatarios, recursos empleados y resultados."
                            />

                            <CommitmentItem
                                title="Uso responsable de recursos"
                                description="Los recursos económicos, tecnológicos y humanos deberán estar alineados con los fines sociales de la asociación."
                            />

                            <CommitmentItem
                                title="Actualización progresiva"
                                description="Esta página se irá completando conforme Leonoa Lab avance en su constitución y actividad real."
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 sm:py-20">
                <Container>
                    <div className="rounded-[2rem] border border-bluebolt/10 bg-white p-8 shadow-soft sm:p-10">
                        <div className="max-w-3xl">
                            <SectionLabel>Solicitud de información</SectionLabel>

                            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink">
                                ¿Necesitas consultar algo?
                            </h2>

                            <p className="mt-5 text-base leading-8 text-slate-600">
                                Mientras completamos esta sección, cualquier persona, entidad o
                                colaborador puede solicitar información adicional escribiendo a nuestro
                                correo de contacto.
                            </p>

                            <a
                                href={`mailto:${site.email}`}
                                className="mt-7 inline-flex rounded-full bg-bluebolt px-6 py-4 text-sm font-medium text-white shadow-color transition hover:bg-blue-600"
                            >
                                Escribir a {site.email}
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}

function TransparencyCard({
                              title,
                              description,
                              status,
                          }: {
    title: string;
    description: string;
    status: string;
}) {
    return (
        <article
            className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-bluebolt/30 hover:shadow-soft">
            <div className="flex min-h-full flex-col">
                <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink">
                    {title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {description}
                </p>

                <div
                    className="mt-5 inline-flex w-fit rounded-full border border-coral/20 bg-coral/5 px-3 py-1 text-xs font-semibold text-coral">
                    {status}
                </div>
            </div>
        </article>
    );
}

function CommitmentItem({
                            title,
                            description,
                        }: {
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
        </div>
    );
}