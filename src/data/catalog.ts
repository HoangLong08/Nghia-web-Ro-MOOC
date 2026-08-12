import type { Category, Product } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "san",
    name: "Sơ mi rơ moóc sàn",
    description:
      "Chở hàng bao kiện, sắt thép, máy móc. Sàn phẳng, dễ xếp dỡ từ ba phía.",
  },
  {
    slug: "xuong",
    name: "Sơ mi rơ moóc xương",
    description:
      "Chuyên chở container 20/40 feet, tự trọng nhẹ giúp tăng tải hữu ích.",
  },
  {
    slug: "lung",
    name: "Sơ mi rơ moóc lửng",
    description:
      "Thành lửng tháo rời, linh hoạt giữa hàng rời và hàng kiện lớn.",
  },
  {
    slug: "ben",
    name: "Sơ mi rơ moóc ben",
    description:
      "Ben tự đổ cho đá, cát, than, quặng. Ty ben thủy lực nâng hạ nhanh.",
  },
  {
    slug: "bon-xi-mang",
    name: "Sơ mi rơ moóc bồn xi măng rời",
    description:
      "Bồn kín chở xi măng, bột đá. Hệ nén khí xả liệu nhanh, kín tuyệt đối.",
  },
  {
    slug: "bon-xang-dau",
    name: "Sơ mi rơ moóc bồn xăng dầu",
    description:
      "Bồn nhôm/thép chia khoang, đạt tiêu chuẩn phòng cháy chữa cháy.",
  },
];

