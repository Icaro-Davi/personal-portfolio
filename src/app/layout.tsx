import { cookies } from "next/headers";
import { CookieKey } from "@/utils/cookies/keys";
import className from "./styles";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = cookies().get(CookieKey.LOCALE)?.value ?? "pt";
  return (
    <html {...{ ...(locale ? { lang: locale } : {}) }}>
      <body className={className.body.toClassName()}>{children}</body>
    </html>
  );
}
