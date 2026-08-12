import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { getPartGroup, partGroups, parts } from "@/data/parts";
import { site } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { first, type SearchParams } from "@/lib/search-params";

export const metadata: Metadata = {
  title: "Phụ tùng",
  description:
    "Phụ tùng xe đầu kéo và sơ mi rơ moóc: cụm trục, phanh hơi, thủy lực ben, mâm kéo, chân chống, lốp và đèn.",
};

export default async function PartsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const groupSlug = first(params["nhom"]);
  const activeGroup = groupSlug ? getPartGroup(groupSlug) : undefined;
  const list = activeGroup
    ? parts.filter((p) => p.group === activeGroup.slug)
    : parts;

  const hrefFor = (slug?: string) => ({
    pathname: "/phu-tung",
    query: slug ? { nhom: slug } : {},
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Phụ tùng", href: activeGroup ? "/phu-tung" : undefined },
          ...(activeGroup ? [{ label: activeGroup.name }] : []),
        ]}
      />

      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        {activeGroup ? activeGroup.name : "Phụ tùng xe đầu kéo & rơ moóc"}
      </h1>
      <p className="mt-2 max-w-3xl text-slate-600">
        {activeGroup
          ? activeGroup.description
          : "Hàng chính hãng, sẵn kho tại Bình Dương. Giao trong ngày ở khu vực TP.HCM và các tỉnh lân cận, các tỉnh khác gửi xe khách trong 24 giờ."}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href={hrefFor()}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            activeGroup
              ? "border-slate-200 text-slate-600 hover:border-slate-400"
              : "border-slate-900 bg-slate-900 text-white"
          }`}
        >
          Tất cả ({parts.length})
        </Link>
        {partGroups.map((g) => {
          const count = parts.filter((p) => p.group === g.slug).length;
          const active = activeGroup?.slug === g.slug;
          return (
            <Link
              key={g.slug}
              href={hrefFor(g.slug)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 text-slate-600 hover:border-slate-400"
              }`}
            >
              {g.name} ({count})
            </Link>
          );
        })}
      </div>

      <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Phụ tùng</th>
              <th className="px-4 py-3 font-medium">Hãng</th>
              <th className="px-4 py-3 font-medium">Tình trạng</th>
              <th className="px-4 py-3 text-right font-medium">Giá tham khảo</th>
            </tr>
          </thead>
          <tbody>
            {list.map((part) => (
              <tr key={part.slug} className="border-t border-slate-200 align-top">
                <td className="px-4 py-3">
                  <p className="font-medium text-slate-900">{part.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{part.note}</p>
                </td>
                <td className="px-4 py-3 text-slate-600">{part.brand}</td>
                <td className="px-4 py-3">
                  {part.inStock ? (
                    <span className="rounded bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                      Có sẵn
                    </span>
                  ) : (
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                      Đặt hàng
                    </span>
                  )}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-amber-600">
                  {formatPrice(part.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-900 p-6 text-white">
        <div>
          <h2 className="text-lg font-bold">Không thấy phụ tùng bạn cần?</h2>
          <p className="mt-1 text-sm text-slate-300">
            Gửi mã phụ tùng hoặc ảnh chụp, chúng tôi kiểm tra kho và báo giá ngay.
          </p>
        </div>
        <a
          href={site.hotlineHref}
          className="rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400"
        >
          Gọi {site.hotline}
        </a>
      </div>
    </div>
  );
}
