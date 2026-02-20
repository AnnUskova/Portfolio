import type { Metadata } from "next";
import NotFound from "@/views/not-found";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "404 | Anna Uskova — Product Designer",
  description: "Page not found.",
  path: "/404",
  image: "/glacis_light_404.webp",
});

export default function Page() {
  return <NotFound />;
}
