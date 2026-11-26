import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Camera, MapPin } from "lucide-react";
import { PhotoLightbox } from "@/components/PhotoLightbox";
import { getAlbumBySlug, photoAlbums } from "@/data/albums";
import styles from "../gallery.module.css";

interface AlbumDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return photoAlbums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: AlbumDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) {
    return { title: "Không tìm thấy bộ ảnh" };
  }
  return {
    title: album.title,
    description: album.subtitle,
  };
}

export default async function AlbumDetailPage({ params }: AlbumDetailProps) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);

  if (!album) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <Link href="/gallery" className={styles.backLink}>
          <ArrowLeft size={16} />
          Quay lại tất cả bộ ảnh
        </Link>

        <header className={styles.albumDetailHeader}>
          <span className="eyebrow">Bộ ảnh · {album.year}</span>
          <h1 className={styles.title}>{album.title}</h1>
          <p className={styles.lead}>{album.story}</p>
          <div className={styles.meta}>
            <span>
              <MapPin size={14} />
              {album.location}
            </span>
            <span>
              <Camera size={14} />
              {album.camera}
            </span>
          </div>
        </header>

        <PhotoLightbox photos={album.photos} />
      </div>
    </div>
  );
}
