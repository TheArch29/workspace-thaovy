import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera, MapPin } from "lucide-react";
import { photoAlbums } from "@/data/albums";
import styles from "./gallery.module.css";

export const metadata: Metadata = {
  title: "Bộ ảnh đã chụp",
  description:
    "Tuyển tập các bộ ảnh phim 35mm, ảnh đời sống và hành trình du lịch do Thảo Vy thực hiện.",
};

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className="eyebrow">Portfolio Nhiếp ảnh</span>
          <h1 className={styles.title}>Các bộ ảnh đã chụp</h1>
          <p className={styles.lead}>
            Mỗi bộ ảnh là một cuộn phim ghi lại ánh sáng, không gian và cảm xúc ở những nơi mình đã
            đi qua. Nhấn vào từng album để xem trọn bộ ảnh và ghi chú máy ảnh.
          </p>
        </header>

        <div className={styles.albumList}>
          {photoAlbums.map((album) => (
            <Link key={album.slug} href={`/gallery/${album.slug}`} className={styles.albumRow}>
              <div className={styles.coverWrap}>
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  fill
                  sizes="(max-width: 820px) 100vw, 55vw"
                  className={styles.coverImage}
                />
              </div>

              <div className={styles.info}>
                <span className={styles.year}>{album.year}</span>
                <h2 className={styles.albumTitle}>{album.title}</h2>
                <p className={styles.story}>{album.story}</p>
                <div className={styles.meta}>
                  <span>
                    <MapPin size={14} />
                    {album.location}
                  </span>
                  <span>
                    <Camera size={14} />
                    {album.camera}
                  </span>
                  <span>{album.photos.length} khung hình</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
