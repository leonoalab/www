import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Tag, Clock, Mail } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { Header } from "@/components/header";
import { Container } from "@/components/ui";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { site } from "@/lib/site-data";
import {Footer} from "@/components/sections";

export function generateStaticParams() {
    return getAllPostSlugs();
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return {};

    return {
        title: `${post.title} · Leonoa Lab`,
        description: post.excerpt,
    };
}

export default async function PostPage({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    return (
        <main className="min-h-screen bg-slate-50 text-ink">
            <Header />

            <article>
                <section className="relative overflow-hidden border-b border-bluebolt/10 bg-gradient-to-b from-bluebolt/10 via-white to-slate-50 py-10 sm:py-14">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

                    <Container>
                        <div className="mx-auto max-w-5xl">
                            <Link
                                href="/#posts"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur transition hover:border-bluebolt/30 hover:text-bluebolt"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Volver a posts
                            </Link>

                            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
        <span className="inline-flex items-center gap-2 rounded-full bg-bluebolt/10 px-3 py-1 text-bluebolt">
          <Tag className="h-3.5 w-3.5" />
            {post.category}
        </span>

                                <span className="inline-flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-coral" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </span>

                                <span className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4 text-slate-400" />
                                    {getReadingTime(post.content)}
        </span>
                            </div>

                            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl sm:leading-[1.02]">
                                {post.title}
                            </h1>

                            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                                {post.excerpt}
                            </p>

                            <div className="mt-7 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm"
                                    >
            {tag}
          </span>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {post.cover && (
                    <Container>
                        <div className="relative z-10 -mt-6 sm:-mt-8">
                            <img
                                src={post.cover}
                                alt=""
                                className="max-h-[460px] w-full rounded-[2rem] border border-white object-cover shadow-soft"
                            />
                        </div>
                    </Container>
                )}

                <section className="py-8 sm:py-10">
                    <Container>
                        <div className="mx-auto max-w-5xl">
                            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
                                <div className="mb-10 rounded-[1.5rem] border border-bluebolt/10 bg-bluebolt/5 p-5 sm:p-6">
                                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bluebolt">
                                        Leonoa Lab
                                    </p>
                                    <p className="mt-3 text-base leading-7 text-slate-700">
                                        Publicamos reflexiones sobre tecnología social, formación,
                                        accesibilidad y proyectos digitales nacidos de necesidades reales.
                                    </p>
                                </div>

                                <MarkdownContent content={post.content} />

                                <div className="mt-14 rounded-[1.75rem] border border-coral/20 bg-coral/5 p-6">
                                    <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink">
                                        ¿Tienes una necesidad parecida?
                                    </h2>

                                    <p className="mt-3 text-base leading-7 text-slate-700">
                                        Si representas una entidad social, un centro educativo, una familia
                                        o un equipo profesional, puedes escribirnos y contarnos el contexto.
                                    </p>

                                    <a
                                        href={`mailto:${site.email}`}
                                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-bluebolt px-5 py-3 text-sm font-medium text-white shadow-color transition hover:bg-blue-600"
                                    >
                                        <Mail className="h-4 w-4" />
                                        Contactar con Leonoa Lab
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </article>
            <Footer/>g
        </main>
    );
}

function MarkdownContent({ content }: { content: string }) {
    return (
        <div className="space-y-7">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    h1: ({ children }) => (
                        <h1 className="mt-14 text-4xl font-semibold tracking-[-0.035em] text-ink">
                            {children}
                        </h1>
                    ),

                    h2: ({ children }) => (
                        <h2 className="mt-14 border-t border-slate-200 pt-10 text-3xl font-semibold tracking-[-0.03em] text-ink">
                            {children}
                        </h2>
                    ),

                    h3: ({ children }) => (
                        <h3 className="mt-10 text-2xl font-semibold tracking-[-0.02em] text-ink">
                            {children}
                        </h3>
                    ),

                    p: ({ children }) => (
                        <p className="text-lg leading-9 text-slate-700">
                            {children}
                        </p>
                    ),

                    strong: ({ children }) => (
                        <strong className="font-semibold text-ink">
                            {children}
                        </strong>
                    ),

                    em: ({ children }) => (
                        <em className="text-slate-600">
                            {children}
                        </em>
                    ),

                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className="font-semibold text-bluebolt underline decoration-bluebolt/30 underline-offset-4 transition hover:text-blue-600 hover:decoration-blue-600"
                            target={href?.startsWith("http") ? "_blank" : undefined}
                            rel={href?.startsWith("http") ? "noreferrer" : undefined}
                        >
                            {children}
                        </a>
                    ),

                    ul: ({ children }) => (
                        <ul className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                            {children}
                        </ul>
                    ),

                    ol: ({ children }) => (
                        <ol className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                            {children}
                        </ol>
                    ),

                    li: ({ children }) => (
                        <li className="ml-5 list-disc text-base leading-8 text-slate-700 marker:text-bluebolt">
                            {children}
                        </li>
                    ),

                    blockquote: ({ children }) => (
                        <blockquote className="my-10 rounded-[1.75rem] border border-coral/20 bg-coral/5 p-6">
                            <div className="text-xl font-medium leading-9 text-ink">
                                {children}
                            </div>
                        </blockquote>
                    ),

                    img: ({ src, alt }) => (
                        <figure className="my-10">
                            <img
                                src={src ?? ""}
                                alt={alt ?? ""}
                                className="w-full rounded-[2rem] border border-slate-200 object-cover shadow-soft"
                            />
                            {alt && (
                                <figcaption className="mt-3 text-center text-sm text-slate-500">
                                    {alt}
                                </figcaption>
                            )}
                        </figure>
                    ),

                    code: ({ children }) => (
                        <code className="rounded-md bg-slate-100 px-1.5 py-0.5 text-sm font-semibold text-ink">
                            {children}
                        </code>
                    ),

                    pre: ({ children }) => (
                        <pre className="my-10 overflow-x-auto rounded-[1.5rem] border border-slate-800 bg-slate-950 p-5 text-sm leading-7 text-slate-100 shadow-soft">
              {children}
            </pre>
                    ),

                    hr: () => <hr className="my-12 border-slate-200" />,

                    table: ({ children }) => (
                        <div className="my-10 overflow-hidden rounded-[1.5rem] border border-slate-200">
                            <table className="w-full border-collapse bg-white text-sm">
                                {children}
                            </table>
                        </div>
                    ),

                    th: ({ children }) => (
                        <th className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-left font-semibold text-ink">
                            {children}
                        </th>
                    ),

                    td: ({ children }) => (
                        <td className="border-b border-slate-100 px-4 py-3 text-slate-700">
                            {children}
                        </td>
                    ),

                    iframe: ({ ...props }) => (
                        <iframe
                            {...props}
                            className="my-10 aspect-video w-full rounded-[2rem] border border-slate-200 shadow-soft"
                        />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
}

function getReadingTime(content: string) {
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 220));

    return `${minutes} min de lectura`;
}