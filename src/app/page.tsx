import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import Maintenance from "@/views/maintenance";

export const metadata: Metadata = buildPageMetadata({
  title: "Anna Uskova — Сайт обновляется",
  description: "Сайтик на редизайне, совсем скоро он вернется обновленный.",
  path: "/",
  image: "/og_main.png",
});

export default function Page() {
  return <Maintenance />;
}
