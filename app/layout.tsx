import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Mind of Najah | Curriculum + Education", template: "%s | Mind of Najah" },
  description: siteConfig.description,
  openGraph: { title: "Mind of Najah", description: siteConfig.description, url: siteConfig.url, siteName: "Mind of Najah", type: "website" },
  twitter: { card: "summary_large_image", title: "Mind of Najah", description: siteConfig.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
