import type { Metadata } from "next";
import "./globals.css";
import className from "./styles";

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
      <body className={className.body.toClassName()}>{children}</body>
    </html>
  );
}
