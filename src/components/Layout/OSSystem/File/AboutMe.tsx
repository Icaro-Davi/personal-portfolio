import Image from "next/image";
import { memo } from "react";
import { useTranslations } from "next-intl";
import NerdFaceEmoji from "@/components/Sticks/NerdFace";
import DocumentFile from "@/components/Files/Document";

import type { FC } from "react";
import i18nRichElements from "@/utils/i18n/richElements";
import i18nStaticValues from "@/utils/i18n/staticValues";

const AboutMe: FC = () => {
  const t = useTranslations("Index.file.about_me");
  return (
    <DocumentFile>
      <h2 className="font-bold text-center text-3xl flex flex-wrap justify-center space-x-1 pb-2">
        <span className="flex items-center leading-none">
          {t('document_file.title', i18nStaticValues)}
        </span>
        <NerdFaceEmoji size={36} />
      </h2>
      <div className="pt-4 flex flex-wrap justify-center items-center text-lg">
        <div className="border w-[230px] h-[320px] mr-2 relative">
          <Image
            title={t('document_file.owner_picture.title', i18nStaticValues)}
            alt={t('document_file.owner_picture.alt', i18nStaticValues)}
            src="/icaro_picture.jpg"
            className="w-full h-full object-cover"
            fill={true}
          />
        </div>
        <div className="flex-1 min-w-[300px]">
          <p className="font-medium pt-4 text-justify">
            {t.rich('document_file.paragraphs.1st', i18nRichElements)}
          </p>
          <p className="font-medium pt-4 text-justify">
            {t.rich('document_file.paragraphs.2st', i18nRichElements)}
          </p>
        </div>
        <p className="font-medium pt-4 text-justify">
          {t.rich('document_file.paragraphs.3st', i18nRichElements)}
        </p>
      </div>
    </DocumentFile>
  );
};

export default memo(AboutMe);
