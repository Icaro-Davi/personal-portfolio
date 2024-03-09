'use client';

import { useState } from "react";
import Header from "./Header";
import useWindowMovement from "./hooks/useWindowMovement";

import type { FC } from "react";
import type { FileWindowContainerProps } from "./types";

const coordinatesToStyle = (coordinates: { x?: number; y?: number; width?: number; height?: number; }) => ({
    ...coordinates?.y ? { top: `${coordinates.y}px` } : {},
    ...coordinates?.x ? { left: `${coordinates.x}px` } : {},
    ...coordinates?.width ? { width: `${coordinates.width}px` } : {},
    ...coordinates?.height ? { height: `${coordinates.height}px` } : {},
});

const maximizedStyle= { top: '', left: '', width: '100%', height: '100%', };

const FileWindowContainer: FC<FileWindowContainerProps> = ({ children, zIndex, ...props }) => {
    const [isMaximized, setMaximized] = useState(!!props.isMaximized);
    const coordinates = coordinatesToStyle(props.coordinates ?? {});

    const [containerRef, headerRef] = useWindowMovement<HTMLDivElement, HTMLDivElement>({
        // Anonymous decorator function to change maximized state
        onWindowMovementEnd: (...params) => {
            setMaximized(false);
            return props.onWindowMovementEnd?.(...params);
        }
    });

    return (
        <div
            ref={containerRef}
            onMouseDown={props.onMouseDown}
            className="flex flex-col absolute bg-secondary border-x-2 border-b-2 border-primary w-full h-full sm:w-[70%] sm:h-[60%]"
            style={{
                ...isMaximized ? maximizedStyle : coordinates,
                zIndex: 10 + (zIndex ?? 1)
            }}
        >
            <Header ref={headerRef} {...{ ...props, isMaximized, setMaximized, containerRef }} />
            <div className="p-2 text-base" >
                {children}
            </div>
        </div>
    );
}

export default FileWindowContainer;