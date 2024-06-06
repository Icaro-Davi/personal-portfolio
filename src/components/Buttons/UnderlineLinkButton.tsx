import GradientDividerFromCenter from "../Divider/GradientDividerFromCenter";
import GlitchLink, { GlitchLinkProps } from "../Glitch/Link";

import type { FC } from "react";

const UnderlineGlitchLinkButton: FC<GlitchLinkProps> = props => (
    <GlitchLink {...props}>
        {props.children}
        <GradientDividerFromCenter />
    </GlitchLink>
);

export default UnderlineGlitchLinkButton;