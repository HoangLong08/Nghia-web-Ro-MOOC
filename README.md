# Website bán xe đầu kéo & sơ mi rơ moóc

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Chạy dự án

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build production
npm run lint
```

## Sơ đồ trang

| Route | Nội dung |
| --- | --- |
| `/` | Trang chủ |
| `/gioi-thieu` | Giới thiệu, chặng đường, dịch vụ đi kèm |
| `/san-pham` | Tổng quan hai dòng sản phẩm |
| `/san-pham/xe-dau-keo` | Danh sách đầu kéo, lọc `?danh-muc`, sắp xếp `?sap-xep` |
| `/san-pham/xe-dau-keo/[slug]` | Chi tiết đầu kéo (SSG) |
| `/san-pham/so-mi-ro-mooc` | Danh sách rơ moóc, lọc `?danh-muc`, sắp xếp `?sap-xep` |
| `/san-pham/so-mi-ro-mooc/[slug]` | Chi tiết rơ moóc (SSG) |
| `/phu-tung` | Bảng phụ tùng, lọc theo `?nhom` |
| `/blog` | Danh sách bài viết |
| `/blog/[slug]` | Bài viết (SSG) |
| `/lien-he` | Form báo giá qua Server Action, nhận `?xe=<slug>` để chọn sẵn xe |

## Cấu trúc

```
src/
  app/            các route ở trên + not-found.tsx
  components/     header (menu Sản phẩm có dropdown), footer, breadcrumb,
                  product-card / product-listing / product-detail / product-image
  data/
    catalog.ts    lines → categories → products (nguồn dữ liệu sản phẩm duy nhất)
    parts.ts      nhóm phụ tùng + phụ tùng
    posts.ts      bài blog dạng block (p / h2 / ul)
    site.ts       thông tin công ty và menu điều hướng
  lib/            kiểu dữ liệu, định dạng giá VNĐ, helper query param
```

Thêm một dòng sản phẩm mới: khai báo trong `lines`, thêm `categories` cùng
`line`, rồi tạo route `san-pham/<line>/page.tsx` và `[slug]/page.tsx` — cả hai
chỉ cần gọi `<ProductListing>` và `<ProductDetail>`.

## Việc cần làm tiếp

- **Thông tin công ty**: sửa `src/data/site.ts` — hiện là dữ liệu mẫu (tên, hotline, địa chỉ, MST).
- **Sản phẩm và phụ tùng**: sửa `src/data/catalog.ts`, `src/data/parts.ts`. Giá và thông số hiện là dữ liệu mẫu.
- **Ảnh xe**: `src/components/product-image.tsx` đang vẽ SVG minh hoạ. Khi có ảnh thật, thêm trường `images` vào `Product` và thay bằng `next/image`.
- **Nhận yêu cầu báo giá**: `src/app/lien-he/actions.ts` mới chỉ `console.info`. Cần nối email/CRM/database và thêm chống spam (rate limit hoặc captcha).
- **Nội dung blog**: hiện lưu trong `src/data/posts.ts`. Nếu bài viết nhiều lên, cân nhắc chuyển sang MDX hoặc CMS.
- **SEO**: bổ sung `sitemap.ts`, `robots.ts`, Open Graph image và JSON-LD `Product` khi có domain thật.
