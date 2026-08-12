import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { site } from "@/data/site";
import { QuoteForm } from "./quote-form";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Gửi yêu cầu báo giá sơ mi rơ moóc. Phản hồi trong 24 giờ làm việc.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const raw = params["xe"];
  const defaultProduct = Array.isArray(raw) ? raw[0] : raw;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumb items={[{ label: "Liên hệ" }]} />

      <h1 className="mt-3 text-3xl font-bold text-slate-900">Liên hệ & báo giá</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Để lại thông tin, đội kinh doanh sẽ gọi lại tư vấn cấu hình phù hợp với
        loại hàng và cung đường của bạn.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="rounded-xl border border-slate-200 p-6">
          <QuoteForm defaultProduct={defaultProduct} />
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl bg-slate-900 p-6 text-white">
            <p className="text-sm uppercase tracking-wide text-slate-400">
              Hotline kinh doanh
            </p>
            <a
              href={site.hotlineHref}
              className="mt-1 block text-2xl font-bold text-amber-400"
            >
              {site.hotline}
            </a>
            <p className="mt-3 text-sm text-slate-300">{site.workingHours}</p>
          </div>

          <dl className="space-y-4 rounded-xl border border-slate-200 p-6 text-sm">
            <div>
              <dt className="font-semibold text-slate-900">Địa chỉ bãi xe</dt>
              <dd className="mt-1 text-slate-600">{site.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-amber-600 hover:text-amber-700"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Zalo</dt>
              <dd className="mt-1 text-slate-600">{site.zalo}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
