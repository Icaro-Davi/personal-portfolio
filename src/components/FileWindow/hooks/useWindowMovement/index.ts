import { RefObject, useEffect, useRef } from "react";
import type { useWindowMovmentParams } from "./types";
import DragAndDrop from "./DragAndDrop";
import ResizeWindow from "./ResizeWindow";

function useWindowMovement<C extends HTMLElement, H extends HTMLElement>(params?: useWindowMovmentParams): [RefObject<C>, RefObject<H>] {
    const containerRef = useRef<C>(null);
    const headerRef = useRef<H>(null);

    useEffect(() => {
        let dragAndDrop: DragAndDrop | undefined;
        let resizeWindow: ResizeWindow | undefined;
        const removeSideeffectByClassNameFn = (ev: MouseEvent | TouchEvent) => {
            ev.stopPropagation();
        }
        if (containerRef.current && headerRef.current) {
            dragAndDrop = new DragAndDrop({
                draggableElement: headerRef.current,
                containerElement: containerRef.current,
                threshold: params?.headerThreshold,
                onWindowMovementEnd: params?.onWindowMovementEnd
            });
            resizeWindow = new ResizeWindow({
                element: containerRef.current,
                onWindowMovementEnd: params?.onWindowMovementEnd
            });
            containerRef.current.querySelectorAll('.window-movement-off').forEach((element) => {
                (element as HTMLElement).addEventListener('mouseup', removeSideeffectByClassNameFn);
                (element as HTMLElement).addEventListener('mousedown', removeSideeffectByClassNameFn);
                (element as HTMLElement).addEventListener('mousemove', removeSideeffectByClassNameFn);
                (element as HTMLElement).addEventListener('touchstart', removeSideeffectByClassNameFn);
            });
        }

        return () => {
            dragAndDrop && dragAndDrop.destroy();
            resizeWindow && resizeWindow.destroy();
            containerRef.current && containerRef.current.querySelectorAll('.window-movement-off').forEach((element) => {
                (element as HTMLElement).removeEventListener('mouseup', removeSideeffectByClassNameFn);
                (element as HTMLElement).removeEventListener('mousedown', removeSideeffectByClassNameFn);
                (element as HTMLElement).removeEventListener('mousemove', removeSideeffectByClassNameFn);
                (element as HTMLElement).removeEventListener('touchstart', removeSideeffectByClassNameFn);
            });
        }
    }, [containerRef.current, headerRef.current]);


    return [containerRef, headerRef];
}

export default useWindowMovement;