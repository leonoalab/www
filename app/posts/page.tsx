import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { Header } from "@/components/header";
import { Container, SectionLabel } from "@/components/ui";
import { getAllPosts } from "@/lib/posts";
import {Footer} from "@/components/sections";

export const metadata = {
    title: "Posts · LeoNoa Lab",
    description:
        "Posts, guías, documentación y aprendizajes de LeoNoa Lab sobre tecnología social.",
};

export default function PostsPage() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-white text-ink">
            <Header />

            <section className="relative overflow-hidden border-b border-bluebolt/10 bg-gradient-to-b from-bluebolt/10 via-white to-white py-16 sm:py-20">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

                <Container>
                    <div className="relative max-w-4xl">
                        <SectionLabel>
                            <Newspaper className="h-4 w-4" />
                            Posts y documentación
                        </SectionLabel>

                        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
                            Proyectos, guías y aprendizajes.
                        </h1>

                        <p className="mt-6 text-lg leading-9 text-slate-600">
                            Un espacio donde compartir reflexiones, avances de proyectos,
                            documentación útil, talleres y aprendizajes relacionados con
                            tecnología social.
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-16 sm:py-20">
                <Container>
                    {posts.length === 0 ? (
                        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8">
                            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink">
                                Todavía no hay posts publicados.
                            </h2>
                            <p className="mt-3 text-base leading-7 text-slate-600">
                                Cuando añadamos artículos en Markdown, aparecerán aquí automáticamente.
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="flex min-h-[320px] flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-bluebolt/30 hover:shadow-soft"
                                >
                                    <div className="flex items-center justify-between gap-4 text-xs font-semibold text-slate-500">
                    <span className="rounded-full bg-bluebolt/10 px-3 py-1 text-bluebolt">
                      {post.category}
                    </span>
                                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                                    </div>

                                    <h2 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-ink">
                                        {post.title}
                                    </h2>

                                    <p className="mt-4 flex-1 text-sm leading-8 text-slate-600">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/posts/${post.slug}`}
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bluebolt"
                                    >
                                        Leer post
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </Container>
            </section>
            <Footer/>
        </main>
    );
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
}