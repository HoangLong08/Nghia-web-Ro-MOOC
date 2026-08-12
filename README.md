# Website bán sơ mi rơ moóc

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Chạy dự án

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build production
npm run lint
```

## Cấu trúc

```
src/
  app/
    page.tsx                 Trang chủ
    san-pham/page.tsx        Danh sách xe (lọc theo ?danh-muc, sắp xếp theo ?sap-xep)
    san-pham/[slug]/page.tsx Chi tiết xe (SSG qua generateStaticParams)
    dich-vu/page.tsx         Dịch vụ
    gioi-thieu/page.tsx      Giới thiệu
    lien-he/                 Form báo giá (Server Action trong actions.ts)
    not-found.tsx            Trang 404
  components/                Header, Footer, ProductCard, TrailerImage
  data/
    catalog.ts               Danh mục + danh sách xe (nguồn dữ liệu duy nhất)
    site.ts                  Tên công ty, hotline, địa chỉ, menu
  lib/                       Kiểu dữ liệu và hàm định dạng giá VNĐ
```

## Việc cần làm tiếp

- **Thông tin công ty**: sửa [src/data/site.ts](src/data/site.ts) — hiện đang là dữ liệu mẫu (tên, hotline, địa chỉ, MST).
- **Sản phẩm**: sửa [src/data/catalog.ts](src/data/catalog.ts). Giá và thông số hiện là dữ liệu mẫu, cần thay bằng số liệu thật.
- **Ảnh xe**: [src/components/trailer-image.tsx](src/components/trailer-image.tsx) đang vẽ SVG minh hoạ. Khi có ảnh chụp thật, thêm trường `images` vào `Product` và thay bằng `next/image`.
- **Nhận yêu cầu báo giá**: [src/app/lien-he/actions.ts](src/app/lien-he/actions.ts) mới chỉ `console.info`. Cần nối email/CRM/database và thêm chống spam (rate limit hoặc captcha).
- **SEO**: bổ sung `sitemap.ts`, `robots.ts`, Open Graph image và JSON-LD `Product` khi có domain thật.
