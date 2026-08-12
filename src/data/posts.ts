import type { Post } from "@/lib/types";

export const posts: Post[] = [
  {
    slug: "chon-mooc-san-hay-mooc-xuong",
    title: "Chở container nên chọn mooc sàn hay mooc xương?",
    excerpt:
      "Hai loại mooc phổ biến nhất cho tuyến cảng, khác nhau ở tự trọng, tính linh hoạt và chi phí bảo dưỡng. Chọn sai là mất tải hữu ích mỗi chuyến.",
    date: "2026-07-28",
    author: "Phòng kỹ thuật",
    tag: "Kinh nghiệm chọn xe",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Nếu bạn chỉ chạy container từ cảng về kho và ngược lại, mooc xương gần như luôn là lựa chọn đúng. Nhưng khi hàng về là container còn hàng đi là sắt thép hay máy móc, câu trả lời sẽ khác.",
      },
      { type: "h2", text: "Tự trọng quyết định tải hữu ích" },
      {
        type: "p",
        text: "Mooc xương 3 trục 40 feet nặng khoảng 5.500 kg, trong khi mooc sàn cùng kích thước nặng 6.700–7.000 kg. Chênh lệch hơn một tấn đó cộng thẳng vào tải hàng bạn được phép chở mỗi chuyến.",
      },
      { type: "h2", text: "Khi nào mooc sàn đáng tiền hơn" },
      {
        type: "ul",
        items: [
          "Hàng hai chiều khác loại: chiều đi hàng kiện, chiều về container.",
          "Chở hàng quá khổ cần xếp dỡ ngang bằng xe nâng hoặc cẩu.",
          "Chạy tuyến ngắn, tải không bao giờ chạm mức tối đa.",
        ],
      },
      { type: "h2", text: "Chi phí bảo dưỡng" },
      {
        type: "p",
        text: "Mooc xương ít bề mặt tiếp xúc nên gần như không phải sơn lại sàn, nhưng khóa gù xoay cần tra mỡ định kỳ và thay khi rơ. Mooc sàn ngược lại: khóa ít hỏng nhưng mặt sàn gỗ hoặc thép cần kiểm tra hằng năm.",
      },
      {
        type: "p",
        text: "Nếu chưa chắc, hãy tính thử tổng tải hàng bạn chở trong một tháng. Chênh lệch một tấn mỗi chuyến, nhân với số chuyến, thường đủ để bù phần chênh giá mua trong vòng chưa tới hai năm.",
      },
    ],
  },
  {
    slug: "bao-duong-cum-truc-ro-mooc",
    title: "Lịch bảo dưỡng cụm trục rơ moóc để không nằm đường",
    excerpt:
      "Cháy bạc đạn giữa đường là sự cố tốn kém nhất của rơ moóc. Bốn mốc kiểm tra dưới đây phòng được gần hết các trường hợp.",
    date: "2026-06-15",
    author: "Phòng kỹ thuật",
    tag: "Bảo dưỡng",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Cụm trục là bộ phận chịu tải liên tục nhưng lại ít được để mắt tới nhất, vì nó chỉ lên tiếng khi đã hỏng. Một lần cháy bạc đạn giữa đường có thể tốn hơn 20 triệu tính cả tiền cẩu kéo và hàng chậm.",
      },
      { type: "h2", text: "Mỗi 10.000 km" },
      {
        type: "ul",
        items: [
          "Kiểm tra độ rơ của moay-ơ bằng cách kích bánh lên và lắc theo phương 6–12 giờ.",
          "Xem phốt chắn dầu có rỉ mỡ ra tang trống hay không.",
          "Siết lại bu lông tắc kê theo đúng lực siết nhà sản xuất.",
        ],
      },
      { type: "h2", text: "Mỗi 30.000 km" },
      {
        type: "p",
        text: "Tháo moay-ơ, rửa sạch bạc đạn bằng dầu và tra mỡ mới. Không trộn hai loại mỡ khác gốc — mỡ lithium và mỡ canxi gặp nhau sẽ tách dầu và mất tác dụng bôi trơn.",
      },
      { type: "h2", text: "Mỗi 6 tháng" },
      {
        type: "p",
        text: "Kiểm tra độ mòn bố phanh và độ đảo của tang trống. Bố mòn lệch giữa hai bên là dấu hiệu cam quay bị kẹt hoặc bầu phanh yếu.",
      },
      { type: "h2", text: "Dấu hiệu phải dừng xe ngay" },
      {
        type: "ul",
        items: [
          "Tang trống nóng bất thường so với các bánh còn lại sau khi dừng.",
          "Tiếng rít hoặc lạo xạo tăng dần theo tốc độ.",
          "Vệt mỡ văng thành hình quạt trên mặt trong của mâm xe.",
        ],
      },
    ],
  },
  {
    slug: "thu-tuc-dang-ky-dang-kiem-ro-mooc",
    title: "Thủ tục đăng ký, đăng kiểm rơ moóc mua mới",
    excerpt:
      "Danh sách giấy tờ cần chuẩn bị và trình tự các bước, để xe lăn bánh trong vòng một tuần kể từ ngày nhận.",
    date: "2026-05-09",
    author: "Phòng kinh doanh",
    tag: "Thủ tục",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Rơ moóc được đăng ký như một phương tiện độc lập, có biển số và sổ đăng kiểm riêng, không đi kèm đầu kéo. Chuẩn bị đủ giấy tờ ngay từ lúc nhận xe sẽ rút ngắn quá trình xuống còn 3–5 ngày làm việc.",
      },
      { type: "h2", text: "Giấy tờ do bên bán cung cấp" },
      {
        type: "ul",
        items: [
          "Hóa đơn giá trị gia tăng.",
          "Phiếu xuất xưởng hoặc tờ khai hải quan với xe nhập khẩu.",
          "Giấy chứng nhận chất lượng an toàn kỹ thuật và bảo vệ môi trường.",
        ],
      },
      { type: "h2", text: "Giấy tờ do bên mua chuẩn bị" },
      {
        type: "ul",
        items: [
          "Giấy đăng ký kinh doanh hoặc căn cước công dân với cá nhân.",
          "Tờ khai lệ phí trước bạ và chứng từ nộp lệ phí.",
          "Giấy giới thiệu nếu người đi làm thủ tục không phải chủ phương tiện.",
        ],
      },
      { type: "h2", text: "Trình tự" },
      {
        type: "p",
        text: "Nộp lệ phí trước bạ trước, sau đó đăng ký biển số tại phòng cảnh sát giao thông nơi doanh nghiệp đặt trụ sở, cuối cùng mới đưa xe đi đăng kiểm. Không làm ngược thứ tự vì trung tâm đăng kiểm yêu cầu có biển số.",
      },
      {
        type: "p",
        text: "Chu kỳ đăng kiểm rơ moóc mới là 24 tháng cho lần đầu, sau đó 12 tháng mỗi lần. Xe trên 12 năm rút xuống 6 tháng.",
      },
    ],
  },
  {
    slug: "chon-dau-keo-my-hay-trung-quoc",
    title: "Đầu kéo Mỹ hay Trung Quốc: bài toán chi phí thật",
    excerpt:
      "Giá mua chỉ là một phần. So sánh trên tổng chi phí sở hữu ba năm cho ra kết quả khác hẳn cảm nhận ban đầu.",
    date: "2026-04-02",
    author: "Phòng kinh doanh",
    tag: "Kinh nghiệm chọn xe",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Câu hỏi này gần như nhà xe nào cũng đặt ra. Không có câu trả lời chung, nhưng có một cách tính giúp bạn tự quyết định: quy mọi thứ về chi phí trên mỗi km trong ba năm đầu.",
      },
      { type: "h2", text: "Bốn khoản cần cộng vào" },
      {
        type: "ul",
        items: [
          "Khấu hao: giá mua trừ giá bán lại dự kiến sau ba năm.",
          "Nhiên liệu: chênh lệch 2 lít/100 km trên 150.000 km/năm là con số lớn.",
          "Sửa chữa ngoài bảo hành, gồm cả ngày xe nằm không chạy được.",
          "Lãi vay nếu mua trả góp.",
        ],
      },
      { type: "h2", text: "Đầu kéo Mỹ đã qua sử dụng" },
      {
        type: "p",
        text: "Giá mua thấp và giữ giá tốt, máy bền nếu bảo dưỡng đúng. Đổi lại, phụ tùng một số cụm phải đặt hàng, và mỗi ngày chờ phụ tùng là một ngày mất doanh thu.",
      },
      { type: "h2", text: "Đầu kéo Trung Quốc mới" },
      {
        type: "p",
        text: "Bảo hành 2 năm và phụ tùng sẵn khắp nơi khiến số ngày xe nằm thấp hơn hẳn. Nhược điểm là mất giá nhanh trong hai năm đầu, nên chỉ hợp lý khi bạn định giữ xe lâu.",
      },
      {
        type: "p",
        text: "Nói ngắn gọn: chạy tuyến dài ổn định và có thợ riêng thì đầu kéo Mỹ rẻ hơn. Đội xe nhiều đầu, cần xe luôn sẵn sàng và ít phụ thuộc thợ giỏi thì xe mới Trung Quốc thường thắng.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}
