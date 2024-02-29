import validatePayloadKeys from "./validatePayloadKeys";

import type { ActionFuncByType } from "./types";

const ACTION: ActionFuncByType = {

    "openWindow": (state, action) => {
        validatePayloadKeys({ action, keys: ['id'] });

        if (state.openWindows.has(action.payload.id)) {
            const _window = state.openWindows.get(action.payload.id)!;
            state.openWindows.set(_window.id, {
                ..._window,
                focus: true,
                isMinimized: false,
            });
        } else {
            validatePayloadKeys({ action, keys: ['iconName', 'title'] });
            const newWindow = {
                focus: true,
                isMinimized: false,
                id: action.payload.id,
                title: action.payload.title,
                iconName: action.payload.iconName,
                children: action.payload.children
            }
            state.openWindows.set(newWindow.id, newWindow);
        }

        return { ...state };
    },

    "minimizeWindow": (state, action) => {
        validatePayloadKeys({ action, keys: ['id'] });

        if (state.openWindows.has(action.payload.id)) {
            const _window = state.openWindows.get(action.payload.id)!;
            state.openWindows.set(_window.id, { ..._window, isMinimized: true, focus: false });
        }

        return { ...state };
    },

    "closeWindow": (state, action) => {
        validatePayloadKeys({ action, keys: ['id'] });

        if (state.openWindows.has(action.payload.id)) {
            state.openWindows.delete(action.payload.id);
        }

        return { ...state };
    }

}

export default ACTION;