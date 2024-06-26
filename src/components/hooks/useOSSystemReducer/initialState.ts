import type { InitialStateType } from "./types";

const INITIAL_STATE: InitialStateType = {
   openWindows: new Map(),
   windowQueue: [],
   bottomBar: {
      isActive: false
   },
   screenEffect: {
      isActive: true
   },
   wallpaper: {
      isActive: true
   }
};

export default INITIAL_STATE;