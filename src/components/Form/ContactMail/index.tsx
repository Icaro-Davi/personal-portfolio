import type { FC } from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import SubmitFormButton from "../Submit";

type ContactMailProps = {
    mailto: string;
}

const ContactMailForm: FC<ContactMailProps> = (props) => {
    return (
        <form method="POST" action={`mailto:${props.mailto}`} encType="text/plain" className="m-auto">
            <Input
                name="name"
                type='text'
                title="Nome:"
                placeholder="John Doe"
            />
            <Input
                name="email"
                type='email'
                title="Email:"
                placeholder="johndoe@example.com"
            />
            <TextArea 
                title="Mensagem:"
                name="message"
                placeholder="Hello World my friend!"
            />
            <SubmitFormButton title="Enviar" />
        </form>
    );
}

export default ContactMailForm;