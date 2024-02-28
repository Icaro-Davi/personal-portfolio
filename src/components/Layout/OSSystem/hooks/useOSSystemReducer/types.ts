import type { ReactNode } from "react";
import type { AppIconsName } from "../../types";

export type WindowState = {
    id: string;
    focus: boolean;
    iconName: AppIconsName;
    isMinimized: boolean;
    children?: ReactNode;
}

export type InitialStateType = {
    openWindows: Map<string, WindowState>;
};

export type ReducerActionType = {
    type: "openWindow" | "minimizeWindow" | 'closeWindow',
    payload?: any;
}

export type ActionFuncByType = {
    [key in ReducerActionType['type']]: (state: InitialStateType, action: ReducerActionType) => InitialStateType
};