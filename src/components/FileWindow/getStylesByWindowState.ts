import { WindowState } from "../hooks/useOSSystemReducer/types";

const getStyleByWindowState = (params: WindowState) => ({
    ...params.isMaximized
        ? { top: 'unset', left: 'unset', width: '100%', height: '100%', }
        : {
            ...(typeof params?.positionY === 'number') ? { top: `${params.positionY}px` } : { top: '' },
            ...(typeof params?.positionX === 'number') ? { left: `${params.positionX}px` } : { left: '' },
            ...(typeof params?.width === 'number') ? { width: `${params.width}px` } : { width: '' },
            ...(typeof params?.height === 'number') ? { height: `${params.height}px` } : { height: '' },
        },
});

export default getStyleByWindowState;