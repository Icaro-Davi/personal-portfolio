import type { InitialStateType } from "./types";

const INITIAL_STATE: InitialStateType = {
   openWindows: new Map(),
   windowQueue: [],
   screenEffect: {
      isActive: true
   }
};

export default INITIAL_STATE;