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

        if (containerRef.current && headerRef.current) {
            dragAndDrop = new DragAndDrop({
                draggableElement: headerRef.current,
                containerElement: containerRef.current,
                threshold: params?.headerThreshold
            });
            resizeWindow = new ResizeWindow({
                element: containerRef.current
            });
        }

        return () => {
            dragAndDrop && dragAndDrop.destroy();
            resizeWindow && resizeWindow.destroy();
        }
    }, [containerRef.current, headerRef.current]);


    return [containerRef, headerRef];
}

export default useWindowMovement;