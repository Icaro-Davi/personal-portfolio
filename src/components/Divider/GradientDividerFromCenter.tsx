import { memo } from "react";
import className from "./styles";

import type { FC } from "react";

const GradientDividerFromCenter: FC = () => (
    <div className={className.gradientDivider.toClassName()}></div>
);

export default memo(GradientDividerFromCenter);