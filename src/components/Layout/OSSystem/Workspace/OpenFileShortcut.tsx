'use client';

import { memo } from "react";
import IconFactory from "../IconFactory";
import className from "./styles";
import useOSSystemContext from "../hooks/useOSSystemContext";
import TextBorder from "@/components/TextBorder";
import { colors } from "@/settings/tailwind/theme";

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
                <TextBorder color={colors.secondary}>{props.title}{props.fileExtension}</TextBorder>
            </span>
        </a>
    );
}

export default memo(OpenFileShortcut);