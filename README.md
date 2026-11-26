# Thảo Vy — Personal Branding Portfolio, Photography & Blog

Website Portfolio thương hiệu cá nhân theo phong cách **Creative Scrapbook & Editorial** (tông màu Kem ấm, Hồng phấn và Đỏ Cherry Burgundy), được xây dựng bằng **Next.js (App Router + TypeScript)**, **MDX**, **Framer Motion** và **Vanilla CSS / CSS Modules**.

## Tính năng & Hiệu ứng nổi bật

- **Bảng màu & Thẩm mỹ cá nhân**: Nền kem ấm (`#F6EFE7`), thẻ trắng bo tròn, điểm nhấn hồng phấn (`#F7D6DF`) và đỏ cherry burgundy (`#841821`), kết hợp font serif (`Cormorant Garamond`), chữ viết tay tiếng Việt (`Dancing Script`) và sans-serif (`Be Vietnam Pro`).
- **Chi tiết Scrapbook dễ thương**: Kẹp giấy gắn ảnh hero, khung ảnh cửa sổ mini (`about-me.studio`), băng dính washi hồng trên thẻ album Polaroid, nơ mảnh và dấu sao lấp lánh nhẹ nhàng.
- **Animation mượt mà (`framer-motion`)**:
  - Scroll animation fade-up & stagger cho từng khối nội dung (`ScrollReveal`, `StaggerGroup`).
  - Hiệu ứng chuyển trang mượt (`src/app/template.tsx`).
  - Nút bấm, thẻ album và thẻ mạng xã hội có micro-animation đàn hồi nhẹ, tự động tôn trọng `prefers-reduced-motion`.
- **Cấu trúc đầy đủ**:
  - **Trang chủ (`/`)**: Hero Scrapbook, Thông tin cá nhân (`#about`), Mong muốn & Định hướng phát triển (`#vision`), Phong cách của bản thân (`#style`), Các kênh Social (`#social`), Album ảnh Polaroid (`#albums`), Blog & Đời sống (`#blog`) và Banner Cherry Burgundy.
  - **Bộ ảnh (`/gallery` & `/gallery/[slug]`)**: Album ảnh + trình xem phóng to **Photo Lightbox** hỗ trợ phím `←`, `→`, `Esc`.
  - **Blog & Đời sống (`/blog` & `/blog/[slug]`)**: Quản lý bài viết bằng file `.mdx` trong `content/blog/`.
  - **Trang giới thiệu (`/about`)**: Chi tiết câu chuyện cá nhân, hợp tác và các kênh mạng xã hội.
- **Tự động thiết lập môi trường trên `main`**: File `.agents/environment.json` chạy `npm ci --no-audit --no-fund` mỗi khi mở phiên cloud mới.

## Các lệnh phát triển

```bash
npm run dev          # Khởi chạy server phát triển
npm run build        # Build bản production
npm run lint         # Kiểm tra lỗi ESLint
npm run typecheck    # Kiểm tra kiểu dữ liệu TypeScript
npm run format       # Định dạng code bằng Prettier
```

## Hướng dẫn cập nhật nội dung cá nhân

1. **Thông tin cá nhân, mong muốn, định hướng, phong cách & link Social**: chỉnh sửa tập trung trong `src/config/site.ts`.
2. **Thay/thêm bộ ảnh của bạn**: đưa ảnh vào `public/images/` và cập nhật mảng `photoAlbums` trong `src/data/albums.ts`.
3. **Viết bài Blog mới**: thêm file `.mdx` vào `content/blog/` theo mẫu trong `content/blog/slow-morning-saigon.mdx`.
