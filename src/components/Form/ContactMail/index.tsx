import { useTranslations } from "next-intl";
import Input from "../Input";
import TextArea from "../TextArea";
import SubmitFormButton from "../Submit";
import type { FC } from "react";

type ContactMailProps = {
    mailto: string;
}

const ContactMailForm: FC<ContactMailProps> = (props) => {
    const t = useTranslations('Index.file.contact.form_field');
    return (
        <form method="POST" action={`mailto:${props.mailto}`} encType="text/plain" className="m-auto">
            <Input
                name="name"
                type='text'
                title={`${t('name.label')}:`}
                placeholder={t('name.placeholder')}
            />
            <Input
                name="email"
                type='email'
                title={`${t('email.label')}:`}
                placeholder={t('email.placeholder')}
            />
            <TextArea 
                name="message"
                title={`${t('message.label')}:`}
                placeholder={t('message.placeholder')}
            />
            <SubmitFormButton title={t('submit_button')} />
        </form>
    );
}

export default ContactMailForm;