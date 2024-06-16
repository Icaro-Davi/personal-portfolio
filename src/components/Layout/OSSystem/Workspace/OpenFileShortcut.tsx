'use client';

import { memo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import IconFactory from "../IconFactory";
import className from "./styles";
import useOSSystemContext from "../../../hooks/useOSSystemContext";
import TextBorder from "@/components/TextBorder";
import GlitchText from "@/components/Glitch/Text";
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

    const { get } = useSearchParams();

    useEffect(() => {
        props.openWindowId === get('open') && onClickOpenWindow();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <a onClick={onClickOpenWindow} className={className.shortcutAppWrapper.toClassName()} title={props.title}>
            <div className="w-11">
                {IconFactory(props.iconName, true)}
            </div>
            <span className={className.shortcutAppTitle.toClassName()}>
                <TextBorder color={colors.secondary}>
                    <GlitchText>
                        {props.title}{props.fileExtension}
                    </GlitchText>
                </TextBorder>
            </span>
        </a>
    );
}

export default memo(OpenFileShortcut);