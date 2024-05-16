import className from "./styled";
import GlitchText from '@/components/Glitch/Text';

import type { FC, ReactNode } from "react";
import type { IconType } from "react-icons";

const LinkButton: FC<{ children?: ReactNode; href?: string; icon?: IconType }> = ({ icon: Icon, children, href, ...props }) => (
    <a
        href={href}
        target="_blank"
        className={
            className.button
                .callConditional('disabled', !href)
                .toClassName()
        }
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