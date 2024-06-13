import { getLocale } from "next-intl/server";
import className from "./styles";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  return (
    <html {...{ ...(locale ? { lang: locale } : {}) }}>
      <body className={className.body.toClassName()}>{children}</body>
    </html>
  );
}
