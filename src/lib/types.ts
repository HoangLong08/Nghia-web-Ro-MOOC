export type ProductLine = "xe-dau-keo" | "so-mi-ro-mooc";

export type Category = {
  slug: string;
  line: ProductLine;
  name: string;
  description: string;
};

export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  brand: string;
  line: ProductLine;
  /** slug của Category cùng dòng xe */
  category: string;
  /** Số trục — dùng cho hình minh hoạ và lọc */
  axles: number;
  /** Hai thông số tóm tắt hiển thị trên card */
  quickSpecs: [Spec, Spec];
  /** Giá tham khảo, VNĐ. null = liên hệ báo giá */
  price: number | null;
  origin: string;
  warranty: string;
  inStock: boolean;
  featured: boolean;
  highlights: string[];
  specs: Spec[];
};

export type PartGroup = {
  slug: string;
  name: string;
  description: string;
};

export type Part = {
  slug: string;
  name: string;
  group: string;
  brand: string;
  price: number | null;
  note: string;
  inStock: boolean;
};

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, ví dụ 2026-07-28 */
  date: string;
  author: string;
  tag: string;
  readingMinutes: number;
  blocks: PostBlock[];
};
