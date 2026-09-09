import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://bhawansewa.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Bhawan Sewa (Ramsagar Builders) | Construction Company in Nepal", template: "%s | Bhawan Sewa" },
  description: "Bhawan Sewa, also known as Ramsagar Builders, provides civil engineering consultation, house design, structural design, construction, roads, public places, infrastructure, renovation, and site inspection all over Nepal.",
  keywords: ["construction company in Nepal", "civil engineering Nepal", "road construction Nepal", "infrastructure construction Nepal", "public works Nepal", "house construction Nepal", "Bhawan Sewa", "Ramsagar Builders"],
  alternates: { canonical: "/" },
  openGraph: { title: "Bhawan Sewa (Ramsagar Builders) | Building better, together", description: "Construction, civil engineering, roads, public places, and infrastructure projects across Nepal.", url: siteUrl, siteName: "Bhawan Sewa", locale: "en_NP", type: "website", images: [{ url: "/images/logo.jpg", width: 1080, height: 1080, alt: "Bhawan Sewa logo" }] },
  twitter: { card: "summary", title: "Bhawan Sewa (Ramsagar Builders)", description: "Construction, infrastructure, road, public works, and civil engineering services across Nepal.", images: ["/images/logo.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
