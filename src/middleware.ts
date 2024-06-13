import { NextRequest, NextResponse } from "next/server";
import i18nMiddleware from "./middleware/i18n";

export default async function middleware(req: NextRequest) {
  const response = await i18nMiddleware(req);
  const headers = new Headers(response.headers);
  return NextResponse.next({ headers });
}

export const config = {
  matcher: [`/((?!_next|favicon.ico)(?=pt|en)?.*)`],
};
