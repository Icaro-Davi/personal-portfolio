'use client';

import className from './styles';
import IconFactory from '../IconFactory';
import useOSSystemContext from "../hooks/useOSSystemContext";

import type { FC, ReactNode } from "react";
import type { AppIconWrapperProps, AppIcons } from './types';

export const AppIconWrapper: FC<AppIconWrapperProps> = props => {
    const { state, dispatch } = useOSSystemContext();

    className.appIconWrapperStyle.callConditional('focus', props?.windowInFocus);

    const onClickHandleWindowVisibility = () => {
        if (props.windowId) {
            const _window = state.openWindows.get(props.windowId);
            if (_window) {
                if (props?.windowInFocus) {
                    dispatch({
                        type: 'minimizeWindow',
                        payload: { id: _window.id }
                    })
                    return;
                } else {
                    dispatch({
                        type: 'openWindow',
                        payload: { id: _window.id }
                    });
                }
            }
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
        const iconId = Math.random().toString(32).slice(-7);
        return (
            <AppIconWrapper
                key={`app-icons-${iconId}`}
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