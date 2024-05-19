import { IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io5';
import GlitchLink from '@/components/Glitch/Link';
import ContactMailForm from "@/components/Form/ContactMail";
import IconShape from "@/components/IconShape";

import type { FC } from "react";
import { IoLogoLinkedin } from 'react-icons/io';

const whatsappEndpoint = new URL("https://api.whatsapp.com/send");
whatsappEndpoint.searchParams.append('phone', '5588996212821');
whatsappEndpoint.searchParams.append('text', 'Olá Cheguei através do seu portfolio, vamos conversar!');

const Contact: FC = () => (
    <div className="p-2 h-full flex overflow-auto">
        <div className='m-auto max-w-96'>
            <h2 className='text-primary pb-2 text-center font-bold'>
                Deseja entrar em <GlitchLink href="mailto:icarodaviduarte@gmail.com">contato</GlitchLink> comigo 😀? Mande-me uma <GlitchLink href="mailto:icarodaviduarte@gmail.com">mensagem ✉️</GlitchLink>!
            </h2>
            <ContactMailForm mailto="icarodaviduarte@gmail.com" />
            <div className="flex flex-wrap justify-center gap-2 mt-2">
                <IconShape
                    icon={IoLogoWhatsapp}
                    title='Whatsapp'
                    href={whatsappEndpoint.href}
                />
                <IconShape
                    icon={IoLogoGithub}
                    title="Github"
                    href='https://github.com/icaro-davi'
                />
                <IconShape
                    icon={IoLogoLinkedin}
                    title="LinkedIn"
                    href='https://linkedin.com/in/icaro-davi'
                />
            </div>
        </div>
    </div>
);

export default Contact;