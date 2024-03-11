import { RefObject, useEffect, useRef } from "react";
import DragAndDrop from "./DragAndDrop";
import ResizeWindow from "./ResizeWindow";
import handleSideEffectEventClosure from "./HandleSideEffectClosure";

import type { useWindowMovmentParams } from "./types";

function useWindowMovement<C extends HTMLElement, H extends HTMLElement>(params?: useWindowMovmentParams): [RefObject<C>, RefObject<H>] {
    const containerRef = useRef<C>(null);
    const headerRef = useRef<H>(null);
    const dragAndDropRef = useRef<DragAndDrop>();
    const resizeWindowRef = useRef<ResizeWindow>();

    useEffect(() => {

        if (containerRef.current && headerRef.current) {
            if (!dragAndDropRef.current) {
                dragAndDropRef.current = new DragAndDrop({
                    draggableElement: headerRef.current!,
                    containerElement: containerRef.current!,
                    threshold: params?.headerThreshold,
                    onWindowMovementEnd: params?.onWindowMovementEnd
                });
            }
            if (!resizeWindowRef.current) {
                resizeWindowRef.current = new ResizeWindow({
                    element: containerRef.current!,
                    onWindowMovementEnd: params?.onWindowMovementEnd
                });
            }
        }
        
        const handlesideEffect = containerRef.current && handleSideEffectEventClosure(containerRef.current, '.window-movement-off');
        return () => {
            dragAndDropRef.current?.destroy();
            resizeWindowRef.current?.destroy();
            handlesideEffect?.destroy()
            dragAndDropRef.current = undefined;
            resizeWindowRef.current = undefined;
        };
    }, [containerRef, headerRef]);

    return [containerRef, headerRef];
}

export default useWindowMovement;