import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import { productHref } from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const href = productHref(product);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg">
      <Link href={href} className="block">
        <ProductImage product={product} className="aspect-[16/9]" />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
            {product.brand}
          </span>
          {product.inStock ? (
            <span className="rounded bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700">
              Có sẵn
            </span>
          ) : (
            <span className="rounded bg-slate-100 px-2 py-0.5 font-medium text-slate-500">
              Đặt hàng
            </span>
          )}
        </div>

        <h3 className="mt-2 text-base font-semibold leading-snug text-slate-900">
          <Link href={href} className="hover:text-amber-600">
            {product.name}
          </Link>
        </h3>

        <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-slate-600">
          {product.quickSpecs.map((s) => (
            <div key={s.label}>
              <dt className="inline text-slate-400">{s.label}: </dt>
              <dd className="inline font-medium text-slate-700">{s.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-lg font-bold text-amber-600">
          {formatPrice(product.price)}
        </p>

        <Link
          href={href}
          className="mt-3 inline-flex justify-center rounded-md border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
        >
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
}
