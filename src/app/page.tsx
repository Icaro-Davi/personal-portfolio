import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { getTranslations } from "next-intl/server";
import FileWindow from "@/components/FileWindow/FileWindow";
import GradientDividerFromCenter from "@/components/Divider/GradientDividerFromCenter";
import GlitchText from "@/components/Glitch/Text";
import { CookieKey } from "@/utils/cookies/keys";
import i18nStaticValues from "@/utils/i18n/staticValues";
import i18nRichElements from "@/utils/i18n/richElements";
import ScreenEffect from "@/components/Layout/OSSystem/ScreenEffect/ScreenEffect";

import type { Metadata } from "next";
import BrazilFlag from "@/components/Icons/BrasilFlag";
import EUAFlag from "@/components/Icons/EUAFlag";

export async function generateMetadata() {
  const locale = cookies().get(CookieKey.LOCALE)?.value ?? "pt";
  const t = await getTranslations({ locale, namespace: "Root" });
  const translateValues = {
    ...i18nStaticValues,
    ownerName: i18nStaticValues.ownerName.split(" ").slice(0, 2).join(" "),
  };
  const title = t("metadata.title", translateValues);
  const description = t("metadata.description", translateValues);
  const url = new URL(`${process.env.ABSOLUTE_PATH_URL ?? ""}/`);

  const metadata: Metadata = {
    title,
    description,
    metadataBase: url,
    openGraph: {
      title,
      description,
      locale,
      type: "website",
      images: "/icaro_picture.jpg",
      url: "/",
      siteName: t("metadata.site_name", translateValues),
    },
  };

  return metadata;
}

export default async function Main() {
  const locale = cookies().get(CookieKey.LOCALE)?.value ?? "pt";
  const t = await getTranslations({ locale, namespace: "Root" });
  const st = await getTranslations({ locale, namespace: "_Shared" });
  const translationVariables = {
    ...i18nStaticValues,
    ownerName: i18nStaticValues.ownerName.split(" ").slice(0, 2).join(" "),
  };

  return (
    <Fragment>
      <main className="flex justify-center items-center w-full h-full">
        <FileWindow windowId="welcome" title={t("window.title")}>
          <div className="w-full h-full flex justify-center items-center p-2">
            <div className="min-w-[300px] min-h-2 bg-background p-4 text-white border-white border-2 border-opacity-10">
              <div className="flex flex-wrap items-center justify-center">
                <div className="w-32 h-32 flex-shrink-0 relative mr-2 rounded-full overflow-hidden border-white border-2 border-opacity-45">
                  <Image
                    priority
                    fill={true}
                    sizes="15vw"
                    src="/icaro_picture.jpg"
                    title={t("window.card.image.title", translationVariables)}
                    alt={t("window.card.image.alt", translationVariables)}
                    className="object-contain"
                  />
                </div>
                <div className="text-lg min-w-[250px] max-w-[600px]">
                  <h2 className="text-xl font-bold pb-0">
                    {t("window.card.title", translationVariables)}
                  </h2>
                  <p className="text-lg">
                    {t.rich("window.card.sub_title", i18nRichElements)}
                  </p>
                  <GradientDividerFromCenter />
                  <div className="flex-shrink-0">
                    <h3 className="text-md pb-2">
                      {t("window.card.locale_links_description")}
                    </h3>
                    <div className="flex">
                      <Link
                        href="/pt"
                        title={t("window.card.title_link", {
                          locale_name: st("locale_name.pt"),
                        })}
                        className="flex items-center gap-1 mr-2 py-1 px-2 border-white border-2 border-opacity-10"
                      >
                        <BrazilFlag />
                        <GlitchText className="text-xs">
                          {st("locale_name.pt")}
                        </GlitchText>
                      </Link>
                      <Link
                        href="/en"
                        title={t("window.card.title_link", {
                          locale_name: st("locale_name.en"),
                        })}
                        className="flex items-center gap-1 mr-2 py-1 px-2 border-white border-2 border-opacity-10"
                      >
                        <EUAFlag />
                        <GlitchText className="text-xs">
                          {st("locale_name.en")}
                        </GlitchText>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FileWindow>
      </main>
      <ScreenEffect />
    </Fragment>
  );
}
