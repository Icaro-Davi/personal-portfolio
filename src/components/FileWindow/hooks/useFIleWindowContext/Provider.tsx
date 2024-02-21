'use client';

import useFileWindowReducer from "../useFileWindowReducer";
import FileWindowContext from "./context";

import type { FC } from "react";

const FileWindowProvider: FC<{ children: React.ReactNode }> = props => {
    const [state, dispatch] = useFileWindowReducer();
    return (
        <FileWindowContext.Provider value={{ state, dispatch }}>
            {props.children}
        </FileWindowContext.Provider>
    );
}

export default FileWindowProvider;