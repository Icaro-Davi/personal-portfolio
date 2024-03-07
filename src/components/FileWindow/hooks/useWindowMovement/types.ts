export type OnWindowMovementEndFunc = (params: { x?: number; y?: number; width?: number; height?: number; }) => void;

export type useWindowMovmentParams = {
    onWindowMOvementEnd?: OnWindowMovementEndFunc;
    resizeWindow?: {
        edgeThreshold?:number;
        cornerThreshold?: number;
    };
    headerThreshold?: number;
}
