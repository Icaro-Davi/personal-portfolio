import Header from "./Header";

import type { FC } from "react";
import type { FileWindowContainerProps } from "./types";

const FileWindowContainer: FC<FileWindowContainerProps> = ({ children, zIndex, ...props }) => {
    return (
        <div
            style={{ zIndex: 10 + (zIndex ?? 1) }}
            className="flex flex-col absolute bg-secondary border-x-2 border-b-2 border-primary w-full h-full sm:w-[70%] sm:h-[60%]"
        >
            <Header {...props} />
            <div className="p-2 text-base" >
                {children}
            </div>
        </div>
    );
}

export default FileWindowContainer;