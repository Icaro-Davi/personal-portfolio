'use client';

import { useState } from "react";
import Header from "./Header";
import useWindowMovement from "./hooks/useWindowMovement";

import type { FC } from "react";
import type { FileWindowContainerProps } from "./types";

const FileWindowContainer: FC<FileWindowContainerProps> = ({ children, zIndex, ...props }) => {
    const [containerRef, headerRef] = useWindowMovement<HTMLDivElement, HTMLDivElement>({
        onWindowMOvementEnd: props.onWindowMovementEnd
    });
    const [isMaximized, setMaximized] = useState(!!props.isMaximized);

    const coordinates = isMaximized
        ? { top: '', left: '', width: '100%', height: '100%', }
        : {
            ...props?.coordinates?.y ? { top: `${props.coordinates.y}px` } : {},
            ...props?.coordinates?.x ? { left: `${props.coordinates.x}px` } : {},
            ...props?.coordinates?.width ? { width: `${props.coordinates.width}px` } : {},
            ...props?.coordinates?.height ? { height: `${props.coordinates.height}px` } : {},
        }
    
    return (
        <div
            ref={containerRef}
            style={{ ...coordinates, zIndex: 10 + (zIndex ?? 1) }}
            onClick={() => console.log('change index')}
            className="flex flex-col absolute bg-secondary border-x-2 border-b-2 border-primary w-full h-full sm:w-[70%] sm:h-[60%]"
        >
            <Header ref={headerRef} {...{ ...props, isMaximized, setMaximized, containerRef }} />
            <div className="p-2 text-base" >
                {children}
            </div>
        </div>
    );
}

export default FileWindowContainer;