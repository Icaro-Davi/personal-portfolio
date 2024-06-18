import { getTranslations } from "next-intl/server";
import OSSystem from "@/components/Layout/OSSystem";
import type { Metadata } from "next";
import i18nStaticValues from "@/utils/i18n/staticValues";

type MetadataParams = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: "Index" });
  const translateValues = {
    ...i18nStaticValues,
    ownerName: i18nStaticValues.ownerName.split(' ').slice(0, 2).join(' ')
  }

  const title = t("metadata.title", translateValues);
  const description = t("metadata.description");
  const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(`${process.env.ABSOLUTE_PATH_URL ?? ""}/${locale}`),
    openGraph: {
      title,
      description,
      locale,
      type: "website",
      images: "/coffee_os.png",
      url: `/`,
      siteName: t("metadata.site_name"),
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
