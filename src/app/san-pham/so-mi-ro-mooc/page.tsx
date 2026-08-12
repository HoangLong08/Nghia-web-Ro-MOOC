import type { Metadata } from "next";
import { ProductListing } from "@/components/product-listing";
import { getLine } from "@/data/catalog";
import { first, type SearchParams } from "@/lib/search-params";

const line = getLine("so-mi-ro-mooc")!;

export const metadata: Metadata = {
  title: "Sơ mi rơ moóc",
  description: line.description,
};

export default async function TrailersPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  return (
    <ProductListing
      line="so-mi-ro-mooc"
      lineName={line.name}
      lineDescription={line.description}
      basePath={line.href}
      categorySlug={first(params["danh-muc"])}
      sortKey={first(params["sap-xep"]) ?? "moi-nhat"}
    />
  );
}
