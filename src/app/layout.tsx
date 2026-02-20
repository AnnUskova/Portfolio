import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anna Uskova — Product Designer",
  description:
    "UX/UI Designer with 8+ years of experience crafting DeFi protocols, high-load systems, and products for mass audiences.",
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
