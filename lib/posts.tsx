import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMetadata = {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    tags: string[];
    cover?: string;
};

export type Post = PostMetadata & {
    content: string;
};

export function getAllPosts(): PostMetadata[] {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title,
                date: data.date,
                category: data.category,
                excerpt: data.excerpt,
                tags: data.tags ?? [],
                cover: data.cover,
            };
        })
        .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | null {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        tags: data.tags ?? [],
        cover: data.cover,
        content,
    };
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => ({
            slug: fileName.replace(/\.md$/, ""),
        }));
}

export function getLatestPosts(limit = 3): PostMetadata[] {
    return getAllPosts().slice(0, limit);
}