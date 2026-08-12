import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { formatPostDate, posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Kinh nghiệm chọn xe, bảo dưỡng rơ moóc và thủ tục đăng ký đăng kiểm cho nhà xe.",
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [latest, ...rest] = sorted;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Breadcrumb items={[{ label: "Blog" }]} />

      <h1 className="mt-3 text-3xl font-bold text-slate-900">Blog</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Kinh nghiệm thực tế từ xưởng và phòng kinh doanh: chọn xe, bảo dưỡng và
        giấy tờ.
      </p>

      {latest && (
        <Link
          href={`/blog/${latest.slug}`}
          className="mt-10 block rounded-xl border border-slate-200 p-6 transition-colors hover:border-amber-400 hover:bg-amber-50"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
            Mới nhất · {latest.tag}
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-snug text-slate-900">
            {latest.title}
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">{latest.excerpt}</p>
          <p className="mt-4 text-sm text-slate-500">
            {formatPostDate(latest.date)} · {latest.readingMinutes} phút đọc ·{" "}
            {latest.author}
          </p>
        </Link>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {rest.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-xl border border-slate-200 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {post.tag}
            </p>
            <h2 className="mt-2 text-lg font-semibold leading-snug text-slate-900">
              <Link href={`/blog/${post.slug}`} className="hover:text-amber-600">
                {post.title}
              </Link>
            </h2>
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
  );
}
