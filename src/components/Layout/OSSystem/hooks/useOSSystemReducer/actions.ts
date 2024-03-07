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
                isMaxmized: false,
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

    "maxmizeWindow": (state, action) => {
        validatePayloadKeys({ action, keys: ['id', 'isMaximized'] });

        const _window = state.openWindows.get(action.payload.id);
        if (_window) {
            state.openWindows.set(_window.id, {
                ..._window,
                isMaxmized: action.payload.isMaximized
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
            const coordinates = {
                ...action.payload.positionX ? { positionX: action.payload.positionX as number } : {},
                ...action.payload.positionY ? { positionY: action.payload.positionY as number } : {},
                ...action.payload.width ? { width: action.payload.width as number } : {},
                ...action.payload.height ? { height: action.payload.height as number } : {},
            }

            const haveDifferentCoordinates = Object
                .keys(coordinates)
                .some(key => (
                    coordinates[key as keyof typeof coordinates] !== _window[key as keyof typeof _window]
                ));

            if (haveDifferentCoordinates) {
                state.openWindows.set(_window.id, {
                    ..._window,
                    ...action.payload.positionX ? { positionX: action.payload.positionX } : {},
                    ...action.payload.positionY ? { positionY: action.payload.positionY } : {},
                    ...action.payload.width ? { width: action.payload.width } : {},
                    ...action.payload.height ? { height: action.payload.height } : {},
                });
                return { ...state };
            }
        }
        return state;
    }

}

export default ACTION;