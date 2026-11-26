import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Camera, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { photoAlbums } from "@/data/albums";
import { formatVietnameseDate, getAllBlogPosts } from "@/lib/blog";
import styles from "./page.module.css";

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">{siteConfig.tagline}</span>
            <h1 className={styles.heroTitle}>{siteConfig.heroHeadline}</h1>
            <p className={styles.heroSummary}>{siteConfig.heroSummary}</p>

            <div className={styles.heroActions}>
              <Link href="/gallery" className="btn-primary" id="hero-cta-gallery">
                Xem bộ ảnh đã chụp
                <ArrowRight size={16} />
              </Link>
              <Link href="/blog" className="btn-secondary" id="hero-cta-blog">
                Đọc Blog &amp; Đời sống
              </Link>
            </div>

            <div className={styles.quickSocials}>
              <span className={styles.quickLabel}>Kết nối nhanh:</span>
              <div className={styles.quickLinks}>
                {siteConfig.socials.slice(0, 4).map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickLink}
                  >
                    {social.name}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.portraitFrame}>
              <Image
                src="/images/hero-portrait.jpg"
                alt={`Chân dung thương hiệu cá nhân ${siteConfig.fullName}`}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 44vw"
                className={styles.portraitImage}
              />
            </div>
            <p className={styles.portraitNote}>
              {siteConfig.fullName} · {siteConfig.location}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Photography Albums */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Bộ sưu tập hình ảnh</span>
              <h2 className={styles.sectionTitle}>Các bộ ảnh nổi bật</h2>
            </div>
            <Link href="/gallery" className={styles.sectionLink}>
              Xem tất cả bộ ảnh
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.albumGrid}>
            {photoAlbums.map((album) => (
              <Link key={album.slug} href={`/gallery/${album.slug}`} className={styles.albumCard}>
                <div className={styles.albumImageWrap}>
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.albumImage}
                  />
                </div>
                <div className={styles.albumBody}>
                  <div className={styles.albumMeta}>
                    <span>{album.location}</span>
                    <span>·</span>
                    <span>{album.year}</span>
                  </div>
                  <h3 className={styles.albumTitle}>{album.title}</h3>
                  <p className={styles.albumSubtitle}>{album.subtitle}</p>
                  <span className={styles.albumCamera}>
                    <Camera size={14} />
                    {album.camera}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog & Lifestyle */}
      <section className={`${styles.section} ${styles.blogSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Nhật ký &amp; Cảm hứng</span>
              <h2 className={styles.sectionTitle}>Blog &amp; Đời sống mới nhất</h2>
            </div>
            <Link href="/blog" className={styles.sectionLink}>
              Đọc tất cả bài viết
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.postList}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
                <div className={styles.postThumb}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className={styles.postImage}
                  />
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.categoryTag}>{post.category}</span>
                    <span>{formatVietnameseDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Personal Brand Hub */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.socialHeader}>
            <span className="eyebrow">Thương hiệu cá nhân &amp; Mạng xã hội</span>
            <h2 className={styles.sectionTitle}>Theo dõi hành trình trên các nền tảng</h2>
            <p className={styles.socialIntro}>
              Mỗi nền tảng là một mảnh ghép khác nhau — từ khung hình tĩnh lặng, vlog đời sống đến
              các dự án hợp tác thương hiệu.
            </p>
          </div>

          <div className={styles.socialGrid}>
            {siteConfig.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <div className={styles.socialTop}>
                  <div>
                    <h3 className={styles.socialName}>{social.name}</h3>
                    <p className={styles.socialHandle}>{social.handle}</p>
                  </div>
                  <ArrowUpRight size={18} className={styles.socialArrow} />
                </div>
                <p className={styles.socialDesc}>{social.description}</p>
              </a>
            ))}

            <a
              href={`mailto:${siteConfig.email}`}
              className={`${styles.socialCard} ${styles.collabCard}`}
            >
              <div className={styles.socialTop}>
                <div>
                  <h3 className={styles.socialName}>Hợp tác &amp; Booking</h3>
                  <p className={styles.socialHandle}>{siteConfig.email}</p>
                </div>
                <Sparkles size={18} className={styles.socialArrow} />
              </div>
              <p className={styles.socialDesc}>
                Nhắn gửi ý tưởng chụp ảnh, chiến dịch quảng bá thương hiệu hoặc dự án sáng tạo.
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
