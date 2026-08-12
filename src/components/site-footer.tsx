import Link from "next/link";
import { categories } from "@/data/catalog";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-2 text-sm leading-relaxed">{site.tagline}</p>
          <dl className="mt-4 space-y-1 text-sm">
            <div>
              <dt className="inline text-slate-400">Địa chỉ: </dt>
              <dd className="inline">{site.address}</dd>
            </div>
            <div>
              <dt className="inline text-slate-400">Giờ làm việc: </dt>
              <dd className="inline">{site.workingHours}</dd>
            </div>
            <div>
              <dt className="inline text-slate-400">MST: </dt>
              <dd className="inline">{site.taxCode}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Danh mục xe
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/san-pham?danh-muc=${c.slug}`}
                  className="hover:text-amber-400"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Liên hệ báo giá
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              Hotline:{" "}
              <a href={site.hotlineHref} className="font-semibold text-amber-400">
                {site.hotline}
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${site.email}`} className="hover:text-amber-400">
                {site.email}
              </a>
            </li>
            <li>Zalo: {site.zalo}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. Giá và thông số có thể thay đổi
        theo từng lô xe.
      </div>
    </footer>
  );
}
