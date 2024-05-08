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
                isMaximized: false,
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

    "maximizeWindow": (state, action) => {
        validatePayloadKeys({ action, keys: ['id', 'isMaximized'] });

        const _window = state.openWindows.get(action.payload.id);
        if (_window) {
            state.openWindows.set(_window.id, {
                ..._window,
                isMaximized: action.payload.isMaximized
            });
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
    },

    "updateCoordinates": (state, action) => {
        validatePayloadKeys({ action, keys: ['id'] });
        const _window = state.openWindows.get(action.payload.id);
        if (_window) {
            const newState = {
                ...typeof action.payload.positionX === 'number' ? { positionX: action.payload.positionX as number } : {},
                ...typeof action.payload.positionY === 'number' ? { positionY: action.payload.positionY as number } : {},
                ...typeof action.payload.width === 'number' ? { width: action.payload.width as number } : {},
                ...typeof action.payload.height === 'number' ? { height: action.payload.height as number } : {},
                isMaximized: false
            }
            state.openWindows.set(_window.id, { ..._window, ...newState });
        }
        return { ...state };
    },

    'screenEffectVisibility': (state, action) => {
        validatePayloadKeys({action, keys: ['isActive']});
        state.screenEffect.isActive = action.payload.isActive;
        return { ...state };
    },

    'wallpaperVisibility': (state, action) => {
        validatePayloadKeys({ action, keys: ['isActive']});
        state.wallpaper.isActive = action.payload.isActive;
        return { ...state };
    },

    'bottomBarVisibility': (state, action) => {
        validatePayloadKeys({ action, keys: ['isActive'] });
        state.bottomBar.isActive = action.payload.isActive;
        return { ...state };
    }

}

export default ACTION;