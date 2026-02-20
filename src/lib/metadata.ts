import type { Metadata } from "next";
import annaPhoto from "@/assets/anna_photo.webp";
import glacisDappImg from "@/assets/GL_dApp_1770754812223.webp";
import zeroDeltaImg from "@/assets/zero_delta_main.webp";
import xSwapImg from "@/assets/xswap_main.webp";
import skiziCoverImg from "@/assets/skizi_cover_new.webp";
import twoGoCoverImg from "@/assets/2go_cover.webp";
import moonbeamImg from "@/assets/moonbeam_cover.webp";
import cryptovecheImg from "@/assets/cryptoveche_cover.webp";
import uxResearchImg from "@/assets/ux_research_cover.webp";
import pholendImg from "@/assets/pholend_cover.webp";
import dickbuttsImg from "@/assets/dickbutts_cover_v2.webp";
import zeroDeltaCoverImg from "@/assets/zero_delta_cover.webp";
import zoodaoCoverImg from "@/assets/zoodao_cover_v3.webp";
import maatCoverImg from "@/assets/maat_pd_cover_v3.webp";
import { projectTranslations } from "@/lib/translations";

const SITE_NAME = "Anna Uskova Portfolio";
const BRAND_TITLE = "Anna Uskova — Product Designer";
const DEFAULT_DESCRIPTION =
  "UX/UI Designer with 8+ years of experience crafting DeFi protocols, high-load systems, and products for mass audiences.";
const DEFAULT_IMAGE = annaPhoto.src;

const PROJECT_IMAGES: Record<number, string> = {
  1: glacisDappImg.src,
  2: xSwapImg.src,
  3: skiziCoverImg.src,
  4: twoGoCoverImg.src,
  5: moonbeamImg.src,
  6: cryptovecheImg.src,
  7: uxResearchImg.src,
  8: pholendImg.src,
  9: dickbuttsImg.src,
  10: maatCoverImg.src,
  11: zeroDeltaCoverImg.src,
  12: zoodaoCoverImg.src,
  13: maatCoverImg.src,
  14: zeroDeltaImg.src,
};

function resolveSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;
  if (!raw) return "http://localhost:3000";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return `https://${raw}`;
}

export const metadataBase = new URL(resolveSiteUrl());

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: SITE_NAME,
      url: path,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const defaultSiteMetadata = buildPageMetadata({
  title: BRAND_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export function getProjectMetadata(projectId: number): Metadata {
  const project = projectTranslations.en.find((item) => item.id === projectId);
  const image = PROJECT_IMAGES[projectId] ?? DEFAULT_IMAGE;

  if (!project) {
    return buildPageMetadata({
      title: `Project Not Found | ${BRAND_TITLE}`,
      description: DEFAULT_DESCRIPTION,
      path: "/projects",
      image,
    });
  }

  return buildPageMetadata({
    title: `${project.title} | ${BRAND_TITLE}`,
    description: project.description,
    path: `/projects/${projectId}`,
    image,
  });
}
