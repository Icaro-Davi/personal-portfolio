import type { ReactNode } from "react";
import type { AppIconsName } from "../../types";

export type WindowState = {
    id: string;
    title: string;
    iconName: AppIconsName;
    isMinimized: boolean;
    children?: ReactNode;
    positionX?: string;
    positionY?: string;
    width?: string;
    height?: string;
}

export type InitialStateType = {
    openWindows: Map<string, WindowState>;
    windowQueue: string[];
};

export type ReducerActionType = {
    type: "openWindow" | "minimizeWindow" | 'closeWindow' | 'moveWindowToTop',
    payload?: any;
}

export type ActionFuncByType = {
    [key in ReducerActionType['type']]: (state: InitialStateType, action: ReducerActionType) => InitialStateType
};