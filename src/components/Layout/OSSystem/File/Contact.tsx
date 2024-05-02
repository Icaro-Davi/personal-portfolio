import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import ContactMailForm from "@/components/Form/ContactMail";
import IconShape from "@/components/IconShape";

import type { FC } from "react";

const Contact: FC = () => (

    <div className="p-2 h-full flex overflow-auto">
        <div className='m-auto'>
            <ContactMailForm mailto="icarodaviduarte@gmail.com" />
            <div className="flex flex-wrap justify-center gap-2 mt-2">
                <IconShape
                    icon={IoLogoInstagram}
                    title='Instagram'
                    href='https://instagram.com/icaro_davi_'
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