import { memo } from "react";
import IconFactory from "../IconFactory";

import type { FC } from "react";
import type { AppIconsName } from "../types";
import className from "./styles";

const ShortcutAppWrapper: FC<{
    title: string;
    iconName: AppIconsName;
}> = props => {
    return (
        <a className={className.shortcutAppWrapper.toClassName()} title={props.title}>
            <div className="w-11">
                {IconFactory(props.iconName, true)}
            </div>
            <span className={className.shortcutAppTitle.toClassName()}>
                {props.title}
            </span>
        </a>
    );
}

export default memo(ShortcutAppWrapper);