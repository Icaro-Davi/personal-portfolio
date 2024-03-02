export type onWindowMoveParams = {
    positionX: number;
    positionY: number;
    width: number;
    height: number;
}

export type onWindowMoveFunc = (params: onWindowMoveParams) => void;

export type useWindowMovmentParams = {
    onWindowMove?: onWindowMoveFunc;
    resizeWindow?: {
        edgeThreshold?:number;
        cornerThreshold?: number;
    };
    headerThreshold?: number;
}