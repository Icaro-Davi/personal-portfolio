import { cookies } from "next/headers";
import { CookieKey } from "@/utils/cookies/keys";
import className from "./styles";
import "./globals.css";
import type { Metadata } from "next";

export function generateMetadata() {
  const url = new URL(`${process.env.ABSOLUTE_PATH_URL ?? ""}/`);
  const metadata: Metadata = {
    creator: "Icaro Davi Duarte Romualdo",
    keywords: [
      "Portfolio",
      "Jobs",
      "FullStack",
      "FrontEnd",
      "BackEnd",
      "Developer",
    ],
    alternates: {
      canonical: url,
    },
  };

  return metadata;
}

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
