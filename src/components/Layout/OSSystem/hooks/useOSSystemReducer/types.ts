import type { ReactNode } from "react";
import type { AppIconsName } from "../../types";

export type WindowState = {
    id: string;
    title: string;
    iconName: AppIconsName;
    isMinimized: boolean;
    isMaximized: boolean;
    children?: ReactNode;
    positionX?: number;
    positionY?: number;
    width?: number;
    height?: number;
}

export type ScreenEffectType = {
    isActive: boolean;
}

export type InitialStateType = {
    openWindows: Map<string, WindowState>;
    windowQueue: string[];
    screenEffect: ScreenEffectType;
};

type ActionsTypes =
    "openWindow" |
    "minimizeWindow" |
    'closeWindow' |
    'moveWindowToTop' |
    'updateCoordinates' |
    'maximizeWindow' |
    'screenEffectVisibility'

export type ReducerActionType = {
    type: ActionsTypes,
    payload?: any;
}

export type ActionFuncByType = {
    [key in ReducerActionType['type']]: (state: InitialStateType, action: ReducerActionType) => InitialStateType
};