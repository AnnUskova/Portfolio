import type { Metadata } from "next";
import Home from "@/views/home";
import { buildPageMetadata } from "@/lib/metadata";
import annaPhoto from "@/assets/anna_photo.webp";

export const metadata: Metadata = buildPageMetadata({
  title: "Anna Uskova — Product Designer",
  description:
    "UX/UI Designer with 7+ years of experience crafting DeFi protocols, high-load systems, and products for mass audiences.",
  path: "/",
  image: annaPhoto.src,
});

export default function Page() {
  return <Home />;
}
