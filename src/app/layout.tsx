import "./globals.css";
import className from "./styles";

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
