import { useReducer } from "react";
import reducer from "./reducer";
import INITIAL_STATE from "./initialState";

function useFileWindowReducer(){
    return useReducer(reducer, INITIAL_STATE);
}

export default useFileWindowReducer;