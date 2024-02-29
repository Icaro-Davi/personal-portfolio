'use client';

import className from './styles';
import IconFactory from '../IconFactory';
import useOSSystemContext from "../hooks/useOSSystemContext";

import type { FC, ReactNode } from "react";
import type { AppIcon } from "../types";
import type { AppIconWrapperProps, AppIcons } from './types';

export const AppIconWrapper: FC<AppIconWrapperProps> = props => {
    const { state, dispatch } = useOSSystemContext();

    className.appIconWrapperStyle.callConditional('focus', props?.windowInFocus);

    const onClickHandleWindowVisibility = () => {
        if (props.windowId) {
            const _winwod = state.openWindows.get(props.windowId);
            if (_winwod) {
                if (_winwod.focus) {
                    dispatch({
                        type: 'minimizeWindow',
                        payload: { id: props.windowId }
                    })
                    return;
                }
            }
            dispatch({
                type: 'openWindow',
                payload: { id: props.windowId }
            });
        }
        props.onClick?.();
    }

    return (
        <a
            onClick={onClickHandleWindowVisibility}
            title={props.windowTitle}
            className={className.appIconWrapperStyle.toClassName(props.className)}
        >
            {props.children}
        </a>
    );
}

const AppIcons = (icons: AppIcons): ReactNode[] => {
    return icons.map(({ name, window: _window }) => {
        let Icon = IconFactory(name);
        return (
            <AppIconWrapper
                windowInFocus={_window.focus}
                windowId={_window.id}
                windowTitle={_window.title}
            >
                {Icon}
            </AppIconWrapper>
        );
    });
}

export default AppIcons;