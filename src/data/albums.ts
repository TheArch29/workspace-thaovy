export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: "portrait" | "landscape";
  camera: string;
}

export interface PhotoAlbum {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  location: string;
  camera: string;
  coverImage: string;
  story: string;
  photos: PhotoItem[];
}

export const photoAlbums: PhotoAlbum[] = [
  {
    slug: "nang-som-sai-gon",
    title: "Nắng sớm Sài Gòn",
    subtitle: "Một cuộn phim 35mm ghi lại ban công, tách cà phê và bóng lá buổi sáng.",
    year: "2026",
    location: "Quận 3, TP. Hồ Chí Minh",
    camera: "Nikon FM2 · Kodak Portra 400",
    coverImage: "/images/album-saigon-morning.jpg",
    story:
      "Bộ ảnh được thực hiện trong những buổi sáng cuối tuần yên ắng nhất — khi ánh nắng vừa kịp nghiêng qua tán cây, rọi lên mảng tường vôi cũ và mặt bàn gỗ mộc. Mỗi khung hình là một khoảng thở chậm giữa nhịp phố vội vàng.",
    photos: [
      {
        id: "saigon-01",
        src: "/images/album-saigon-morning.jpg",
        alt: "Bàn cà phê buổi sáng trên ban công ngập nắng",
        caption: "Bóng lá in trên tường vôi lúc 7 giờ 15 phút sáng.",
        aspect: "landscape",
        camera: "Nikon FM2 · 50mm f/1.8",
      },
      {
        id: "saigon-02",
        src: "/images/hero-portrait.jpg",
        alt: "Chân dung bên khung cửa sổ ngập ánh sáng tự nhiên",
        caption: "Tự chụp bên khung cửa sổ gỗ trước khi xuống phố.",
        aspect: "portrait",
        camera: "Nikon FM2 · 50mm f/1.4",
      },
    ],
  },
  {
    slug: "hoang-hon-bien-vang",
    title: "Hoàng hôn biển vắng",
    subtitle: "Sắc hổ phách và sương chiều trên bờ cát tĩnh lặng cuối mùa.",
    year: "2026",
    location: "Phú Yên, Việt Nam",
    camera: "Medium Format · Cinestill 400D",
    coverImage: "/images/album-coastal-dusk.jpg",
    story:
      "Chuyến đi một mình men theo những bãi biển vắng người. Không còn ánh nắng gắt của buổi trưa, chỉ còn mặt nước phản chiếu màu trời chuyển giao giữa hổ phách và xanh lam nhạt — dịu dàng và vô cùng bình yên.",
    photos: [
      {
        id: "coastal-01",
        src: "/images/album-coastal-dusk.jpg",
        alt: "Bờ biển trong sương chiều hoàng hôn với con thuyền xa xa",
        caption: "Con thuyền nhỏ giữa khoảng lặng màu hổ phách lúc chiều tà.",
        aspect: "landscape",
        camera: "Medium Format · 80mm f/2.8",
      },
      {
        id: "coastal-02",
        src: "/images/album-saigon-morning.jpg",
        alt: "Góc sổ tay ghi chép sau chuyến đi biển",
        caption: "Những trang ghi chú còn vương mùi gió biển vào sáng hôm sau.",
        aspect: "landscape",
        camera: "Nikon FM2 · 35mm f/2",
      },
    ],
  },
];

export function getAlbumBySlug(slug: string): PhotoAlbum | undefined {
  return photoAlbums.find((album) => album.slug === slug);
}
