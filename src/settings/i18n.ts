import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "pt"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) return notFound();
  return {
    messages: (await import(`../../locale/${locale}.json`)).default,
  };
});
