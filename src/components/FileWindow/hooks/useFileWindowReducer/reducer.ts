import CreateLog from "@/utils/CreateLog";
import type { ActionFuncByType, InitialStateType, ReducerActionType } from "./types";

const ACTION: ActionFuncByType = { "": () => ({}) }

const createLog = new CreateLog('useFileWindowReducer');

function reducer(state: InitialStateType, action: ReducerActionType): Partial<InitialStateType> {
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