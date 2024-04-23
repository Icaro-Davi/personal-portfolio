import { memo } from "react";
import type { FC, HTMLAttributes, ReactNode } from "react";
import className from "./styles";
import { colors } from "@/settings/tailwind/theme";

type TextBorderProps = HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode;
    color?: string;
}

const TextBorder: FC<TextBorderProps> = ({ color, children, style, ...props }) => {
    const cn = className.text.toClassName(props.className);
    return (
        <span
            {...props}
            style={{ ...style, ...{ '--bc': color ?? colors.primary } }}
            className={cn}
        >
            {children}
        </span>
    );
}

export default memo(TextBorder);