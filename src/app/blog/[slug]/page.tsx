import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { formatVietnameseDate, getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import styles from "../blog.module.css";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Không tìm thấy bài viết" };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <div className="container-narrow">
        <Link href="/blog" className={styles.backLink}>
          <ArrowLeft size={16} />
          Quay lại Blog &amp; Đời sống
        </Link>

        <header className={styles.articleHeader}>
          <div className={styles.meta}>
            <span className={styles.tag}>{post.category}</span>
            <span>{formatVietnameseDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className={styles.articleTitle}>{post.title}</h1>
        </header>

        <div className={styles.articleCover}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 760px"
            className={styles.image}
          />
        </div>

        <div className="prose">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </div>
    </article>
  );
}
