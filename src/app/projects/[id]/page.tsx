import type { Metadata } from "next";
import ProjectDetail from "@/views/project-detail";
import { getProjectMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const projectId = Number.parseInt(id, 10);
  return getProjectMetadata(projectId);
}

export default function Page() {
  return <ProjectDetail />;
}
