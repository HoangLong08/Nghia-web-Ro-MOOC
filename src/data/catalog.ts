import type { Category, Product, ProductLine } from "@/lib/types";

export const lines: {
  slug: ProductLine;
  name: string;
  shortName: string;
  description: string;
  href: string;
}[] = [
  {
    slug: "xe-dau-keo",
    name: "Xe đầu kéo",
    shortName: "Đầu kéo",
    description:
      "Đầu kéo Mỹ, Trung Quốc và Nhật – Hàn, công suất 380–560 HP cho tuyến container và hàng nặng đường dài.",
    href: "/san-pham/xe-dau-keo",
  },
  {
    slug: "so-mi-ro-mooc",
    name: "Sơ mi rơ moóc",
    shortName: "Sơ mi rơ moóc",
    description:
      "Mooc sàn, xương, lửng, ben và bồn chuyên dụng. Chọn đúng loại thùng theo mặt hàng bạn chở.",
    href: "/san-pham/so-mi-ro-mooc",
  },
];

export const categories: Category[] = [
  {
    slug: "dau-keo-my",
    line: "xe-dau-keo",
    name: "Đầu kéo Mỹ",
    description:
      "International, Freightliner — cabin rộng, máy bền, phù hợp tuyến Bắc – Nam.",
  },
  {
    slug: "dau-keo-trung-quoc",
    line: "xe-dau-keo",
    name: "Đầu kéo Trung Quốc",
    description:
      "Howo, Sitrak, Chenglong — giá đầu tư thấp, phụ tùng sẵn, dễ sửa chữa.",
  },
  {
    slug: "dau-keo-nhat-han",
    line: "xe-dau-keo",
    name: "Đầu kéo Nhật – Hàn",
    description: "Hyundai, Isuzu — tiết kiệm nhiên liệu, cabin êm, ít hỏng vặt.",
  },
  {
    slug: "san",
    line: "so-mi-ro-mooc",
    name: "Mooc sàn",
    description:
      "Chở hàng bao kiện, sắt thép, máy móc. Sàn phẳng, dễ xếp dỡ từ ba phía.",
  },
  {
    slug: "xuong",
    line: "so-mi-ro-mooc",
    name: "Mooc xương",
    description:
      "Chuyên chở container 20/40 feet, tự trọng nhẹ giúp tăng tải hữu ích.",
  },
  {
    slug: "lung",
    line: "so-mi-ro-mooc",
    name: "Mooc lửng",
    description:
      "Thành lửng tháo rời, linh hoạt giữa hàng rời và hàng kiện lớn.",
  },
  {
    slug: "ben",
    line: "so-mi-ro-mooc",
    name: "Mooc ben",
    description:
      "Ben tự đổ cho đá, cát, than, quặng. Ty ben thủy lực nâng hạ nhanh.",
  },
  {
    slug: "bon-xi-mang",
    line: "so-mi-ro-mooc",
    name: "Mooc bồn xi măng rời",
    description:
      "Bồn kín chở xi măng, bột đá. Hệ nén khí xả liệu nhanh, kín tuyệt đối.",
  },
  {
    slug: "bon-xang-dau",
    line: "so-mi-ro-mooc",
    name: "Mooc bồn xăng dầu",
    description:
      "Bồn nhôm/thép chia khoang, đạt tiêu chuẩn phòng cháy chữa cháy.",
  },
];

