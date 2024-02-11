import type { Metadata } from "next";
import "./globals.css";

import { Silkscreen } from "next/font/google";
const silkscreen = Silkscreen({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Icaro Davi Dev",
  description: "Olá meu nome é Icaro Davi e sou um desenvolvedor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${silkscreen.className} w-screen h-screen flex`}>{children}</body>
    </html>
  );
}
