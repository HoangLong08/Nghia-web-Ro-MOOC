import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { TrailerImage } from "@/components/trailer-image";
import { getCategory, getProduct, products } from "@/data/catalog";
import { site } from "@/data/site";
import { formatPrice } from "@/lib/format";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Không tìm thấy xe" };
  return {
    title: product.name,
    description: `${product.name} — ${product.axles} trục, tải trọng ${product.payload} tấn. ${formatPrice(product.price)}.`,
  };
}

export default async function ProductDetailPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          Trang chủ
        </Link>
        <span className="mx-2">/</span>
        <Link href="/san-pham" className="hover:text-slate-900">
          Sản phẩm
        </Link>
        {category && (
          <>
            <span className="mx-2">/</span>
            <Link
              href={`/san-pham?danh-muc=${category.slug}`}
              className="hover:text-slate-900"
            >
              {category.name}
            </Link>
          </>
        )}
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <TrailerImage
          category={product.category}
          axles={product.axles}
          className="aspect-[16/10] rounded-xl"
        />

        <div>
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
              {product.brand}
            </span>
            <span className="rounded bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
              Xuất xứ: {product.origin}
            </span>
            {product.inStock && (
              <span className="rounded bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700">
                Có sẵn tại bãi
              </span>
            )}
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900">
            {product.name}
          </h1>

          <p className="mt-4 text-3xl font-bold text-amber-600">
            {formatPrice(product.price)}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Giá đã gồm VAT, chưa gồm phí đăng ký — đăng kiểm.
          </p>

          <ul className="mt-6 space-y-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-slate-700">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-500" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.hotlineHref}
              className="rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
            >
              Gọi {site.hotline}
            </a>
            <Link
              href={`/lien-he?xe=${product.slug}`}
              className="rounded-md border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
            >
              Yêu cầu báo giá
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Bảo hành: {product.warranty} · Kích thước lọt lòng:{" "}
            {product.dimensions} mm
          </p>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-bold text-slate-900">Thông số kỹ thuật</h2>
        <dl className="mt-4 grid gap-x-8 sm:grid-cols-2">
          {product.specs.map((s) => (
            <div
              key={s.label}
              className="flex justify-between gap-4 border-b border-slate-200 py-3 text-sm"
            >
              <dt className="text-slate-500">{s.label}</dt>
              <dd className="text-right font-medium text-slate-900">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-slate-900">Xe cùng loại</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
