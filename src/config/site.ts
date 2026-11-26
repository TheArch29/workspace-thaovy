export interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  badge: string;
  description: string;
}

export interface StylePillar {
  number: string;
  title: string;
  caption: string;
  description: string;
}

export interface RoadmapGoal {
  step: string;
  title: string;
  detail: string;
}

export const siteConfig = {
  brandName: "Thảo Vy",
  fullName: "Nguyễn Thảo Vy",
  nickname: "Vy",
  tagline: "Personal Brand · Nhiếp ảnh & Đời sống",
  location: "TP. Hồ Chí Minh, Việt Nam",
  email: "hello@thaovy.studio",
  heroGreeting: "xin chào, mình là",
  heroHeadline: "Thảo Vy — lưu giữ ánh sáng dịu dàng & câu chuyện đời thường.",
  heroSummary:
    "Góc nhỏ mang đậm dấu ấn cá nhân của mình — nơi chia sẻ các bộ ảnh tự chụp, phong cách sống nhẹ nhàng, định hướng phát triển bản thân và kết nối cùng bạn qua mọi kênh mạng xã hội.",
  quickFacts: [
    { label: "Đang sống tại", value: "TP. Hồ Chí Minh" },
    { label: "Lĩnh vực", value: "Visual, Photography & Lifestyle" },
    { label: "Vibe chủ đạo", value: "Nhẹ nhàng · Ấm áp · Chân thực" },
    { label: "Trạng thái", value: "Sẵn sàng hợp tác sáng tạo" },
  ],
  personalTraits: [
    "Ảnh phim 35mm",
    "Slow Living",
    "Cà phê sáng",
    "Thẩm mỹ tối giản",
    "Kể chuyện bằng hình ảnh",
    "Nhật ký đời sống",
  ],
  aboutBio: [
    "Xin chào, mình là Thảo Vy — một người yêu ánh sáng tự nhiên, thích cầm máy chụp lại những khoảnh khắc bình yên và kể câu chuyện cá nhân qua hình ảnh cùng con chữ.",
    "Website này giống như một cuốn sổ tay nhỏ của riêng mình: đơn giản, gần gũi, nơi bạn có thể hiểu thêm về con người mình, phong cách mình theo đuổi, xem lại các bộ ảnh đã chụp và ghé thăm những kênh mạng xã hội hằng ngày của mình.",
  ],
  vision: {
    eyebrow: "Mong muốn cá nhân",
    handwritten: "my little dream",
    title: "Lan tỏa năng lượng dịu dàng và truyền cảm hứng sống có gu",
    description:
      "Mình mong muốn xây dựng một thương hiệu cá nhân chân thật — nơi mọi người cảm thấy thư giãn, được truyền cảm hứng về thẩm mỹ, nhiếp ảnh và cách trân trọng từng khoảnh khắc nhỏ trong đời sống thường nhật.",
    quote:
      "Không cần quá cầu kỳ hay ồn ào — chỉ cần giữ được sự tinh tế và cảm xúc thật trong từng điều mình tạo ra.",
  },
  direction: {
    eyebrow: "Định hướng phát triển",
    handwritten: "growing forward",
    title: "Từng bước xây dựng dấu ấn sáng tạo bền vững",
    goals: [
      {
        step: "01",
        title: "Phát triển nội dung hình ảnh & Bộ ảnh cá nhân",
        detail:
          "Đầu tư chiều sâu cho các series ảnh phim, ảnh chân dung đời sống và lookbook mang màu sắc nhận diện riêng.",
      },
      {
        step: "02",
        title: "Mở rộng cộng đồng trên các kênh Social",
        detail:
          "Chia sẻ đều đặn vlog, nhật ký đời sống và góc nhìn sáng tạo trên Instagram, TikTok, YouTube và Threads.",
      },
      {
        step: "03",
        title: "Đồng hành cùng các thương hiệu đồng điệu",
        detail:
          "Hợp tác với các thương hiệu thời trang, làm đẹp, cà phê và lifestyle theo hướng tự nhiên, giàu cảm xúc.",
      },
    ] satisfies RoadmapGoal[],
  },
  personalStyle: {
    eyebrow: "Phong cách của bản thân",
    handwritten: "my aesthetic & vibe",
    title: "Nữ tính, ấm áp và giản đơn nhưng vẫn có điểm nhấn riêng",
    description:
      "Phong cách mình theo đuổi là sự giao thoa giữa nét mộc mạc của gam kem ấm, sự ngọt ngào tinh tế của hồng phấn và chút cá tính sâu lắng từ đỏ cherry.",
    palette: [
      { name: "Kem ấm", hex: "#F6EFE7" },
      { name: "Hồng phấn", hex: "#F7D6DF" },
      { name: "Hồng bụi", hex: "#C67085" },
      { name: "Đỏ Cherry", hex: "#841821" },
      { name: "Cát dịu", hex: "#E6DAC8" },
    ],
    pillars: [
      {
        number: "01",
        title: "Ánh sáng tự nhiên",
        caption: "Soft & Warm Light",
        description:
          "Ưa thích ánh nắng sớm, khung cửa sổ và tông màu ấm tạo cảm giác gần gũi, dễ chịu ngay từ ánh nhìn đầu tiên.",
      },
      {
        number: "02",
        title: "Tối giản có chiều sâu",
        caption: "Less but Better",
        description:
          "Bố cục gọn gàng, khoảng thở thoáng đãng, tập trung vào cảm xúc thật thay vì quá nhiều chi tiết rườm rà.",
      },
      {
        number: "03",
        title: "Chi tiết nhỏ đáng yêu",
        caption: "Sweet Little Touches",
        description:
          "Yêu thích những điểm xuyết nhẹ nhàng như sổ tay, nét chữ viết tay, nơ mảnh và màu hồng phấn dịu mắt.",
      },
      {
        number: "04",
        title: "Chân thực & Gần gũi",
        caption: "Authentic Voice",
        description:
          "Chia sẻ đúng điều mình trải nghiệm trong đời sống — để mỗi bài viết và khung hình đều mang hơi thở thật.",
      },
    ] satisfies StylePillar[],
  },
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
    { label: "Về mình", href: "/#about" },
    { label: "Phong cách", href: "/#style" },
    { label: "Bộ ảnh", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Social", href: "/#social" },
  ],
  socials: [
    {
      id: "instagram",
      name: "Instagram",
      handle: "@thaovy.visuals",
      url: "https://instagram.com",
      badge: "Daily Visuals",
      description: "Ảnh phim hằng ngày, outfit nhẹ nhàng, góc nhỏ đời sống và stories hậu trường.",
    },
    {
      id: "tiktok",
      name: "TikTok",
      handle: "@thaovy.journal",
      url: "https://tiktok.com",
      badge: "Short Clips",
      description: "Video ngắn về chụp ảnh, slow living, góc làm việc và những chuyến đi ngắn.",
    },
    {
      id: "youtube",
      name: "YouTube",
      handle: "Thảo Vy Studio",
      url: "https://youtube.com",
      badge: "Vlogs",
      description: "Vlog đời sống dịu nhẹ, chia sẻ máy ảnh phim và hành trình phát triển bản thân.",
    },
    {
      id: "facebook",
      name: "Facebook",
      handle: "Thảo Vy — Visual Notes",
      url: "https://facebook.com",
      badge: "Community",
      description: "Cập nhật bộ ảnh mới, chia sẻ tâm sự đời sống và kết nối bạn bè.",
    },
    {
      id: "threads",
      name: "Threads",
      handle: "@thaovy.visuals",
      url: "https://threads.net",
      badge: "Quick Notes",
      description: "Những ghi chú ngắn, trích dẫn nhỏ và cảm hứng mỗi ngày.",
    },
  ] satisfies SocialChannel[],
};
