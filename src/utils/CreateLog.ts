class CreateLog {

    private moduleName: string;

    constructor(moduleName: string) {
        this.moduleName = moduleName;
    }

    private createLog(
        logFn: (...date: string[]) => void,
        type: string,
        fnName: string,
        message: string,
        error?: any
    ) {
        const logMessage = (`[${type}] [${this.moduleName}/${fnName}] ${message}`);
        if (type !== 'error') {
            logFn(
                logMessage,
                ...error?.message
                    ? ['\n', error.message]
                    : []
            );
            throw this.throw(logMessage);
        } else {
            logFn(logMessage);
        }
    }

    private throw(errorMessage: string) {
        return new Error(errorMessage);
    }

    logMessage(params: { fnName: string, message: string }) {
        this.createLog(console.log, 'LOG', params.fnName, params.message);
    }

    warnMessage(params: { fnName: string, message: string }) {
        this.createLog(console.warn, 'WARN', params.fnName, params.message);
    }

    throwError(params: { fnName: string, message: string, error?: any }) {
        this.createLog(console.error, 'ERROR', params.fnName, params.message, params.error);
    }

}

export default CreateLog;