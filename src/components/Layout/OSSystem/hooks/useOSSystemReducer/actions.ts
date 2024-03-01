import validatePayloadKeys from "./validatePayloadKeys";

import type { ActionFuncByType } from "./types";

const ACTION: ActionFuncByType = {

    "openWindow": (state, action) => {
        validatePayloadKeys({ action, keys: ['id'] });

        if (state.openWindows.has(action.payload.id)) {
            const _window = state.openWindows.get(action.payload.id)!;
            state.openWindows.set(_window.id, {
                ..._window,
                isMinimized: false,
            });

            state = ACTION['moveWindowToTop'](state, {
                type: "moveWindowToTop",
                payload: { id: action.payload.id }
            });
        } else {
            validatePayloadKeys({ action, keys: ['iconName', 'title'] });
            const newWindow = {
                focus: true,
                isMinimized: false,
                id: action.payload.id,
                title: action.payload.title,
                iconName: action.payload.iconName,
                children: action.payload.children,
            }
            state.openWindows.set(newWindow.id, newWindow);
            state.windowQueue.push(action.payload.id);
        }

        return { ...state };
    },

    "minimizeWindow": (state, action) => {
        validatePayloadKeys({ action, keys: ['id'] });

        if (state.openWindows.has(action.payload.id)) {
            const _window = state.openWindows.get(action.payload.id)!;
            state.openWindows.set(_window.id, {
                ..._window,
                isMinimized: true,
            });
            state.windowQueue.splice(state.windowQueue.indexOf(action.payload.id), 1);
            state.windowQueue.unshift(action.payload.id);
        }

        return { ...state };
    },

    "closeWindow": (state, action) => {
        validatePayloadKeys({ action, keys: ['id'] });

        if (state.openWindows.has(action.payload.id)) {
            state.openWindows.delete(action.payload.id);
            state.windowQueue.splice(state.windowQueue.indexOf(action.payload.id), 1);
        }

        return { ...state };
    },

    "moveWindowToTop": (state, action) => {
        validatePayloadKeys({ action, keys: ['id'] });

        if (state.openWindows.has(action.payload.id)) {
            const currentWindowIndex = state.windowQueue.indexOf(action.payload.id);
            state.windowQueue.splice(currentWindowIndex, 1);
            state.windowQueue.push(action.payload.id);
        }

        return { ...state };
    }

}

export default ACTION;