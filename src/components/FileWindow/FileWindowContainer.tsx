import Header from "./Header";

import type { FC } from "react";
import type { FileWindowContainerProps } from "./types";

const FileWindowContainer: FC<FileWindowContainerProps> = props => {
    return (
        <div className="flex flex-col bg-secondary border-x-2 border-b-2 border-primary w-full h-full sm:w-[70%] sm:h-[60%]">
            <Header title={props.title} />
            <div className="p-2 text-base" >
                {props.children}
            </div>
        </div>
    );
}

export default FileWindowContainer;