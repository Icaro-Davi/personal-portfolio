'use client';

import { memo } from 'react';
import useOSSystemContext from "../hooks/useOSSystemContext";
import FileWindow from "@/components/FileWindow";

import type { Dispatch, FC } from "react";
import type { InitialStateType, ReducerActionType } from "../hooks/useOSSystemReducer/types";
import type { FileWindowContainerProps } from '@/components/FileWindow/types';

export const renderFileWindowsByIndex = (state: InitialStateType, dispatch: Dispatch<ReducerActionType>) =>
    state.windowQueue
        .map((windowId) => state.openWindows.get(windowId)!)
        .filter(_window => !_window.isMinimized)
        .map((_window, index) => {
            const fileWindowProps: FileWindowContainerProps = {
                zIndex: index + 1,
                title: _window.title,
                coordinates: {
                    x: _window.positionX,
                    y: _window.positionY,
                    width: _window.width,
                    height: _window.height
                },
                isMaximized: _window.isMaximized,
                onMouseDown: () => dispatch({
                    type: 'moveWindowToTop',
                    payload: { id: _window.id } 
                }),
                onMaximize: (isMaximized: boolean) => dispatch({
                    type: 'maxmizeWindow',
                    payload: { id: _window.id, isMaximized }
                }),
                onClickClose: () => dispatch({
                    type: 'closeWindow',
                    payload: { id: _window.id }
                }),
                onClickMinimize: () => dispatch({
                    type: 'minimizeWindow',
                    payload: { id: _window.id }
                }),
                onWindowMovementEnd: ((coordinates) => dispatch({
                    type: 'updateCoordinates',
                    payload: {
                        id: _window.id,
                        ...coordinates.x ? { positionX: coordinates.x } : {},
                        ...coordinates.y ? { positionY: coordinates.y } : {},
                        ...coordinates.width ? { width: coordinates.width } : {},
                        ...coordinates.height ? { height: coordinates.height } : {},
                    }
                })) as Parameters<typeof FileWindow>['0']['onWindowMovementEnd']
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