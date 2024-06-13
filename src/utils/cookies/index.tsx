import Cookie from "js-cookie";
import { CookieKey } from "./keys";

export const ClientCookie = {
  getLocale: () => Cookie.get(CookieKey.LOCALE),
};
