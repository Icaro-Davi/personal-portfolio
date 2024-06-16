'use client';

import useOSSystemReducer from "../useOSSystemReducer";
import OSSystemContext from "./context";

import type { FC } from "react";

const OSSystemProvider: FC<{ children: React.ReactNode }> = props => {
    const [state, dispatch] = useOSSystemReducer();
    return (
        <OSSystemContext.Provider value={{ state, dispatch }}>
            {props.children}
        </OSSystemContext.Provider>
    );
}

export default OSSystemProvider;