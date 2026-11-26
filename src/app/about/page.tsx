import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { CuteBow, ScrollReveal, StaggerGroup, StaggerItem } from "@/components/MotionPrimitives";
import { siteConfig } from "@/config/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Về mình",
  description: `Câu chuyện cá nhân, định hướng sáng tạo và các kênh mạng xã hội chính thức của ${siteConfig.fullName}.`,
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <ScrollReveal>
          <section className={styles.introGrid}>
            <div className={styles.portraitCard}>
              <div className={styles.portraitWrap}>
                <Image
                  src="/images/hero-portrait.jpg"
                  alt={siteConfig.fullName}
                  fill
                  priority
                  sizes="(max-width: 820px) 100vw, 40vw"
                  className={styles.portrait}
                />
              </div>
              <p className={`handwritten ${styles.portraitCaption}`}>
                {siteConfig.brandName} · {siteConfig.location}
              </p>
            </div>

            <div className={styles.copy}>
              <CuteBow className={styles.bow} />
              <span className="eyebrow">Thương hiệu cá nhân</span>
              <h1 className={styles.title}>{siteConfig.fullName}</h1>
              <p className={styles.subtitle}>
                {siteConfig.tagline} · {siteConfig.location}
              </p>

              <div className={styles.bio}>
                {siteConfig.aboutBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className={styles.ctaRow}>
                <a href={`mailto:${siteConfig.email}`} className="btn-primary">
                  <Mail size={16} />
                  Gửi email hợp tác
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <section className={styles.section}>
          <ScrollReveal>
            <span className="eyebrow">Hợp tác &amp; Dịch vụ</span>
            <h2 className={styles.sectionTitle}>Những điều mình có thể đồng hành cùng bạn</h2>
          </ScrollReveal>

          <StaggerGroup className={styles.collabGrid}>
            {siteConfig.collaborations.map((item) => (
              <StaggerItem key={item.title}>
                <div className={styles.collabCard}>
                  <h3 className={styles.collabTitle}>{item.title}</h3>
                  <p className={styles.collabDesc}>{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section className={styles.section}>
          <ScrollReveal>
            <span className="eyebrow">Mạng xã hội chính thức</span>
            <h2 className={styles.sectionTitle}>Tìm thấy mình ở đây</h2>
          </ScrollReveal>

          <StaggerGroup className={styles.socialList}>
            {siteConfig.socials.map((social) => (
              <StaggerItem key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialRow}
                >
                  <div>
                    <h3 className={styles.socialName}>{social.name}</h3>
                    <p className={styles.socialDesc}>{social.description}</p>
                  </div>
                  <span className={styles.socialHandle}>
                    {social.handle}
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      </div>
    </div>
  );
}
