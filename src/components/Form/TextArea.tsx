import Wrapper from "./Wrapper";
import className from "./sharedStyles";

import type { FC, TextareaHTMLAttributes } from "react";

type TextAreaProps = {
    title?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: FC<TextAreaProps> = ({ title, ...props }) => (
    <Wrapper title={title}>
        <textarea
            {...props}
            rows={4}
            className={className.formElementStyle.toClassName()}
        />
    </Wrapper>
);

export default TextArea;