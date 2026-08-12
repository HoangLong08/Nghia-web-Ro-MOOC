const vnd = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});

export function formatPrice(price: number | null): string {
  return price === null ? "Liên hệ báo giá" : vnd.format(price);
}
