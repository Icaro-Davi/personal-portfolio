import type { InitialStateType } from "./types";

const INITIAL_STATE: InitialStateType = {
   openWindows: new Map(),
   windowQueue: []
};

export default INITIAL_STATE;