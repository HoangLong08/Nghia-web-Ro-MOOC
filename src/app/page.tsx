import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getCategoriesByLine, getProductsByLine, lines, products } from "@/data/catalog";
import { formatPostDate, posts } from "@/data/posts";
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
    title: "Phụ tùng và bảo hành tận nơi",
    body: "Kho phụ tùng cụm trục, phanh hơi, ty ben sẵn hàng; đội kỹ thuật lưu động hỗ trợ dọc tuyến.",
  },
];

export default function HomePage() {
  const featured = products.filter((p) => p.featured);
  const latestPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              {site.tagline}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Đầu kéo và sơ mi rơ moóc bền bỉ cho mọi tuyến hàng
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Đầu kéo Mỹ, Trung Quốc, Nhật – Hàn cùng đầy đủ dòng mooc sàn,
              xương, lửng, ben và bồn chuyên dụng. Tư vấn cấu hình theo đúng
              loại hàng và cung đường bạn chạy.
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
          Hai dòng sản phẩm chính
        </h2>
        <p className="mt-2 text-slate-600">
          Chọn dòng xe để xem toàn bộ cấu hình và giá tham khảo.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {lines.map((line) => (
            <section
              key={line.slug}
              className="flex flex-col rounded-xl border border-slate-200 p-6"
            >
              <h3 className="text-xl font-bold text-slate-900">{line.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {line.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {getCategoriesByLine(line.slug).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`${line.href}?danh-muc=${c.slug}`}
                      className="inline-block rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-amber-400 hover:text-amber-700"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={line.href}
                className="mt-6 inline-flex w-fit rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Xem {getProductsByLine(line.slug).length} xe{" "}
                {line.shortName.toLowerCase()}
              </Link>
            </section>
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

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Kinh nghiệm cho nhà xe
            </h2>
            <Link
              href="/blog"
              className="text-sm font-semibold text-amber-600 hover:text-amber-700"
            >
              Xem tất cả bài viết →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {post.tag}
                </p>
                <h3 className="mt-2 font-semibold leading-snug text-slate-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-amber-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-slate-500">
                  {formatPostDate(post.date)} · {post.readingMinutes} phút đọc
                </p>
              </article>
            ))}
          </div>
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
