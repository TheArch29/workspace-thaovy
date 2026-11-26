import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <p className={styles.brandName}>{siteConfig.brandName}</p>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <div className={styles.metaList}>
            <span className={styles.metaItem}>
              <MapPin size={15} />
              {siteConfig.location}
            </span>
            <a href={`mailto:${siteConfig.email}`} className={styles.metaItem}>
              <Mail size={15} />
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className={styles.linksCol}>
          <p className={styles.colTitle}>Khám phá</p>
          <ul className={styles.list}>
            {siteConfig.navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linksCol}>
          <p className={styles.colTitle}>Mạng xã hội</p>
          <ul className={styles.list}>
            {siteConfig.socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <span>{social.name}</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {siteConfig.fullName}. Giữ trọn bản quyền hình ảnh &amp; nội
          dung.
        </p>
        <p>Personal Brand Portfolio · Next.js &amp; MDX</p>
      </div>
    </footer>
  );
}
