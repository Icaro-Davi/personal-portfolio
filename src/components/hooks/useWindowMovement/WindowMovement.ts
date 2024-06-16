import DragAndDrop from "./DragAndDrop";
import handleSideEffectEventClosure from "./HandleSideEffectClosure";
import ResizeWindow from "./ResizeWindow";

import type { OnWindowMovementEndFunc, SharedPropertiesType } from "./types";

class WindowMovement {
    private dragAndDrop: DragAndDrop;
    private resizeWindow: ResizeWindow;
    private sharedProperties: SharedPropertiesType;
    private handleSideEffect: ReturnType<typeof handleSideEffectEventClosure>;

    constructor(options: {
        resizableElement: HTMLElement;
        draggableElement: HTMLElement;
        onWindowMovementEnd?: OnWindowMovementEndFunc
    }) {
        this.sharedProperties = {
            resizableElement: {
                width: options.resizableElement.offsetWidth,
                height: options.resizableElement.offsetHeight,
                x: options.resizableElement.offsetLeft,
                y: options.resizableElement.offsetTop
            }
        }
        this.resizeWindow = new ResizeWindow({
            element: options.resizableElement,
            onWindowMovementEnd: options.onWindowMovementEnd,
            sharedProperties: this.sharedProperties
        });
        this.dragAndDrop = new DragAndDrop({
            containerElement: options.resizableElement,
            draggableElement: options.draggableElement,
            sharedProperties: this.sharedProperties,
            onWindowMovementEnd: options.onWindowMovementEnd
        });
        this.handleSideEffect = handleSideEffectEventClosure(options.resizableElement, '.window-movement-off');

    }

    destroy() {
        this.dragAndDrop.destroy();
        this.resizeWindow.destroy();
        this.handleSideEffect.destroy();

    }

}

export default WindowMovement;