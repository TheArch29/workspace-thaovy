import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatVietnameseDate, getAllBlogPosts } from "@/lib/blog";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog & Đời sống",
  description:
    "Những bài viết về phong cách sống tối giản, nhiếp ảnh phim, hành trình sáng tạo và xây dựng thương hiệu cá nhân.",
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className="eyebrow">Journal &amp; Lifestyle</span>
          <h1 className={styles.title}>Blog &amp; Đời sống</h1>
          <p className={styles.lead}>
            Nơi ghi lại những suy ngẫm chậm rãi về công việc sáng tạo, nhiếp ảnh, các chuyến đi và
            cách xây dựng dấu ấn cá nhân bền vững.
          </p>
        </header>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span className={styles.tag}>{post.category}</span>
                  <span>{formatVietnameseDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
