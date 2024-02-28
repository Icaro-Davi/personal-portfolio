import { useReducer } from "react";
import reducer from "./reducer";
import INITIAL_STATE from "./initialState";

function useOSSystemReducer(){
    return useReducer(reducer, INITIAL_STATE);
}

export default useOSSystemReducer;