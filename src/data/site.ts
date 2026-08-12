export const site = {
  name: "Trường Long Trailer",
  tagline: "Sơ mi rơ moóc chính hãng — giao xe toàn quốc",
  hotline: "0909 123 456",
  hotlineHref: "tel:0909123456",
  zalo: "0909 123 456",
  email: "sales@truonglongtrailer.vn",
  address: "Lô A3, KCN Sóng Thần 2, TP. Dĩ An, Bình Dương",
  workingHours: "Thứ 2 – Thứ 7, 7:30 – 17:30",
  taxCode: "3700000000",
} as const;

export const nav = [
  { href: "/", label: "Trang chủ" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lien-he", label: "Liên hệ" },
] as const;
