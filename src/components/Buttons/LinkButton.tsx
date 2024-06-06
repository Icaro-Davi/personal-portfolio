import className from "./styled";
import GlitchText from '@/components/Glitch/Text';

import type { AnchorHTMLAttributes, FC, ReactNode } from "react";
import type { IconType } from "react-icons";

type LinkButtonProps = {
    children?: ReactNode;
    href?: string;
    icon?: IconType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkButton: FC<LinkButtonProps> = ({ icon: Icon, children, href, className: CN, ...props }) => (
    <a
        href={href}
        target="_blank"
        className={
            className.linkButton
                .callConditional('disabled', !href)
                .toClassName(CN)
        }
        {...props}
    >
        {href ? (
            <GlitchText>{children}</GlitchText>
        ) : children}
        {Icon && (
            <Icon />
        )}
    </a>
)

export default LinkButton;