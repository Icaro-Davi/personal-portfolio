import { RefObject, useEffect, useRef } from "react";
import type { useWindowMovmentParams } from "./types";
import DragAndDrop from "./DragAndDrop";

function useWindowMovement<C extends HTMLElement, H extends HTMLElement>(params?: useWindowMovmentParams): [RefObject<C>, RefObject<H>] {
    const containerRef = useRef<C>(null);
    const headerRef = useRef<H>(null);

    useEffect(() => {
        let dragAndDrop: DragAndDrop | undefined;

        if (containerRef.current && headerRef.current) {
            dragAndDrop = new DragAndDrop({
                draggableElement: headerRef.current,
                containerElement: containerRef.current,
                threshold: params?.headerThreshold
            });
        }

        return () => {
            dragAndDrop && dragAndDrop.destroy();
        }
    }, [containerRef.current, headerRef.current]);


    return [containerRef, headerRef];
}

export default useWindowMovement;