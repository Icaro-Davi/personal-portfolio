import className from "./styled";

import type { FC, ReactNode } from "react";

const LinkButton: FC<{ children?: ReactNode; href?: string; }> = props => (
    <a
        href={props.href}
        target="_blank"
        className={
            className.button
                .callConditional('disabled', !props.href)
                .toClassName()
        }
    >{props.children}</a>
)

export default LinkButton;