export const products: Product[] = [
  {
    slug: "doosung-san-3-truc-40-feet",
    name: "Sơ mi rơ moóc sàn 3 trục 40 feet Doosung",
    brand: "Doosung",
    category: "san",
    axles: 3,
    payload: 31.3,
    dimensions: "12.400 x 2.500 x 1.560",
    price: 348_000_000,
    origin: "Hàn Quốc",
    warranty: "12 tháng hoặc 100.000 km",
    inStock: true,
    featured: true,
    highlights: [
      "Dầm chính thép cường độ cao SM490, chịu xoắn tốt",
      "Cụm trục Doosung tải 13 tấn/trục, bảo hành chính hãng",
      "Sơn tĩnh điện 3 lớp, chống ăn mòn vùng ven biển",
    ],
    specs: [
      { label: "Số trục", value: "3 trục" },
      { label: "Tải trọng cho phép chở", value: "31.300 kg" },
      { label: "Khối lượng bản thân", value: "6.700 kg" },
      { label: "Tổng tải trọng", value: "38.000 kg" },
      { label: "Cụm trục", value: "Doosung 13 tấn" },
      { label: "Hệ thống phanh", value: "Phanh hơi 2 dòng, van Wabco" },
      { label: "Lốp", value: "12 lốp 11R22.5" },
      { label: "Chân chống", value: "Jost 28 tấn" },
    ],
  },
  {
    slug: "cimc-xuong-3-truc-40-feet",
    name: "Sơ mi rơ moóc xương 3 trục 40 feet CIMC",
    brand: "CIMC",
    category: "xuong",
    axles: 3,
    payload: 32.5,
    dimensions: "12.500 x 2.480 x 1.550",
    price: 296_000_000,
    origin: "Trung Quốc",
    warranty: "12 tháng",
    inStock: true,
    featured: true,
    highlights: [
      "Tự trọng chỉ 5.500 kg, tăng tối đa tải hữu ích",
      "Khóa gù xoay chở được container 20, 40 và 45 feet",
      "Khung xương chịu lực dạng ống, giảm rung khi chạy đường dài",
    ],
    specs: [
      { label: "Số trục", value: "3 trục" },
      { label: "Tải trọng cho phép chở", value: "32.500 kg" },
      { label: "Khối lượng bản thân", value: "5.500 kg" },
      { label: "Tổng tải trọng", value: "38.000 kg" },
      { label: "Cụm trục", value: "CIMC 13 tấn" },
      { label: "Khóa container", value: "12 khóa gù xoay" },
      { label: "Lốp", value: "12 lốp 11R22.5" },
      { label: "Chân chống", value: "JOST tay quay hai cấp" },
    ],
  },
  {
    slug: "tan-thanh-lung-3-truc",
    name: "Sơ mi rơ moóc lửng 3 trục Tân Thanh",
    brand: "Tân Thanh",
    category: "lung",
    axles: 3,
    payload: 30.8,
    dimensions: "12.000 x 2.470 x 1.560",
    price: 315_000_000,
    origin: "Việt Nam",
    warranty: "12 tháng",
    inStock: true,
    featured: false,
    highlights: [
      "Thành lửng cao 600 mm tháo rời từng tấm",
      "Sản xuất trong nước, sẵn phụ tùng thay thế",
      "Hồ sơ đăng kiểm đầy đủ, giao xe trong 7 ngày",
    ],
    specs: [
      { label: "Số trục", value: "3 trục" },
      { label: "Tải trọng cho phép chở", value: "30.800 kg" },
      { label: "Khối lượng bản thân", value: "7.200 kg" },
      { label: "Chiều cao thành", value: "600 mm" },
      { label: "Cụm trục", value: "FUWA 13 tấn" },
      { label: "Hệ thống phanh", value: "Phanh hơi 2 dòng" },
      { label: "Lốp", value: "12 lốp 11R22.5" },
      { label: "Chân chống", value: "JOST 28 tấn" },
    ],
  },
  {
    slug: "fuwa-ben-2-truc-25-khoi",
    name: "Sơ mi rơ moóc ben 2 trục 25 khối",
    brand: "FUWA",
    category: "ben",
    axles: 2,
    payload: 25.4,
    dimensions: "8.600 x 2.400 x 1.700",
    price: 425_000_000,
    origin: "Việt Nam",
    warranty: "12 tháng, ty ben 24 tháng",
    inStock: true,
    featured: true,
    highlights: [
      "Ty ben Hyva 5 tầng, nâng hết hành trình trong 45 giây",
      "Thùng thép Hardox 450 chống mài mòn khi chở đá",
      "Van an toàn chống lật khi ben nâng",
    ],
    specs: [
      { label: "Số trục", value: "2 trục" },
      { label: "Thể tích thùng", value: "25 m³" },
      { label: "Tải trọng cho phép chở", value: "25.400 kg" },
      { label: "Khối lượng bản thân", value: "7.600 kg" },
      { label: "Ty ben", value: "Hyva 5 tầng, đẩy trước" },
      { label: "Vật liệu thùng", value: "Thép Hardox 450, dày 5 mm" },
      { label: "Lốp", value: "8 lốp 11R22.5" },
      { label: "Chân chống", value: "JOST 28 tấn" },
    ],
  },
  {
    slug: "bon-xi-mang-roi-3-truc-32-khoi",
    name: "Sơ mi rơ moóc bồn xi măng rời 3 trục 32 khối",
    brand: "Doosung",
    category: "bon-xi-mang",
    axles: 3,
    payload: 30.5,
    dimensions: "11.500 x 2.500 x 3.650",
    price: null,
    origin: "Việt Nam",
    warranty: "12 tháng",
    inStock: true,
    featured: false,
    highlights: [
      "Máy nén khí Jurop, xả hết 32 khối trong khoảng 60 phút",
      "Bồn thép SS400 dày 5 mm, hai cửa nạp phía trên",
      "Đường ống xả inox, hạn chế đóng cặn xi măng",
    ],
    specs: [
      { label: "Số trục", value: "3 trục" },
      { label: "Thể tích bồn", value: "32 m³" },
      { label: "Tải trọng cho phép chở", value: "30.500 kg" },
      { label: "Khối lượng bản thân", value: "7.500 kg" },
      { label: "Máy nén khí", value: "Jurop 8 m³/phút" },
      { label: "Áp suất làm việc", value: "2 bar" },
      { label: "Lốp", value: "12 lốp 11R22.5" },
      { label: "Chân chống", value: "JOST 28 tấn" },
    ],
  },
  {
    slug: "bon-xang-dau-nhom-3-truc-43-khoi",
    name: "Sơ mi rơ moóc bồn xăng dầu nhôm 3 trục 43 khối",
    brand: "CIMC",
    category: "bon-xang-dau",
    axles: 3,
    payload: 30.0,
    dimensions: "11.800 x 2.500 x 3.450",
    price: null,
    origin: "Trung Quốc",
    warranty: "12 tháng",
    inStock: false,
    featured: false,
    highlights: [
      "Bồn hợp kim nhôm 5083, nhẹ hơn bồn thép khoảng 1,8 tấn",
      "Chia 5 khoang có vách chống sóng, van đáy khí nén",
      "Đạt tiêu chuẩn PCCC, kèm hồ sơ kiểm định bồn",
    ],
    specs: [
      { label: "Số trục", value: "3 trục" },
      { label: "Thể tích bồn", value: "43 m³" },
      { label: "Số khoang", value: "5 khoang" },
      { label: "Tải trọng cho phép chở", value: "30.000 kg" },
      { label: "Khối lượng bản thân", value: "6.900 kg" },
      { label: "Vật liệu bồn", value: "Hợp kim nhôm 5083" },
      { label: "Van đáy", value: "Điều khiển khí nén" },
      { label: "Lốp", value: "12 lốp 11R22.5" },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug?: string): Product[] {
  if (!slug) return products;
  return products.filter((p) => p.category === slug);
}
