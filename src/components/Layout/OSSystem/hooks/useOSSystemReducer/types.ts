import type { ReactNode } from "react";
import type { AppIconsName } from "../../types";

export type WindowState = {
    id: string;
    title: string;
    iconName: AppIconsName;
    isMinimized: boolean;
    isMaxmized: boolean;
    children?: ReactNode;
    positionX?: number;
    positionY?: number;
    width?: number;
    height?: number;
}

export type InitialStateType = {
    openWindows: Map<string, WindowState>;
    windowQueue: string[];
};

export type ReducerActionType = {
    type: "openWindow" | "minimizeWindow" | 'closeWindow' | 'moveWindowToTop' | 'updateCoordinates' | 'maxmizeWindow',
    payload?: any;
}

export type ActionFuncByType = {
    [key in ReducerActionType['type']]: (state: InitialStateType, action: ReducerActionType) => InitialStateType
};