"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <span className={styles.brandName}>{siteConfig.brandName}</span>
          <span className={styles.brandSub}>Journal &amp; Visuals</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Điều hướng chính">
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href={`mailto:${siteConfig.email}`} className={styles.contactLink}>
          Liên hệ hợp tác
        </a>

        <button
          type="button"
          id="mobile-menu-toggle"
          className={styles.menuButton}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Điều hướng di động">
          <div className={`container ${styles.mobileNavInner}`}>
            {siteConfig.navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileLink} ${isActive(item.href) ? styles.active : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className={styles.mobileContact}
              onClick={() => setMenuOpen(false)}
            >
              Liên hệ · {siteConfig.email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
