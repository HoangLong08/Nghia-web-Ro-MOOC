export const site = {
  name: "Trường Long Trailer",
  tagline: "Xe đầu kéo & sơ mi rơ moóc chính hãng — giao xe toàn quốc",
  hotline: "0909 123 456",
  hotlineHref: "tel:0909123456",
  zalo: "0909 123 456",
  email: "sales@truonglongtrailer.vn",
  address: "Lô A3, KCN Sóng Thần 2, TP. Dĩ An, Bình Dương",
  workingHours: "Thứ 2 – Thứ 7, 7:30 – 17:30",
  taxCode: "3700000000",
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const nav: NavItem[] = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  {
    href: "/san-pham",
    label: "Sản phẩm",
    children: [
      { href: "/san-pham/xe-dau-keo", label: "Xe đầu kéo" },
      { href: "/san-pham/so-mi-ro-mooc", label: "Sơ mi rơ moóc" },
    ],
  },
  { href: "/phu-tung", label: "Phụ tùng" },
  { href: "/blog", label: "Blog" },
  { href: "/lien-he", label: "Liên hệ" },
];
