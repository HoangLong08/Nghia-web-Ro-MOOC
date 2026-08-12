import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/catalog";
import { site } from "@/data/site";

const stats = [
  { value: "12+", label: "Năm trong ngành vận tải" },
  { value: "1.500+", label: "Xe đã bàn giao" },
  { value: "63", label: "Tỉnh thành đã giao xe" },
  { value: "24/7", label: "Hỗ trợ kỹ thuật" },
];

const reasons = [
  {
    title: "Xe có sẵn tại bãi",
    body: "Hơn 60 đầu xe sẵn kho ở Bình Dương và Hải Phòng, xem xe trực tiếp trước khi chốt.",
  },
  {
    title: "Hồ sơ đăng kiểm đầy đủ",
    body: "Bàn giao kèm hóa đơn VAT, phiếu xuất xưởng và hồ sơ đăng ký — đăng kiểm trong 3 ngày.",
  },
  {
    title: "Hỗ trợ trả góp 70%",
    body: "Liên kết ngân hàng, duyệt hồ sơ trong 48 giờ, thời hạn vay tới 5 năm.",
  },
  {
    title: "Bảo hành tận nơi",
    body: "Đội kỹ thuật lưu động xử lý sự cố cụm trục, phanh hơi và ty ben trên toàn quốc.",
  },
];

export default function HomePage() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              {site.tagline}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Sơ mi rơ moóc bền bỉ cho mọi tuyến hàng
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Mooc sàn, xương, lửng, ben và bồn chuyên dụng từ Doosung, CIMC,
              Tân Thanh. Tư vấn cấu hình theo đúng loại hàng và cung đường bạn
              chạy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/san-pham"
                className="rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
              >
                Xem xe đang có
              </Link>
              <a
                href={site.hotlineHref}
                className="rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Gọi {site.hotline}
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4 self-center">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-700 bg-slate-800/60 p-5"
              >
                <dt className="text-3xl font-bold text-amber-400">{s.value}</dt>
                <dd className="mt-1 text-sm text-slate-300">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Danh mục sơ mi rơ moóc
        </h2>
        <p className="mt-2 text-slate-600">
          Chọn đúng loại thùng theo mặt hàng bạn chở.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/san-pham?danh-muc=${c.slug}`}
              className="group rounded-xl border border-slate-200 p-5 transition-colors hover:border-amber-400 hover:bg-amber-50"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-amber-700">
                {c.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Xe nổi bật
              </h2>
              <p className="mt-2 text-slate-600">
                Những cấu hình được khách vận tải chọn nhiều nhất.
              </p>
            </div>
            <Link
              href="/san-pham"
              className="text-sm font-semibold text-amber-600 hover:text-amber-700"
            >
              Xem tất cả →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Vì sao chọn {site.name}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <span className="mt-1 size-2 shrink-0 rounded-full bg-amber-500" />
              <div>
                <h3 className="font-semibold text-slate-900">{r.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-500">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Cần báo giá cho đội xe của bạn?
            </h2>
            <p className="mt-2 text-slate-800">
              Gửi số lượng và loại hàng cần chở, chúng tôi báo giá trong 24 giờ.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Yêu cầu báo giá
          </Link>
        </div>
      </section>
    </>
  );
}
