import { memo } from "react";
import type { FC, HTMLAttributes, ReactNode } from "react";
import className from "./styles";

type TextBorderProps = HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode;
    color?: string;
}

const TextBorder: FC<TextBorderProps> = ({ color, children, ...props }) => {
    const cn = className.text
        .callConditional('borderColor', color)
        .toClassName(props.className);
    return (
        <span {...props} className={cn}>
            {children}
        </span>
    );
}

export default memo(TextBorder);