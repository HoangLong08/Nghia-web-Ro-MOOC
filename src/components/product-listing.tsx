import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProductCard } from "@/components/product-card";
import { getCategoriesByLine, getCategory, getProductsByLine } from "@/data/catalog";
import type { Product, ProductLine } from "@/lib/types";

const sorts = [
  { key: "moi-nhat", label: "Mặc định" },
  { key: "gia-tang", label: "Giá thấp → cao" },
  { key: "gia-giam", label: "Giá cao → thấp" },
  { key: "ten", label: "Tên A → Z" },
];

function sortProducts(list: Product[], key: string): Product[] {
  const sorted = [...list];
  switch (key) {
    case "gia-tang":
      return sorted.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    case "gia-giam":
      return sorted.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
    case "ten":
      return sorted.sort((a, b) => a.name.localeCompare(b.name, "vi"));
    default:
      return sorted;
  }
}

type Props = {
  line: ProductLine;
  lineName: string;
  lineDescription: string;
  basePath: string;
  categorySlug?: string;
  sortKey: string;
};

export function ProductListing({
  line,
  lineName,
  lineDescription,
  basePath,
  categorySlug,
  sortKey,
}: Props) {
  const all = getProductsByLine(line);
  const lineCategories = getCategoriesByLine(line);
  const activeCategory = categorySlug ? getCategory(line, categorySlug) : undefined;

  const filtered = activeCategory
    ? all.filter((p) => p.category === activeCategory.slug)
    : all;
  const list = sortProducts(filtered, sortKey);

  const buildHref = (next: { category?: string; sort?: string }) => {
    const category = next.category ?? activeCategory?.slug;
    const sort = next.sort ?? sortKey;
    const query: Record<string, string> = {};
    if (category) query["danh-muc"] = category;
    if (sort && sort !== "moi-nhat") query["sap-xep"] = sort;
    return { pathname: basePath, query };
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Sản phẩm", href: "/san-pham" },
          { label: lineName, href: activeCategory ? basePath : undefined },
          ...(activeCategory ? [{ label: activeCategory.name }] : []),
        ]}
      />

      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        {activeCategory ? activeCategory.name : lineName}
      </h1>
      <p className="mt-2 max-w-3xl text-slate-600">
        {activeCategory ? activeCategory.description : lineDescription}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href={buildHref({ category: "" })}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            activeCategory
              ? "border-slate-200 text-slate-600 hover:border-slate-400"
              : "border-slate-900 bg-slate-900 text-white"
          }`}
        >
          Tất cả ({all.length})
        </Link>
        {lineCategories.map((c) => {
          const count = all.filter((p) => p.category === c.slug).length;
          const active = activeCategory?.slug === c.slug;
          return (
            <Link
              key={c.slug}
              href={buildHref({ category: c.slug })}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 text-slate-600 hover:border-slate-400"
              }`}
            >
              {c.name} ({count})
            </Link>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6 text-sm">
        <span className="text-slate-500">Sắp xếp:</span>
        {sorts.map((s) => (
          <Link
            key={s.key}
            href={buildHref({ sort: s.key })}
            className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
              sortKey === s.key
                ? "bg-amber-100 text-amber-800"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {s.label}
          </Link>
        ))}
        <span className="ml-auto text-slate-500">{list.length} xe</span>
      </div>

      {list.length === 0 ? (
        <p className="mt-12 rounded-lg border border-dashed border-slate-300 p-10 text-center text-slate-500">
          Chưa có xe trong danh mục này. Gọi hotline để đặt xe theo yêu cầu.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
