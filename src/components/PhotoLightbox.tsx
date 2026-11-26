"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { PhotoItem } from "@/data/albums";
import styles from "./PhotoLightbox.module.css";

interface PhotoLightboxProps {
  photos: PhotoItem[];
}

export function PhotoLightbox({ photos }: PhotoLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, showNext, showPrev]);

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <>
      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.id}
            className={styles.figure}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              id={`photo-trigger-${photo.id}`}
              className={`${styles.photoButton} ${
                photo.aspect === "portrait" ? styles.portrait : styles.landscape
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Xem phóng to: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
            </button>
            <figcaption className={styles.captionBar}>
              <p className={styles.caption}>{photo.caption}</p>
              <span className={styles.camera}>
                <Camera size={13} />
                {photo.camera}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className={styles.overlay}
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.alt}
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
          >
            <motion.div
              className={styles.modal}
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                id="lightbox-close"
                className={styles.closeBtn}
                onClick={close}
                aria-label="Đóng trình xem ảnh"
              >
                <X size={22} />
              </button>

              <div className={styles.stage}>
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  sizes="92vw"
                  className={styles.stageImage}
                  priority
                />
              </div>

              <div className={styles.modalFooter}>
                <div>
                  <p className={styles.modalCaption}>{activePhoto.caption}</p>
                  <p className={styles.modalMeta}>
                    {activePhoto.camera} · {(activeIndex ?? 0) + 1}/{photos.length}
                  </p>
                </div>
                {photos.length > 1 && (
                  <div className={styles.controls}>
                    <button
                      type="button"
                      id="lightbox-prev"
                      className={styles.navBtn}
                      onClick={showPrev}
                      aria-label="Ảnh trước"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      id="lightbox-next"
                      className={styles.navBtn}
                      onClick={showNext}
                      aria-label="Ảnh tiếp theo"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
