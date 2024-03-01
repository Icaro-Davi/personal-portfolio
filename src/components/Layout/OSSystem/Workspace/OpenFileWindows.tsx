'use client';

import { memo } from 'react';
import useOSSystemContext from "../hooks/useOSSystemContext";
import FileWindow from "@/components/FileWindow";

import type { Dispatch, FC } from "react";
import type { InitialStateType, ReducerActionType } from "../hooks/useOSSystemReducer/types";

export const renderFileWindowsByIndex = (state: InitialStateType, dispatch: Dispatch<ReducerActionType>) =>
    state.windowQueue
        .map((windowId) => state.openWindows.get(windowId)!)
        .filter(_window => !_window.isMinimized)
        .map((_window, index) => {
            const fileWindowProps = {
                zIndex: index + 1,
                title: _window.title,
                onClickClose: () => dispatch({
                    type: 'closeWindow',
                    payload: { id: _window.id }
                }),
                onClickMinimize: () => dispatch({
                    type: 'minimizeWindow',
                    payload: { id: _window.id }
                }),
            }
            return (
                <FileWindow key={_window.id} {...fileWindowProps}>
                    {_window.children}
                </FileWindow>
            );
        });

const OpenFileWindows: FC = () => {
    const { state, dispatch } = useOSSystemContext();
    return (
        <div className="flex w-full h-full absolute justify-center items-center">
            {renderFileWindowsByIndex(state, dispatch)}
        </div>
    )
}

export default memo(OpenFileWindows);