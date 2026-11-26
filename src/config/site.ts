export interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  description: string;
}

export const siteConfig = {
  brandName: "Thảo Vy",
  fullName: "Nguyễn Thảo Vy",
  tagline: "Visual Storyteller · Nhiếp ảnh & Đời sống",
  location: "TP. Hồ Chí Minh, Việt Nam",
  email: "hello@thaovy.studio",
  heroHeadline: "Ghi lại ánh sáng dịu dàng và những câu chuyện đời thường.",
  heroSummary:
    "Không gian thương hiệu cá nhân của Thảo Vy — nơi lưu giữ các bộ ảnh phim tự chụp, chia sẻ góc nhìn về phong cách sống tối giản, hành trình sáng tạo và kết nối cùng các dự án truyền cảm hứng.",
  aboutBio: [
    "Xin chào, mình là Thảo Vy — một người yêu ánh sáng tự nhiên, nhiếp ảnh phim 35mm và những câu chuyện nhỏ bé trong nhịp sống hằng ngày.",
    "Website này là nhật ký thị giác và ngôi nhà chung cho thương hiệu cá nhân của mình: nơi bạn có thể xem trọn vẹn các bộ ảnh mình đã thực hiện, đọc những bài viết về đời sống chậm, và tìm thấy mọi kênh mạng xã hội để cùng đồng hành.",
    "Mình luôn sẵn sàng hợp tác cùng các thương hiệu phong cách sống, thời trang tối giản, quán cà phê bản địa và các dự án kể chuyện bằng hình ảnh.",
  ],
  collaborations: [
    {
      title: "Bộ ảnh thương hiệu & Lookbook",
      description:
        "Lên ý tưởng nghệ thuật, chụp ảnh sản phẩm và lookbook mang tông màu tự nhiên, giàu cảm xúc.",
    },
    {
      title: "Sáng tạo nội dung Lifestyle",
      description:
        "Xây dựng bài viết, nhật ký hình ảnh và video ngắn chân thực trên các nền tảng mạng xã hội.",
    },
    {
      title: "Hợp tác biên tập & Chia sẻ",
      description:
        "Viết bài cảm nhận, trải nghiệm không gian, du lịch chậm và các câu chuyện thương hiệu cá nhân.",
    },
  ],
  navLinks: [
    { label: "Trang chủ", href: "/" },
    { label: "Bộ ảnh", href: "/gallery" },
    { label: "Blog & Đời sống", href: "/blog" },
    { label: "Về mình", href: "/about" },
  ],
  socials: [
    {
      id: "instagram",
      name: "Instagram",
      handle: "@thaovy.visuals",
      url: "https://instagram.com",
      description: "Ảnh phim hằng ngày, góc nhỏ đời sống và nhật ký hậu trường.",
    },
    {
      id: "tiktok",
      name: "TikTok",
      handle: "@thaovy.journal",
      url: "https://tiktok.com",
      description: "Video ngắn về chụp ảnh, slow living và những chuyến đi.",
    },
    {
      id: "youtube",
      name: "YouTube",
      handle: "Thảo Vy Studio",
      url: "https://youtube.com",
      description: "Vlog đời sống, chia sẻ thiết bị máy ảnh và màu phim.",
    },
    {
      id: "facebook",
      name: "Facebook",
      handle: "Thảo Vy — Visual Notes",
      url: "https://facebook.com",
      description: "Cập nhật dự án mới, chia sẻ bài viết và kết nối cộng đồng.",
    },
    {
      id: "threads",
      name: "Threads",
      handle: "@thaovy.visuals",
      url: "https://threads.net",
      description: "Ghi chú nhanh mỗi ngày về sáng tạo và cảm hứng sống.",
    },
  ] satisfies SocialChannel[],
};
