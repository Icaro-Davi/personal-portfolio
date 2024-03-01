'use client';

import Header from "./Header";
import { useRef } from "react";

import type { FC } from "react";
import type { FileWindowContainerProps } from "./types";

const FileWindowContainer: FC<FileWindowContainerProps> = ({ children, zIndex, ...props }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <div
            ref={containerRef}
            style={{ zIndex: 10 + (zIndex ?? 1) }}
            onClick={() => console.log('change index')}
            className="flex flex-col absolute bg-secondary border-x-2 border-b-2 border-primary w-full h-full sm:w-[70%] sm:h-[60%]"
        >
            <Header {...{ ...props, containerRef }} />
            <div className="p-2 text-base" >
                {children}
            </div>
        </div>
    );
}

export default FileWindowContainer;