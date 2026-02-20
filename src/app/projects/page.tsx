import type { Metadata } from "next";
import Projects from "@/views/projects";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Projects | Anna Uskova — Product Designer",
  description:
    "Portfolio projects: DeFi products, high-load systems, UX research, and digital design cases.",
  path: "/projects",
  image: "/Features_Showcase.webp",
});

export default function Page() {
  return <Projects />;
}
