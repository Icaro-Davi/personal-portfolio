import { memo } from "react";
import className from "./styles";

import type { FC } from "react";

const GradientDividerFromCenter: FC<{ toVertical?: boolean }> = props => {
    className.gradientDivider.callConditional('direction', !props.toVertical)
    return (
        <span className={className.gradientDivider.toClassName()}></span>
    );
}

export default memo(GradientDividerFromCenter);