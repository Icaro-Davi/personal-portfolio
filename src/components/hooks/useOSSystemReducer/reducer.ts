import CreateLog from "@/utils/CreateLog";
import ACTION from "./actions";

import type { InitialStateType, ReducerActionType } from "./types";

const createLog = new CreateLog('useOSSystemReducer');

function reducer(state: InitialStateType, action: ReducerActionType): InitialStateType {
    const actionFn = ACTION[action.type];
    if (actionFn) {
        return actionFn(state, action);
    } else {
        throw createLog.throwError({
            fnName: reducer.name,
            message: `cannot find action for "${action.type}"`,
        });
    }
}

export default reducer;