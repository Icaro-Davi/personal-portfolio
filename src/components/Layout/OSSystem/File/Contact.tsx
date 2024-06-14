import { useTranslations } from 'next-intl';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io5';
import ContactMailForm from "@/components/Form/ContactMail";
import IconShape from "@/components/IconShape";

import type { FC } from "react";
import i18nRichElements from '@/utils/i18n/richElements';


const Contact: FC = () => {
    const t = useTranslations('Index.file.contact');
    const whatsAppEndpoint = new URL("https://api.whatsapp.com/send");
    whatsAppEndpoint.searchParams.append('phone', '5588996212821');
    whatsAppEndpoint.searchParams.append('text', t('whatsapp_submit_message'));

    return (
        <div className="p-2 h-full flex overflow-auto">
            <div className='m-auto max-w-96'>
                <h2 className='text-primary pb-2 text-center font-bold'>
                    {t.rich('form_description', i18nRichElements)}
                </h2>
                <ContactMailForm mailto="icarodaviduarte@gmail.com" />
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <IconShape
                        icon={IoLogoWhatsapp}
                        title='Whatsapp'
                        href={whatsAppEndpoint.href}
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
}

export default Contact;