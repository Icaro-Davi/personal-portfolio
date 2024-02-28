import CreateLog from "@/utils/CreateLog";
import type { ActionFuncByType, ReducerActionType } from "./types";

const createLog = new CreateLog('OSSystemHookAction');

function validatePayloadKeys(params: {
    action: ReducerActionType;
    keys: string[];
}) {
    if (typeof params.action.payload !== 'object' && Object.keys(params.action.payload).every(key => params.keys.includes(key)))
        return true;
    else
        return false;
}

const messages = {
    invalidPayload: (payload: any) => `Invalid data pass through payload "${JSON.stringify(payload)}"`
}

const ACTION: ActionFuncByType = {

    "openWindow": (state, action) => {
        if (validatePayloadKeys({ action, keys: ['id', 'iconName'] })) {
            createLog.throwError({
                fnName: action.type,
                message: messages.invalidPayload(action.payload)
            });
        }

        if (state.openWindows.has(action.payload.id)) {
            const _window = state.openWindows.get(action.payload.id)!;
            state.openWindows.set(_window.id, {
                ..._window,
                focus: true,
                isMinimized: false,
            });
        } else {
            const newWindow = {
                focus: true,
                isMinimized: false,
                id: action.payload.id,
                iconName: action.payload.iconName,
                children: action.payload.children
            }
            state.openWindows.set(newWindow.id, newWindow);
        }

        return state;
    },

    "minimizeWindow": (state, action) => {
        if (validatePayloadKeys({ action, keys: ['id'] })) {
            createLog.throwError({
                fnName: action.type,
                message: messages.invalidPayload(action.payload)
            });
        }

        if (state.openWindows.has(action.payload.id)) {
            const _window = state.openWindows.get(action.payload.id)!;
            state.openWindows.set(_window.id, { ..._window, isMinimized: true, focus: false });
        } else {
            createLog.throwError({ fnName: action.type, message: 'Payload "id" not' });
        }

        return state;
    },

    "closeWindow": (state, action) => {
        if (validatePayloadKeys({ action, keys: ['id'] })) {
            createLog.throwError({
                fnName: action.type,
                message: messages.invalidPayload(action.payload)
            });
        }

        if (state.openWindows.has(action.payload.id)) {
            state.openWindows.delete(action.payload.id);
        }

        return state;
    }

}

export default ACTION;