import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { defaultSiteMetadata, metadataBase } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  ...defaultSiteMetadata,
  metadataBase,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
