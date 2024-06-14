import UnderlineGlitchLinkButton from "@/components/Buttons/UnderlineLinkButton";
import type { RichTranslationValues } from "next-intl";

const i18nRichElements: RichTranslationValues = {
    b: (chunk) => <b>{chunk}</b>,
    TextLinkMail: (chunk) => <UnderlineGlitchLinkButton href="mailto:icarodaviduarte@gmail.com">{chunk}</UnderlineGlitchLinkButton> 
}

export default i18nRichElements;