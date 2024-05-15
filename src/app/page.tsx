import OSSystem from "@/components/Layout/OSSystem";
import type { Metadata } from "next";

const title = "Icaro Davi Dev | Portfólio";
const description = "Olá meu nome é Icaro Davi e esté é o meu portfólio, entre e descubra mais sobre mim.";
export const metadata: Metadata = {
  title, description,
  creator: 'Icaro Davi Duarte Romualdo',
  keywords: ['Portfolio', 'Jobs', 'FullStack', 'FrontEnd', 'BackEnd', 'Developer'],
  metadataBase: new URL(process.env.ABSOLUTE_PATH_URL ?? ''),
  openGraph: {
    title, description,
    locale: 'pt_BR',
    type: 'website',
    images: '/coffee_os.png',
    url: '/',
    siteName: 'Icaro Davi Dev'
  }
};

export default function Main() {
  return (
    <main className="flex flex-1">
      <OSSystem />
    </main>
  );
}
