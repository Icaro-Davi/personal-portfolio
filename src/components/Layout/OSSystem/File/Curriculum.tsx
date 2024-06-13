import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import UnderlineGlitchLinkButton from "@/components/Buttons/UnderlineLinkButton";
import { ClientCookie } from "@/utils/cookies";

import type { FC } from "react";

const Curriculum: FC = () => {
  const DEFAULT_PDF_URL = `/FullStack_pt.pdf`;
  const PDF_URL = `/FullStack_${ClientCookie.getLocale()}.pdf`;
  const [barrierVisibility, setBarrierVisibility] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout>();
  const t = useTranslations("Index.file.curriculum");

  const showBarrier = () => {
    clearTimeout(debounceRef.current);
    setBarrierVisibility(true);
  };
  const hideBarrier = () => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(setBarrierVisibility, 100, false);
  };

  return (
    <div
      className={`h-full relative ${barrierVisibility ? "select-none" : ""}`}
      onMouseEnter={hideBarrier}
      onMouseLeave={showBarrier}
    >
      {barrierVisibility && <div className="absolute w-full h-full" />}
      <object
        data={PDF_URL}
        type="application/pdf"
        className="w-full h-full"
        onErrorCapture={(e) => {
          if (e.type !== "error") return;
          (e.target as HTMLObjectElement).data = DEFAULT_PDF_URL;
        }}
      >
        <div className="text-white text-center p-1">
          <p>
            {t("failed_preview_PDF.message")}
            <UnderlineGlitchLinkButton href={PDF_URL} className="pl-1">
              {t("failed_preview_PDF.click_here_download_button")}.
            </UnderlineGlitchLinkButton>
          </p>
        </div>
      </object>
    </div>
  );
};

export default Curriculum;
