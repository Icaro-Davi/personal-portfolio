import { createContext } from "react";

import type { InitialStateType, ReducerActionType } from "../useOSSystemReducer/types";
import type { Dispatch } from "react";

const OSSystemContext = createContext({
    state: {} as InitialStateType,
    dispatch: (() => { }) as Dispatch<ReducerActionType>
});

export default OSSystemContext;