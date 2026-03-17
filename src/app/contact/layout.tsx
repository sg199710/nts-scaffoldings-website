import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | NTS Scaffoldings Private Limited",
  description: "Get in touch with NTS Scaffoldings for scaffolding rental quotes. D23, Sector 63, Noida.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
