# Thảo Vy — Personal Branding Portfolio, Photography & Blog

Website Portfolio thương hiệu cá nhân được xây dựng với **Next.js (App Router + TypeScript)**, **MDX** cho Blog & Đời sống, và **Vanilla CSS / CSS Modules** với thiết kế phong cách tạp chí (editorial).

## Tính năng đã thiết lập sẵn

- **Trang chủ thương hiệu cá nhân (`/`)**: Hero chân dung & giới thiệu bản thân, bộ ảnh nổi bật, bài viết blog mới nhất và khu vực kết nối mạng xã hội / hợp tác.
- **Portfolio Bộ ảnh (`/gallery` & `/gallery/[slug]`)**: Quản lý theo từng album, hiển thị thông số máy ảnh/phim và trình xem ảnh phóng to (**Photo Lightbox**) hỗ trợ phím mũi tên và `Esc`.
- **Blog & Đời sống (`/blog` & `/blog/[slug]`)**: Viết bài bằng file Markdown/MDX trong `content/blog/`, tự động hiển thị danh mục, ngày đăng và thời gian đọc.
- **Trang Giới thiệu & Hợp tác (`/about`)**: Câu chuyện cá nhân, các hạng mục hợp tác thương hiệu và danh sách toàn bộ mạng xã hội.
- **Môi trường tự động (`.agents/environment.json`)**: Tự động cài đặt dependencies bằng `npm ci --no-audit --no-fund` khi mở phiên làm việc mới.

## Các lệnh phát triển

```bash
npm run dev          # Khởi chạy server phát triển (http://localhost:3000)
npm run build        # Build bản production để kiểm tra toàn bộ route
npm run lint         # Kiểm tra lỗi ESLint
npm run typecheck    # Kiểm tra kiểu dữ liệu TypeScript
npm run format       # Định dạng code bằng Prettier
```

## Hướng dẫn cập nhật nội dung cá nhân

1. **Thông tin thương hiệu & link mạng xã hội**: Chỉnh sửa trực tiếp file `src/config/site.ts` (tên, mô tả, email, Instagram, TikTok, YouTube, Facebook, Threads, dịch vụ hợp tác).
2. **Thêm bộ ảnh mới**:
   - Đưa ảnh vào thư mục `public/images/`.
   - Thêm album mới vào mảng `photoAlbums` trong `src/data/albums.ts`.
3. **Viết bài Blog / Đời sống mới**:
   - Tạo file `.mdx` mới trong thư mục `content/blog/` (ví dụ: `content/blog/bai-viet-moi.mdx`) với phần frontmatter:
     ```markdown
     ---
     title: "Tiêu đề bài viết"
     date: "2026-11-26"
     category: "Đời sống"
     excerpt: "Mô tả ngắn gọn về bài viết."
     coverImage: "/images/album-saigon-morning.jpg"
     readingTime: "4 phút đọc"
     ---

     Nội dung bài viết bằng Markdown/MDX...
     ```
