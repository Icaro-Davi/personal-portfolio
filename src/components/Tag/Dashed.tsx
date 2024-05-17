import CreateTailwindStyle from "@/utils/CreateTailwindStyle";
import GlitchText from "../Glitch/Text";

import type { AnchorHTMLAttributes, FC, ReactNode } from "react";
import type { IconType } from "react-icons";

const className = {
    tag: new CreateTailwindStyle([
        'text-xs',
        'py-0.5',
        'px-1',
        'border-2',
        'border-dashed',
        'flex',
        'gap-1',
        'items-center'
    ])
}

type DashedTagProps = { children?: ReactNode; icon?: IconType; } & AnchorHTMLAttributes<HTMLAnchorElement>;

const Dashed: FC<DashedTagProps> = ({ children, className: CN, icon: Icon, ...props }) => (
    <a {...props} className={className.tag.toClassName(CN)}>
        {Icon && (
            <Icon size={14} />
        )}
        {props.href ? (
            <GlitchText>
                {children}
            </GlitchText>
        ) : children}
    </a>
);

export default Dashed;