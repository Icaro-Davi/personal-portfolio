import type { ReducerActionType, WindowState } from "../../../hooks/useOSSystemReducer/types";
import type { DOMAttributes, Dispatch } from "react";
import { OnWindowMovementEndFunc } from "../../../hooks/useWindowMovement/types";

type ThisEventTypeDispatch = {
    windowState: WindowState;
    dispatch: Dispatch<ReducerActionType>;
}

export type EventsType = {
    container: {
        onMouseDown: (
            this: ThisEventTypeDispatch,
            ...ev: Parameters<NonNullable<DOMAttributes<HTMLDivElement>['onMouseDown']>>
        ) => void;
        onWindowMovementEnd: (this: ThisEventTypeDispatch, ...params: Parameters<OnWindowMovementEndFunc>) => void;
    };
    header: {
        setMaximized: (this: ThisEventTypeDispatch, isMaximized: boolean) => void;
        onClickClose: (this: ThisEventTypeDispatch) => void;
        onClickMinimize: (this: ThisEventTypeDispatch) => void;
    }
}