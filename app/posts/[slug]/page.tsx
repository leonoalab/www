import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { Container } from "@/components/ui";
import { getPostBySlug, posts } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} · Leonoa Lab`, description: post.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white text-ink">
      <Header />
      <article className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Link href="/#posts" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-ink"><ArrowLeft className="h-4 w-4" /> Volver a posts</Link>
          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-slate-500"><span>{post.category}</span><span>·</span><time dateTime={post.date}>{post.date}</time></div>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.025em] sm:text-6xl">{post.title}</h1>
          <p className="mt-6 text-xl leading-9 text-slate-600">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{tag}</span>)}</div>
          <div className="mt-12 space-y-7 text-lg leading-9 text-slate-700">
            {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Container>
      </article>
    </main>
  );
}
