import { RefObject, useEffect, useRef } from "react";
import WindowMovement from "./WindowMovement";

import type { useWindowMovementParams } from "./types";

function useWindowMovement<C extends HTMLElement, H extends HTMLElement>(params?: useWindowMovementParams): [RefObject<C>, RefObject<H>] {
    const containerRef = useRef<C>(null);
    const headerRef = useRef<H>(null);
    const windowMovement = useRef<WindowMovement>();

    useEffect(() => {
        if (containerRef.current && headerRef.current) {
            if (!windowMovement.current) {
                windowMovement.current = new WindowMovement({
                    draggableElement: headerRef.current!,
                    resizableElement: containerRef.current!,
                    onWindowMovementEnd: params?.onWindowMovementEnd
                });
            }
        }

        return () => {
            windowMovement.current?.destroy();
            windowMovement.current = undefined;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerRef, headerRef]);

return [containerRef, headerRef];
}

export default useWindowMovement;