import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with NTS Scaffoldings for scaffolding rental quotes. ${site.address}. Call ${site.phone} or email ${site.email}.`,
  openGraph: {
    title: "Contact | NTS Scaffoldings Private Limited",
    description: "Contact NTS Scaffoldings for scaffolding and formwork rental. Noida, NCR.",
    url: `${site.baseUrl}/contact`,
  },
  alternates: { canonical: `${site.baseUrl}/contact` },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
