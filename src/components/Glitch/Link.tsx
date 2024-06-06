import GlitchText from './Text';
import type { AnchorHTMLAttributes, FC, ReactNode } from "react";

export type GlitchLinkProps = {
    children?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const GlitchLink: FC<GlitchLinkProps> = ({ children, ...props }) => (
    <a {...props}>
        <GlitchText>{children}</GlitchText>
    </a>
);

export default GlitchLink;