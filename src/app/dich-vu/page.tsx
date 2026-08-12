import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Trả góp, đăng ký đăng kiểm, đóng thùng theo yêu cầu, bảo hành và phụ tùng sơ mi rơ moóc.",
};

const services = [
  {
    title: "Mua trả góp",
    body: "Hỗ trợ vay tới 70% giá trị xe, thời hạn 5 năm. Duyệt hồ sơ trong 48 giờ, nhận cả hồ sơ hộ kinh doanh.",
    items: ["Lãi suất cố định 12 tháng đầu", "Nhận thế chấp bằng chính xe mua", "Hỗ trợ làm hồ sơ tại bãi"],
  },
  {
    title: "Đăng ký — đăng kiểm",
    body: "Làm trọn gói biển số, đăng kiểm và phù hiệu. Nhà xe chỉ cần cung cấp giấy tờ pháp nhân.",
    items: ["Hoàn tất trong 3–5 ngày làm việc", "Hóa đơn VAT đầy đủ", "Hỗ trợ sang tên xe cũ"],
  },
  {
    title: "Đóng thùng theo yêu cầu",
    body: "Nhận đóng mới và cải tạo thùng theo mặt hàng riêng: chở kính, chở gia súc, chở máy công trình.",
    items: ["Bản vẽ kỹ thuật trước khi đóng", "Vật liệu Hardox, inox, hợp kim nhôm", "Nghiệm thu cùng đăng kiểm"],
  },
  {
    title: "Bảo hành & phụ tùng",
    body: "Kho phụ tùng cụm trục, phanh hơi, ty ben sẵn hàng. Đội kỹ thuật lưu động hỗ trợ dọc tuyến.",
    items: ["Bảo hành 12 tháng tiêu chuẩn", "Phụ tùng FUWA, JOST, Wabco chính hãng", "Hotline kỹ thuật 24/7"],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Dịch vụ</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Không chỉ bán xe — chúng tôi lo trọn khâu tài chính, giấy tờ và bảo
        dưỡng để xe của bạn lăn bánh sớm nhất.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <section key={s.title} className="rounded-xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            <ul className="mt-4 space-y-2">
              {s.items.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-500" />
                  {i}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-slate-900 p-8 text-white">
        <h2 className="text-xl font-bold">Cần tư vấn cấu hình cụ thể?</h2>
        <p className="mt-2 text-slate-300">
          Cho chúng tôi biết mặt hàng và tuyến chạy, bạn sẽ nhận phương án xe kèm
          báo giá trong 24 giờ.
        </p>
        <Link
          href="/lien-he"
          className="mt-5 inline-block rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400"
        >
          Gửi yêu cầu
        </Link>
      </div>
    </div>
  );
}
