import { createContext } from "react";

import type { InitialStateType, ReducerActionType } from "../useFileWindowReducer/types";
import type { Dispatch } from "react";

const FileWindowContext = createContext({
    state: {} as InitialStateType,
    dispatch: (() => { }) as Dispatch<ReducerActionType>
});

export default FileWindowContext;