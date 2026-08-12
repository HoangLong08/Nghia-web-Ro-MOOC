import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { getProduct, getProductsByLine } from "@/data/catalog";
import { formatPrice } from "@/lib/format";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProductsByLine("xe-dau-keo").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct("xe-dau-keo", slug);
  if (!product) return { title: "Không tìm thấy xe" };

  const quick = product.quickSpecs.map((s) => `${s.label} ${s.value}`).join(", ");
  return {
    title: product.name,
    description: `${product.name} — ${quick}. ${formatPrice(product.price)}.`,
  };
}

export default async function TractorDetailPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct("xe-dau-keo", slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
