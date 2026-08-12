import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Mua bán sơ mi rơ moóc`,
    template: `%s | ${site.name}`,
  },
  description:
    "Cung cấp sơ mi rơ moóc sàn, xương, lửng, ben, bồn xi măng và bồn xăng dầu. Giá tốt, hồ sơ đăng kiểm đầy đủ, giao xe toàn quốc.",
  keywords: [
    "sơ mi rơ moóc",
    "mooc sàn",
    "mooc xương",
    "mooc ben",
    "bồn xi măng rời",
    "rơ moóc giá rẻ",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
