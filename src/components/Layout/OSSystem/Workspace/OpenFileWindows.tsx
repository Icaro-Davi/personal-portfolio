'use client';

import { useState, useEffect } from "react";
import useOSSystemContext from "../hooks/useOSSystemContext";
import FileWindow from "../FileWindow";

import type { ReactNode, FC } from "react";

const OpenFileWindows: FC = () => {
    const { state } = useOSSystemContext();
    const [fileWindowList, setComponents] = useState<{ id: string; Component: ReactNode }[]>([]);

    useEffect(() => {
        setComponents(oldState => {
            return Array.from(state.openWindows).map(([windowId, _window]) => {
                const Component = oldState.find(({ id }) => id === windowId);
                if (Component) return Component;
                return { id: windowId, Component: (<FileWindow key={windowId} windowId={windowId} />) };
            });
        });
    }, [state.openWindows.size]);

    const Components = state.windowQueue.reduce((prev, current) => {
        prev.push(fileWindowList.find(({ id }) => id === current)?.Component);
        return prev;
    }, [] as ReactNode[]);
    
    return (
        <div className="flex w-full h-full absolute justify-center items-center">
            {Components}
        </div>
    )
}

export default OpenFileWindows;