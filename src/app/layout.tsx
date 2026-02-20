import type { Metadata } from "next";
import { defaultSiteMetadata, metadataBase } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  ...defaultSiteMetadata,
  metadataBase,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
