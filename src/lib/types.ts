export type CategorySlug =
  | "san"
  | "xuong"
  | "lung"
  | "ben"
  | "bon-xi-mang"
  | "bon-xang-dau";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  /** Số trục */
  axles: number;
  /** Tải trọng cho phép chở, tấn */
  payload: number;
  /** Kích thước lọt lòng, mm */
  dimensions: string;
  /** Giá tham khảo, VNĐ. null = liên hệ báo giá */
  price: number | null;
  origin: string;
  warranty: string;
  inStock: boolean;
  featured: boolean;
  highlights: string[];
  specs: { label: string; value: string }[];
};
