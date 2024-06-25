import { NextRequest, NextResponse } from "next/server";
import i18nMiddleware from "./middleware/i18n";
import { CookieKey } from "./utils/cookies/keys";
import { locales } from "./settings/i18n";

export default async function middleware(req: NextRequest) {
  let headers;

  if (new RegExp("/(?=pt|en).*").test(req.url)) {
    const i18nResponse = await i18nMiddleware(req);
    headers = new Headers(i18nResponse.headers);
  } else {
    if (!req.cookies.get(CookieKey.LOCALE)) {
      const defaultLocale = "pt";
      const acceptLanguage = req.headers.get("accept-language")?.split(";")[0];
      const locale = acceptLanguage
        ? locales.find((locale) => acceptLanguage.includes(locale)) ??
          defaultLocale
        : defaultLocale;
      const response = NextResponse.next();
      response.cookies.set(CookieKey.LOCALE, locale, {
        sameSite: "strict",
        httpOnly: false,
      });
      headers = new Headers(response.headers);
    }
  }

  return NextResponse.next({ headers });
}
export const config = {
  matcher: [`/((?!_next|favicon.ico).*)`],
};
