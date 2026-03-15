import type { Metadata } from "next";
import Home from "@/views/home";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Anna Uskova — Product Designer",
  description:
    "UX/UI Designer with 7+ years of experience crafting DeFi protocols, high-load systems, and products for mass audiences.",
  path: "/",
  image: "/og_main.png",
});

export default function Page() {
  return <Home />;
}
