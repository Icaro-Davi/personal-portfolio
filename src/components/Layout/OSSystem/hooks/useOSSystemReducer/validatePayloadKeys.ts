import CreateLog from "@/utils/CreateLog";
import type { ReducerActionType } from "./types";

const createLog = new CreateLog('OSSystemHookValidatePayloadKeys');

const errorMessages = {
    requireProperties: (payload: any, requiredPropertiesKeys: string[]) =>
        `Payload must include "${requiredPropertiesKeys.filter(key => !Object.keys(payload).includes(key))}"`,
    isNotObject: (payload: any) =>
        `Payload only accpets type object, current "${typeof payload}"`
}

function validatePayloadKeys(params: {
    action: ReducerActionType;
    keys: string[];
}) {
    if (typeof params.action.payload !== 'object') {
        createLog.throwError({
            fnName: params.action.type,
            message: errorMessages.isNotObject(params.action.payload)
        });
    }
    if (!params.keys.every(key => Object.keys(params.action.payload).includes(key))) {
        createLog.throwError({
            fnName: params.action.type,
            message: errorMessages.requireProperties(params.action.payload, params.keys)
        });
    }
    return false;
}

export default validatePayloadKeys;