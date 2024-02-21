import INITIAL_STATE from "./initialState";

export type InitialStateType = typeof INITIAL_STATE;

export type ReducerActionType = {
    type: "",
    payload?: Partial<InitialStateType>;
}

export type ActionFuncByType = {
    [key in ReducerActionType['type']]: (state: InitialStateType, action: ReducerActionType) => InitialStateType
};