import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: `${site.name} — đơn vị phân phối sơ mi rơ moóc chính hãng, giao xe toàn quốc.`,
};

const milestones = [
  { year: "2013", text: "Thành lập xưởng sửa chữa rơ moóc tại Dĩ An, Bình Dương." },
  { year: "2016", text: "Trở thành đại lý phân phối cụm trục FUWA và JOST." },
  { year: "2019", text: "Mở bãi xe thứ hai tại Hải Phòng phục vụ khách miền Bắc." },
  { year: "2023", text: "Bàn giao chiếc xe thứ 1.500, mở rộng dịch vụ trả góp." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Về {site.name}</h1>

      <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
        <p>
          Chúng tôi bắt đầu từ một xưởng sửa chữa rơ moóc nhỏ ở Bình Dương. Sau
          hơn mười năm, {site.name} phân phối đầy đủ các dòng sơ mi rơ moóc sàn,
          xương, lửng, ben và bồn chuyên dụng cho nhà xe khắp cả nước.
        </p>
        <p>
          Vì xuất phát từ nghề sửa chữa, chúng tôi tư vấn theo đúng thứ khách
          cần: cụm trục nào hợp với cung đường đèo, độ dày thùng nào chịu được
          đá hộc, cấu hình nào tối ưu tải hữu ích cho tuyến container. Xe bàn
          giao kèm hồ sơ đầy đủ và được bảo hành tận nơi.
        </p>
      </div>

      <h2 className="mt-12 text-xl font-bold text-slate-900">Chặng đường</h2>
      <ol className="mt-6 space-y-5 border-l-2 border-slate-200 pl-6">
        {milestones.map((m) => (
          <li key={m.year} className="relative">
            <span className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-amber-500" />
            <p className="font-semibold text-slate-900">{m.year}</p>
            <p className="mt-1 text-sm text-slate-600">{m.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-xl border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-900">Ghé bãi xem xe</h2>
        <p className="mt-2 text-sm text-slate-600">{site.address}</p>
        <p className="mt-1 text-sm text-slate-600">{site.workingHours}</p>
        <Link
          href="/lien-he"
          className="mt-4 inline-block rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Đặt lịch xem xe
        </Link>
      </div>
    </div>
  );
}
