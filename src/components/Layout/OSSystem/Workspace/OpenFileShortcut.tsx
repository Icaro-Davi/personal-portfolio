'use client';

import { memo } from "react";
import IconFactory from "../IconFactory";
import className from "./styles";
import useOSSystemContext from "../hooks/useOSSystemContext";

import type { FC, ReactNode } from "react";
import type { AppIconsName } from "../types";

const OpenFileShortcut: FC<{
    title: string;
    iconName: AppIconsName;
    fileExtension?: string;
    openWindowId: string;
    componentTarget?: ReactNode;
}> = props => {
    const { dispatch } = useOSSystemContext();

    const onClickOpenWindow = () => {
        dispatch({
            type: 'openWindow',
            payload: {
                id: props.openWindowId,
                title: props.title,
                iconName: props.iconName,
                children: props.componentTarget
            }
        });
    }

    return (
        <a onClick={onClickOpenWindow} className={className.shortcutAppWrapper.toClassName()} title={props.title}>
            <div className="w-11">
                {IconFactory(props.iconName, true)}
            </div>
            <span className={className.shortcutAppTitle.toClassName()}>
                {props.title}{props.fileExtension}
            </span>
        </a>
    );
}

export default memo(OpenFileShortcut);