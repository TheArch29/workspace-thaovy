"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { CuteSparkle } from "@/components/MotionPrimitives";
import { siteConfig } from "@/config/site";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <span className={styles.brandRow}>
            <span className={styles.brandName}>{siteConfig.brandName}</span>
            <CuteSparkle size={14} className={styles.brandSparkle} />
          </span>
          <span className={styles.brandSub}>personal journal &amp; visuals</span>
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
          <Mail size={14} />
          <span>Liên hệ</span>
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

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.mobileNav}
            aria-label="Điều hướng di động"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
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
                <Mail size={15} />
                {siteConfig.email}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
