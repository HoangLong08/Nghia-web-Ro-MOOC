import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { formatPostDate, getPost, posts } from "@/data/posts";
import { site } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Không tìm thấy bài viết" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-amber-600">
        {post.tag}
      </p>
      <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-slate-500">
        {formatPostDate(post.date)} · {post.readingMinutes} phút đọc · {post.author}
      </p>

      <p className="mt-6 border-l-4 border-amber-400 pl-4 text-lg leading-relaxed text-slate-700">
        {post.excerpt}
      </p>

      <div className="mt-8 space-y-5">
        {post.blocks.map((block, i) => {
          if (block.type === "h2") {
            return (
              <h2 key={i} className="pt-2 text-xl font-bold text-slate-900">
                {block.text}
              </h2>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={i} className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={i} className="leading-relaxed text-slate-700">
              {block.text}
            </p>
          );
        })}
      </div>

      <div className="mt-12 rounded-xl bg-slate-900 p-6 text-white">
        <h2 className="text-lg font-bold">Cần tư vấn cho đội xe của bạn?</h2>
        <p className="mt-1 text-sm text-slate-300">
          Gọi {site.hotline} hoặc gửi yêu cầu, chúng tôi phản hồi trong 24 giờ.
        </p>
        <Link
          href="/lien-he"
          className="mt-4 inline-block rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-400"
        >
          Yêu cầu báo giá
        </Link>
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-bold text-slate-900">Bài viết khác</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-xl border border-slate-200 p-4 transition-colors hover:border-amber-400 hover:bg-amber-50"
              >
                <p className="text-sm font-semibold leading-snug text-slate-900">
                  {p.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {formatPostDate(p.date)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