export const products: Product[] = [
  // ————————————————————————— Xe đầu kéo —————————————————————————
  {
    slug: "international-prostar-eagle-2-cau",
    name: "Đầu kéo International ProStar Eagle 2 cầu 500HP",
    brand: "International",
    line: "xe-dau-keo",
    category: "dau-keo-my",
    axles: 3,
    quickSpecs: [
      { label: "Công suất", value: "500 HP" },
      { label: "Cầu", value: "2 cầu" },
    ],
    price: 890_000_000,
    origin: "Mỹ",
    warranty: "6 tháng động cơ và hộp số",
    inStock: true,
    featured: true,
    highlights: [
      "Máy Maxxforce 13 lít, mô men xoắn lớn, kéo tốt đèo dốc",
      "Cabin giường nằm đôi, điều hòa độc lập cho tài chạy đường dài",
      "Xe đã kiểm tra tổng thể, thay dầu nhớt và lọc trước khi giao",
    ],
    specs: [
      { label: "Động cơ", value: "Maxxforce 13, 12.4 lít" },
      { label: "Công suất tối đa", value: "500 HP tại 1.900 v/ph" },
      { label: "Mô men xoắn", value: "2.508 Nm" },
      { label: "Hộp số", value: "Eaton Fuller 18 cấp" },
      { label: "Cầu sau", value: "2 cầu chủ động, khóa vi sai" },
      { label: "Tiêu chuẩn khí thải", value: "Euro 4" },
      { label: "Dung tích bình nhiên liệu", value: "2 x 550 lít" },
      { label: "Tải trọng kéo theo", value: "45 tấn" },
    ],
  },
  {
    slug: "freightliner-cascadia-2-cau",
    name: "Đầu kéo Freightliner Cascadia 2 cầu 515HP",
    brand: "Freightliner",
    line: "xe-dau-keo",
    category: "dau-keo-my",
    axles: 3,
    quickSpecs: [
      { label: "Công suất", value: "515 HP" },
      { label: "Cầu", value: "2 cầu" },
    ],
    price: 1_150_000_000,
    origin: "Mỹ",
    warranty: "6 tháng động cơ và hộp số",
    inStock: true,
    featured: false,
    highlights: [
      "Máy Detroit DD15 nổi tiếng bền, chi phí vận hành thấp",
      "Khí động học tốt, tiết kiệm khoảng 5% nhiên liệu so với đời cũ",
      "Hộp số tự động 12 cấp, giảm mệt cho tài trên tuyến dài",
    ],
    specs: [
      { label: "Động cơ", value: "Detroit DD15, 14.8 lít" },
      { label: "Công suất tối đa", value: "515 HP" },
      { label: "Mô men xoắn", value: "2.508 Nm" },
      { label: "Hộp số", value: "DT12 tự động 12 cấp" },
      { label: "Cầu sau", value: "2 cầu chủ động" },
      { label: "Tiêu chuẩn khí thải", value: "Euro 5" },
      { label: "Dung tích bình nhiên liệu", value: "2 x 570 lít" },
      { label: "Tải trọng kéo theo", value: "45 tấn" },
    ],
  },
  {
    slug: "sitrak-c7h-540hp",
    name: "Đầu kéo Sitrak C7H 540HP cabin cao",
    brand: "Sitrak",
    line: "xe-dau-keo",
    category: "dau-keo-trung-quoc",
    axles: 3,
    quickSpecs: [
      { label: "Công suất", value: "540 HP" },
      { label: "Cầu", value: "2 cầu" },
    ],
    price: 1_420_000_000,
    origin: "Trung Quốc",
    warranty: "24 tháng hoặc 300.000 km",
    inStock: true,
    featured: true,
    highlights: [
      "Máy MC13 hợp tác MAN, bảo hành chính hãng 2 năm",
      "Xe mới 100%, giao kèm đầy đủ hóa đơn và hồ sơ đăng ký",
      "Hệ thống phanh EBS kèm ABS, an toàn khi kéo mooc nặng",
    ],
    specs: [
      { label: "Động cơ", value: "MAN MC13, 12.4 lít" },
      { label: "Công suất tối đa", value: "540 HP" },
      { label: "Mô men xoắn", value: "2.500 Nm" },
      { label: "Hộp số", value: "ZF 16 cấp" },
      { label: "Cầu sau", value: "MCY13 hai cầu, tỉ số 3.7" },
      { label: "Tiêu chuẩn khí thải", value: "Euro 5" },
      { label: "Dung tích bình nhiên liệu", value: "800 lít nhôm" },
      { label: "Tải trọng kéo theo", value: "45 tấn" },
    ],
  },
  {
    slug: "chenglong-h7-480hp",
    name: "Đầu kéo Chenglong H7 480HP",
    brand: "Chenglong",
    line: "xe-dau-keo",
    category: "dau-keo-trung-quoc",
    axles: 3,
    quickSpecs: [
      { label: "Công suất", value: "480 HP" },
      { label: "Cầu", value: "1 cầu" },
    ],
    price: 1_090_000_000,
    origin: "Trung Quốc",
    warranty: "24 tháng hoặc 250.000 km",
    inStock: true,
    featured: false,
    highlights: [
      "Suất đầu tư thấp, phù hợp nhà xe mới mở rộng đội",
      "Phụ tùng phổ biến, thay thế nhanh tại mọi tỉnh thành",
      "Cabin cách âm tốt, giường nằm rộng 800 mm",
    ],
    specs: [
      { label: "Động cơ", value: "Yuchai YCK13, 13 lít" },
      { label: "Công suất tối đa", value: "480 HP" },
      { label: "Mô men xoắn", value: "2.200 Nm" },
      { label: "Hộp số", value: "Fast 12 cấp" },
      { label: "Cầu sau", value: "1 cầu chủ động" },
      { label: "Tiêu chuẩn khí thải", value: "Euro 5" },
      { label: "Dung tích bình nhiên liệu", value: "600 lít" },
      { label: "Tải trọng kéo theo", value: "40 tấn" },
    ],
  },
  {
    slug: "hyundai-xcient-520hp",
    name: "Đầu kéo Hyundai Xcient 520HP",
    brand: "Hyundai",
    line: "xe-dau-keo",
    category: "dau-keo-nhat-han",
    axles: 3,
    quickSpecs: [
      { label: "Công suất", value: "520 HP" },
      { label: "Cầu", value: "2 cầu" },
    ],
    price: null,
    origin: "Hàn Quốc",
    warranty: "12 tháng",
    inStock: false,
    featured: false,
    highlights: [
      "Tiêu hao nhiên liệu thấp nhất nhóm, khoảng 32 lít/100 km khi đầy tải",
      "Cabin êm, ít hỏng vặt, phù hợp tuyến cảng chạy liên tục",
      "Nhận đặt hàng theo lô, thời gian về xe 45–60 ngày",
    ],
    specs: [
      { label: "Động cơ", value: "Hyundai D6CJ, 12.7 lít" },
      { label: "Công suất tối đa", value: "520 HP" },
      { label: "Mô men xoắn", value: "2.450 Nm" },
      { label: "Hộp số", value: "ZF 16 cấp" },
      { label: "Cầu sau", value: "2 cầu chủ động" },
      { label: "Tiêu chuẩn khí thải", value: "Euro 5" },
      { label: "Dung tích bình nhiên liệu", value: "700 lít" },
      { label: "Tải trọng kéo theo", value: "45 tấn" },
    ],
  },

  // ———————————————————————— Sơ mi rơ moóc ————————————————————————
  {
    slug: "doosung-san-3-truc-40-feet",
    name: "Sơ mi rơ moóc sàn 3 trục 40 feet Doosung",
    brand: "Doosung",
    line: "so-mi-ro-mooc",
    category: "san",
    axles: 3,
    quickSpecs: [
      { label: "Số trục", value: "3 trục" },
      { label: "Tải trọng", value: "31,3 tấn" },
    ],
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
      { label: "Kích thước lọt lòng", value: "12.400 x 2.500 x 1.560 mm" },
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
    line: "so-mi-ro-mooc",
    category: "xuong",
    axles: 3,
    quickSpecs: [
      { label: "Số trục", value: "3 trục" },
      { label: "Tải trọng", value: "32,5 tấn" },
    ],
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
      { label: "Kích thước lọt lòng", value: "12.500 x 2.480 x 1.550 mm" },
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
    line: "so-mi-ro-mooc",
    category: "lung",
    axles: 3,
    quickSpecs: [
      { label: "Số trục", value: "3 trục" },
      { label: "Tải trọng", value: "30,8 tấn" },
    ],
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
      { label: "Kích thước lọt lòng", value: "12.000 x 2.470 x 1.560 mm" },
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
    slug: "ben-2-truc-25-khoi",
    name: "Sơ mi rơ moóc ben 2 trục 25 khối",
    brand: "FUWA",
    line: "so-mi-ro-mooc",
    category: "ben",
    axles: 2,
    quickSpecs: [
      { label: "Thể tích", value: "25 m³" },
      { label: "Tải trọng", value: "25,4 tấn" },
    ],
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
      { label: "Kích thước thùng", value: "8.600 x 2.400 x 1.700 mm" },
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
    line: "so-mi-ro-mooc",
    category: "bon-xi-mang",
    axles: 3,
    quickSpecs: [
      { label: "Thể tích", value: "32 m³" },
      { label: "Tải trọng", value: "30,5 tấn" },
    ],
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
      { label: "Kích thước tổng thể", value: "11.500 x 2.500 x 3.650 mm" },
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
    line: "so-mi-ro-mooc",
    category: "bon-xang-dau",
    axles: 3,
    quickSpecs: [
      { label: "Thể tích", value: "43 m³" },
      { label: "Số khoang", value: "5 khoang" },
    ],
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
      { label: "Kích thước tổng thể", value: "11.800 x 2.500 x 3.450 mm" },
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

export function getLine(slug: string) {
  return lines.find((l) => l.slug === slug);
}

export function getCategoriesByLine(line: ProductLine): Category[] {
  return categories.filter((c) => c.line === line);
}

export function getCategory(line: ProductLine, slug: string): Category | undefined {
  return categories.find((c) => c.line === line && c.slug === slug);
}

export function getProductsByLine(line: ProductLine): Product[] {
  return products.filter((p) => p.line === line);
}

export function getProduct(line: ProductLine, slug: string): Product | undefined {
  return products.find((p) => p.line === line && p.slug === slug);
}

/** Tìm theo slug không cần biết dòng xe — slug là duy nhất trên toàn danh mục. */
export function findProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productHref(product: Product): string {
  return `/san-pham/${product.line}/${product.slug}`;
}
