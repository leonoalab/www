import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-data";

const inter = Nunito_Sans({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: `${site.publicName} · ${site.baseline}`,
  description: "Asociación dedicada a software, formación tecnológica y proyectos digitales para necesidades reales.",
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    title: `${site.publicName} · ${site.baseline}`,
    description: "Proyectos sociales, tecnología útil y acompañamiento cercano.",
    url: `https://${site.domain}`,
    siteName: site.publicName,
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
