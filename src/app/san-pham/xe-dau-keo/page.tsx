import type { Metadata } from "next";
import { ProductListing } from "@/components/product-listing";
import { getLine } from "@/data/catalog";
import { first, type SearchParams } from "@/lib/search-params";

const line = getLine("xe-dau-keo")!;

export const metadata: Metadata = {
  title: "Xe đầu kéo",
  description: line.description,
};

export default async function TractorsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  return (
    <ProductListing
      line="xe-dau-keo"
      lineName={line.name}
      lineDescription={line.description}
      basePath={line.href}
      categorySlug={first(params["danh-muc"])}
      sortKey={first(params["sap-xep"]) ?? "moi-nhat"}
    />
  );
}
