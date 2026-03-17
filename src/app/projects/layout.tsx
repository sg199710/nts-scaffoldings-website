import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | NTS Scaffoldings Private Limited",
  description:
    "Explore our portfolio of scaffolding projects across India — infrastructure, industrial, and commercial.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
