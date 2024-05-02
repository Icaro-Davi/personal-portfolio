import Wrapper from "./Wrapper";
import type { FC, InputHTMLAttributes } from "react";
import className from "./sharedStyles";

type InputProps = {
    title?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ title, ...props }) => (
    <Wrapper title={title}>
        <input
            {...props}
            className={className.formElementStyle.toClassName()}
        />
    </Wrapper>
);

export default Input;