import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Camera, Heart, Mail, Sparkles } from "lucide-react";
import {
  CuteBow,
  CutePaperclip,
  CuteSparkle,
  ScrollReveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { siteConfig } from "@/config/site";
import { photoAlbums } from "@/data/albums";
import { formatVietnameseDate, getAllBlogPosts } from "@/lib/blog";
import styles from "./page.module.css";

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <>
      {/* Hero Section — Creative Scrapbook + Editorial */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <ScrollReveal className={styles.heroCopy} distance={20}>
            <span className={`handwritten ${styles.heroScript}`}>{siteConfig.heroGreeting}</span>
            <h1 className={styles.heroTitle}>{siteConfig.heroHeadline}</h1>
            <p className={styles.heroSummary}>{siteConfig.heroSummary}</p>

            <div className={styles.heroActions}>
              <Link href="/gallery" className="btn-primary" id="hero-cta-gallery">
                Xem album ảnh
                <ArrowRight size={16} />
              </Link>
              <Link href="/#social" className="btn-secondary" id="hero-cta-social">
                Ghé kênh Social
              </Link>
            </div>

            <div className={styles.quickSocials}>
              {siteConfig.socials.slice(0, 4).map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.quickPill}
                >
                  <span>{social.name}</span>
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className={styles.heroVisual} delay={0.12} direction="up" distance={28}>
            <div className={styles.scrapbookStage}>
              <CutePaperclip className={styles.paperclip} />
              <CuteSparkle size={22} className={styles.heroSparkleTop} />
              <CuteSparkle size={14} className={styles.heroSparkleSmall} />

              <div className={styles.mainPolaroid}>
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
                <div className={styles.polaroidFooter}>
                  <span className={`handwritten ${styles.polaroidScript}`}>
                    {siteConfig.brandName} · golden hour
                  </span>
                  <span className={styles.polaroidMeta}>35mm film</span>
                </div>
              </div>

              <div className={styles.miniPolaroid}>
                <div className={styles.miniPhotoWrap}>
                  <Image
                    src="/images/album-saigon-morning.jpg"
                    alt="Khoảnh khắc cà phê sáng trên ban công"
                    fill
                    sizes="180px"
                    className={styles.portraitImage}
                  />
                </div>
                <span className={`handwritten ${styles.miniCaption}`}>slow mornings</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 1: Thông tin cá nhân — Cute Window Frame */}
      <section id="about" className={styles.section}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.aboutCard}>
              <div className={styles.windowColumn}>
                <div className={styles.windowFrame}>
                  <div className={styles.windowBar}>
                    <div className={styles.windowDots} aria-hidden="true">
                      <span className={styles.dotCherry} />
                      <span className={styles.dotBlush} />
                      <span className={styles.dotSand} />
                    </div>
                    <span className={styles.windowTitle}>about-me.studio</span>
                  </div>
                  <div className={styles.windowPhotoWrap}>
                    <Image
                      src="/images/hero-portrait.jpg"
                      alt={siteConfig.fullName}
                      fill
                      sizes="(max-width: 820px) 100vw, 340px"
                      className={styles.portraitImage}
                    />
                  </div>
                </div>
                <p className={`handwritten ${styles.windowNote}`}>get to know me</p>
              </div>

              <div className={styles.aboutContent}>
                <span className="eyebrow">
                  <CuteSparkle size={12} />
                  Thông tin cá nhân
                </span>
                <h2 className={styles.sectionTitle}>Đôi nét về {siteConfig.fullName}</h2>

                <div className={styles.bioParagraphs}>
                  {siteConfig.aboutBio.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>

                <div className={styles.factsGrid}>
                  {siteConfig.quickFacts.map((fact) => (
                    <div key={fact.label} className={styles.factItem}>
                      <span className={styles.factLabel}>{fact.label}</span>
                      <span className={styles.factValue}>{fact.value}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.traitsWrap}>
                  {siteConfig.personalTraits.map((trait) => (
                    <span key={trait} className={styles.traitChip}>
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Mong muốn & Định hướng phát triển */}
      <section id="vision" className={styles.section}>
        <div className="container">
          <div className={styles.visionGrid}>
            <ScrollReveal className={styles.visionCard} delay={0.05}>
              <div className={styles.cardTopRow}>
                <span className="eyebrow">{siteConfig.vision.eyebrow}</span>
                <span className={`handwritten ${styles.cardScript}`}>
                  {siteConfig.vision.handwritten}
                </span>
              </div>
              <h2 className={styles.cardHeading}>{siteConfig.vision.title}</h2>
              <p className={styles.cardCopy}>{siteConfig.vision.description}</p>
              <blockquote className={styles.cuteQuote}>“{siteConfig.vision.quote}”</blockquote>
            </ScrollReveal>

            <ScrollReveal className={styles.directionCard} delay={0.14}>
              <div className={styles.cardTopRow}>
                <span className="eyebrow">{siteConfig.direction.eyebrow}</span>
                <span className={`handwritten ${styles.cardScript}`}>
                  {siteConfig.direction.handwritten}
                </span>
              </div>
              <h2 className={styles.cardHeading}>{siteConfig.direction.title}</h2>

              <ol className={styles.roadmapList}>
                {siteConfig.direction.goals.map((goal) => (
                  <li key={goal.step} className={styles.roadmapItem}>
                    <span className={styles.stepBadge}>{goal.step}</span>
                    <div>
                      <h3 className={styles.roadmapTitle}>{goal.title}</h3>
                      <p className={styles.roadmapDetail}>{goal.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Phong cách của bản thân */}
      <section id="style" className={styles.section}>
        <div className="container">
          <ScrollReveal className={styles.centeredHeader}>
            <CuteBow className={styles.sectionBow} />
            <span className="eyebrow">{siteConfig.personalStyle.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{siteConfig.personalStyle.title}</h2>
            <p className={styles.centeredLead}>{siteConfig.personalStyle.description}</p>

            <div className={styles.paletteStrip} aria-label="Bảng màu phong cách cá nhân">
              {siteConfig.personalStyle.palette.map((swatch) => (
                <div key={swatch.name} className={styles.swatchItem}>
                  <span className={styles.swatchCircle} style={{ backgroundColor: swatch.hex }} />
                  <span className={styles.swatchName}>{swatch.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <StaggerGroup className={styles.styleGrid}>
            {siteConfig.personalStyle.pillars.map((pillar) => (
              <StaggerItem key={pillar.number}>
                <div className={styles.styleCard}>
                  <div className={styles.styleTop}>
                    <span className={styles.styleNum}>{pillar.number}</span>
                    <span className={`handwritten ${styles.styleCaption}`}>{pillar.caption}</span>
                  </div>
                  <h3 className={styles.styleTitle}>{pillar.title}</h3>
                  <p className={styles.styleDesc}>{pillar.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Section 4: Các kênh Social */}
      <section id="social" className={styles.section}>
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">
                <Heart size={12} />
                Kết nối cùng mình
              </span>
              <h2 className={styles.sectionTitle}>Các kênh mạng xã hội</h2>
            </div>
            <span className={`handwritten ${styles.headerScript}`}>let&apos;s stay connected!</span>
          </ScrollReveal>

          <StaggerGroup className={styles.socialGrid}>
            {siteConfig.socials.map((social) => (
              <StaggerItem key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                >
                  <div className={styles.socialTop}>
                    <span className={styles.socialBadge}>{social.badge}</span>
                    <ArrowUpRight size={18} className={styles.socialArrow} />
                  </div>
                  <div>
                    <h3 className={styles.socialName}>{social.name}</h3>
                    <p className={styles.socialHandle}>{social.handle}</p>
                  </div>
                  <p className={styles.socialDesc}>{social.description}</p>
                </a>
              </StaggerItem>
            ))}

            <StaggerItem>
              <a
                href={`mailto:${siteConfig.email}`}
                className={`${styles.socialCard} ${styles.socialCollab}`}
              >
                <div className={styles.socialTop}>
                  <span className={styles.socialBadgeCherry}>Booking &amp; Collab</span>
                  <Sparkles size={18} className={styles.socialArrow} />
                </div>
                <div>
                  <h3 className={styles.socialName}>Hợp tác công việc</h3>
                  <p className={styles.socialHandle}>{siteConfig.email}</p>
                </div>
                <p className={styles.socialDesc}>
                  Gửi lời nhắn cho các dự án chụp ảnh, quảng bá thương hiệu hoặc sáng tạo nội dung.
                </p>
              </a>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Section 5: Các Album ảnh đã chụp — Cute Polaroid + Washi Tape */}
      <section id="albums" className={styles.section}>
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Bộ sưu tập nhiếp ảnh</span>
              <h2 className={styles.sectionTitle}>Các album ảnh mình đã chụp</h2>
            </div>
            <Link href="/gallery" className={styles.sectionLink}>
              Xem tất cả album
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          <StaggerGroup className={styles.albumGrid} stagger={0.12}>
            {photoAlbums.map((album, index) => (
              <StaggerItem key={album.slug}>
                <Link
                  href={`/gallery/${album.slug}`}
                  className={`${styles.albumCard} ${
                    index % 2 === 0 ? styles.tiltLeft : styles.tiltRight
                  }`}
                >
                  <span className={styles.washiTape} aria-hidden="true" />
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
                      <span>{album.photos.length} ảnh</span>
                    </div>
                    <h3 className={styles.albumTitle}>{album.title}</h3>
                    <p className={styles.albumSubtitle}>{album.subtitle}</p>
                    <span className={styles.albumCamera}>
                      <Camera size={14} />
                      {album.camera}
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Section 6: Blog & Đời sống */}
      <section id="blog" className={styles.section}>
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Nhật ký &amp; Cảm hứng</span>
              <h2 className={styles.sectionTitle}>Blog &amp; Đời sống</h2>
            </div>
            <Link href="/blog" className={styles.sectionLink}>
              Đọc tất cả bài viết
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          <StaggerGroup className={styles.postList}>
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className={styles.postCard}>
                  <div className={styles.postThumb}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 260px"
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
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Section 7: Signature Deep Cherry Burgundy Closing Section */}
      <section className={styles.section}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.cherryBanner}>
              <CuteBow className={styles.bannerBow} />
              <span className={`handwritten ${styles.bannerScript}`}>
                cảm ơn bạn đã ghé thăm góc nhỏ của mình!
              </span>
              <h2 className={styles.bannerTitle}>
                Cùng nhau tạo nên những câu chuyện và khung hình thật đẹp nhé.
              </h2>
              <p className={styles.bannerCopy}>
                Dù là một lời chào dễ thương, ý tưởng chụp ảnh mới hay cơ hội hợp tác thương hiệu,
                mình luôn vui khi nhận được tin nhắn từ bạn.
              </p>
              <div className={styles.bannerActions}>
                <a href={`mailto:${siteConfig.email}`} className="btn-light" id="banner-cta-email">
                  <Mail size={16} />
                  Gửi tin nhắn cho {siteConfig.nickname}
                </a>
                <Link href="/about" className={styles.bannerSecondaryLink}>
                  Xem thêm trang giới thiệu
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
