import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProductCard } from "@/components/product-card";
import { getCategoriesByLine, getProductsByLine, lines, products } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description:
    "Xe đầu kéo và sơ mi rơ moóc đang có tại bãi: mooc sàn, xương, lửng, ben, bồn xi măng, bồn xăng dầu và đầu kéo Mỹ, Trung Quốc, Nhật – Hàn.",
};

export default function ProductsOverviewPage() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumb items={[{ label: "Sản phẩm" }]} />

      <h1 className="mt-3 text-3xl font-bold text-slate-900">Sản phẩm</h1>
      <p className="mt-2 max-w-3xl text-slate-600">
        Hai dòng sản phẩm chính. Chọn dòng xe để xem toàn bộ cấu hình đang có,
        kèm thông số kỹ thuật và giá tham khảo.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {lines.map((line) => {
          const count = getProductsByLine(line.slug).length;
          return (
            <section
              key={line.slug}
              className="flex flex-col rounded-xl border border-slate-200 p-6"
            >
              <h2 className="text-xl font-bold text-slate-900">{line.name}</h2>
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
                Xem {count} xe {line.shortName.toLowerCase()}
              </Link>
            </section>
          );
        })}
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-bold text-slate-900">Xe nổi bật</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
