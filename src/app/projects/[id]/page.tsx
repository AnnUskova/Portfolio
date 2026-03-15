import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/views/project-detail";
import { getProjectMetadata } from "@/lib/metadata";
import { projectTranslations } from "@/lib/translations";

type PageProps = {
  params: Promise<{ id: string }>;
};

const HIDDEN_PROJECT_IDS = new Set([5, 6, 8, 10]);

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const projectId = Number.parseInt(id, 10);
  if (!Number.isFinite(projectId) || HIDDEN_PROJECT_IDS.has(projectId)) {
    return getProjectMetadata(Number.NaN);
  }
  return getProjectMetadata(projectId);
}

export async function generateStaticParams() {
  return projectTranslations.en
    .filter((project) => !HIDDEN_PROJECT_IDS.has(project.id))
    .map((project) => ({ id: String(project.id) }));
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const projectId = Number.parseInt(id, 10);
  if (!Number.isFinite(projectId) || HIDDEN_PROJECT_IDS.has(projectId)) {
    notFound();
  }

  return <ProjectDetail />;
}
