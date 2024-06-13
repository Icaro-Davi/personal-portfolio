import type { RichTranslationValues } from "next-intl";

const i18nRichElements: RichTranslationValues = {
    b: (chunk) => <b>{chunk}</b>,
}

export default i18nRichElements;