import { getTranslations } from "next-intl/server";
import OSSystem from "@/components/Layout/OSSystem";
import type { Metadata } from "next";

type MetadataParams = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: "Index" });
  const ownerName = "Icaro Davi";

  const title = t("metadata.title", { ownerName });
  const description = t("metadata.description", { ownerName });
  const metadata: Metadata = {
    title,
    description,
    creator: "Icaro Davi Duarte Romualdo",
    keywords: [
      "Portfolio",
      "Jobs",
      "FullStack",
      "FrontEnd",
      "BackEnd",
      "Developer",
    ],
    metadataBase: new URL(`${process.env.ABSOLUTE_PATH_URL ?? ""}/${locale}`),
    openGraph: {
      title,
      description,
      locale: "pt",
      type: "website",
      images: "/coffee_os.png",
      url: "/",
      siteName: t("metadata.site_name", { ownerName }),
    },
  };

  return metadata;
}

export default function Main() {
  return (
    <main className="flex flex-1">
      <OSSystem />
    </main>
  );
}
