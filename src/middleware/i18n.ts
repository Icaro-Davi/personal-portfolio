import { locales } from "@/settings/i18n";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  defaultLocale: "pt",
  locales: locales,
});
