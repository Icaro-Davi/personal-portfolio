export type OnWindowMovementEndFunc = (params: { x?: number; y?: number; width?: number; height?: number; }) => void;

export type useWindowMovmentParams = {
    onWindowMovementEnd?: OnWindowMovementEndFunc;
    resizeWindow?: {
        edgeThreshold?:number;
        cornerThreshold?: number;
    };
    headerThreshold?: number;
}
