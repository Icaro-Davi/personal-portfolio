'use client';

import useOSSystemContext from "../hooks/useOSSystemContext";
import FileWindow from "@/components/FileWindow";

import type { FC } from "react";

const OpenFileWindows: FC = () => {
    const { state, dispatch } = useOSSystemContext();
    return (
        <div className="flex w-full h-full absolute justify-center items-center">
            {Array.from(state.openWindows)
                .filter((([_, _window]) => !_window.isMinimized))
                .map(([id, _window]) => (
                    <FileWindow
                        key={id}
                        title={_window.title}
                        onClickClose={() => dispatch({ type: 'closeWindow', payload: { id } })}
                        onClickMinimize={() => dispatch({ type: 'minimizeWindow', payload: { id } })}
                    >
                        {_window.children}
                    </FileWindow>
                ))}
        </div>
    )
}

export default OpenFileWindows;