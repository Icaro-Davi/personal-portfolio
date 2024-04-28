export type OnWindowMovementEndFunc = (params: { x?: number; y?: number; width?: number; height?: number; }) => void;

export type useWindowMovementParams = {
    onWindowMovementEnd?: OnWindowMovementEndFunc;
    resizeWindow?: {
        edgeThreshold?:number;
        cornerThreshold?: number;
    };
    headerThreshold?: number;
}

export type SharedPropertiesType = {
    resizableElement: {
        width: number; height: number; x: number; y: number;
    }
}