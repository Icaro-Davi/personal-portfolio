import type { OnWindowMovementEndFunc, SharedPropertiesType } from "./types";

class ResizeWindow {

    private resizeElement: HTMLElement;
    private listenerRef: { [key: string]: (event: MouseEvent) => void } = {};
    private isResizing = false;
    private currentResizingEdge: undefined | 'leftTop' | 'left' | 'leftBottom' | 'bottom' | 'rightBottom' | 'right' | 'rightTop' | 'top';
    private marginEvent = 5;
    private initialWindowDimensions = { x: 0, y: 0, width: 0, height: 0 };
    private sharedProperties: SharedPropertiesType;
    private minimumWindowSize = { width: 300, height: 400 };
    private edgeMarginMouseCursor = this.marginEvent;
    private debounceIdOnWindowMovementEnd: NodeJS.Timeout | undefined;
    private onWindowMovementEnd: OnWindowMovementEndFunc | undefined;

    constructor(params: {
        element: HTMLElement;
        sharedProperties: SharedPropertiesType;
        onWindowMovementEnd?: OnWindowMovementEndFunc;
    }) {
        this.resizeElement = params.element;
        this.sharedProperties = params.sharedProperties;
        this.onWindowMovementEnd = params.onWindowMovementEnd;
        this.initAssignEvents();
    }

    destroy() {
        this.resizeElement.removeEventListener('mousedown', this.listenerRef[this.onMouseInteractWithResizeElement.name]);
        this.resizeElement.removeEventListener('mousemove', this.listenerRef[this.onMouseMoveInsideResizeElement.name]);
        this.resizeElement.removeEventListener('mouseleave', this.listenerRef[this.onMouseLeaveResizeElement.name]);
        document.removeEventListener('mousemove', this.listenerRef[this.onResize.name]);
        document.removeEventListener('mouseup', this.listenerRef[this.onMouseUp.name]);
    }

    private initAssignEvents() {
        this.listenerRef[this.onMouseMoveInsideResizeElement.name] = this.onMouseMoveInsideResizeElement.bind(this);
        this.listenerRef[this.onMouseInteractWithResizeElement.name] = this.onMouseInteractWithResizeElement.bind(this);
        this.listenerRef[this.onMouseLeaveResizeElement.name] = this.onMouseLeaveResizeElement.bind(this);
        this.listenerRef[this.onResize.name] = this.onResize.bind(this);
        this.listenerRef[this.onMouseUp.name] = this.onMouseUp.bind(this);

        this.resizeElement.addEventListener('mousedown', this.listenerRef[this.onMouseInteractWithResizeElement.name]);
        this.resizeElement.addEventListener('mousemove', this.listenerRef[this.onMouseMoveInsideResizeElement.name]);
        this.resizeElement.addEventListener('mouseleave', this.listenerRef[this.onMouseLeaveResizeElement.name]);
    }

    private onMouseMoveInsideResizeElement(ev: MouseEvent) {
        if (this.isResizing) return;

        const elementWidth = this.resizeElement.clientWidth;
        const elementHeight = this.resizeElement.clientHeight;
        const elementPosX = this.resizeElement.offsetLeft;
        const elementPosY = this.resizeElement.offsetTop;

        const mouseInnerPosX = ev.clientX - elementPosX;
        const mouseInnerPosY = ev.clientY - elementPosY;

        if (mouseInnerPosX < this.marginEvent) {
            if (mouseInnerPosY < this.edgeMarginMouseCursor) {
                this.resizeElement.style.cursor = 'nwse-resize';
                this.currentResizingEdge = 'leftTop';
            } else if (mouseInnerPosY > (elementHeight - this.edgeMarginMouseCursor)) {
                this.resizeElement.style.cursor = 'nesw-resize';
                this.currentResizingEdge = 'leftBottom';
            } else {
                this.resizeElement.style.cursor = 'ew-resize';
                this.currentResizingEdge = 'left';
            }
        } else if (mouseInnerPosY > (elementHeight - this.marginEvent)) {
            if (mouseInnerPosX < this.edgeMarginMouseCursor) {
                this.resizeElement.style.cursor = 'nesw-resize';
                this.currentResizingEdge = 'leftBottom';
            } else if (mouseInnerPosX > (elementWidth - this.edgeMarginMouseCursor)) {
                this.resizeElement.style.cursor = 'nwse-resize';
                this.currentResizingEdge = 'rightBottom';
            } else {
                this.resizeElement.style.cursor = 'ns-resize';
                this.currentResizingEdge = 'bottom';
            }

        } else if (mouseInnerPosX > (elementWidth - this.marginEvent)) {
            if (mouseInnerPosY < this.edgeMarginMouseCursor) {
                this.resizeElement.style.cursor = 'nesw-resize';
                this.currentResizingEdge = 'rightTop';
            } else if (mouseInnerPosY > (elementHeight - this.edgeMarginMouseCursor)) {
                this.resizeElement.style.cursor = 'nwse-resize';
                this.currentResizingEdge = 'rightBottom';
            } else {
                this.resizeElement.style.cursor = 'ew-resize';
                this.currentResizingEdge = 'right';
            }
        } else if (mouseInnerPosY < this.marginEvent) {
            if (mouseInnerPosX < this.edgeMarginMouseCursor) {
                this.resizeElement.style.cursor = 'nwse-resize';
                this.currentResizingEdge = 'leftTop';
            } else if (mouseInnerPosX > (elementWidth - this.edgeMarginMouseCursor)) {
                this.resizeElement.style.cursor = 'nesw-resize';
                this.currentResizingEdge = 'rightTop';
            } else {
                this.resizeElement.style.cursor = 'ns-resize';
                this.currentResizingEdge = 'top';
            }
        } else {
            this.resizeElement.style.cursor = '';
            this.currentResizingEdge = undefined;
        }
    }

    private onMouseInteractWithResizeElement(ev: MouseEvent) {
        this.isResizing = true;
        this.initialWindowDimensions.x = ev.clientX;
        this.initialWindowDimensions.y = ev.clientY;
        this.initialWindowDimensions.width = this.resizeElement.offsetWidth;
        this.initialWindowDimensions.height = this.resizeElement.offsetHeight;
        document.addEventListener('mousemove', this.listenerRef[this.onResize.name]);
        document.addEventListener('mouseup', this.listenerRef[this.onMouseUp.name]);
    }

    private onMouseLeaveResizeElement() {
        if (this.isResizing) return;
        this.resizeElement.style.cursor = '';
        this.currentResizingEdge = undefined;
    }

    private calculateWindowSize:
        {
            [key in NonNullable<typeof this.currentResizingEdge>]: (distanceX: number, distanceY: number) => (
                NonNullable<Partial<typeof this.initialWindowDimensions>>
            );
        } = {
            left: (dx, dy) => ({
                x: (this.initialWindowDimensions.x + dx),
                y: this.resizeElement.offsetTop,
                width: (this.initialWindowDimensions.width - dx)
            }),
            right: (dx, dy) => ({
                width: (this.initialWindowDimensions.width + dx),
                x: this.resizeElement.offsetLeft,
                y: this.resizeElement.offsetTop
            }),
            bottom: (dx, dy) => ({
                height: (this.initialWindowDimensions.height + dy),
                x: this.resizeElement.offsetLeft,
                y: this.resizeElement.offsetTop
            }),
            top: (dx, dy) => ({
                height: (this.initialWindowDimensions.height - dy),
                x: this.resizeElement.offsetLeft,
                y: (this.initialWindowDimensions.y + dy)
            }),
            leftTop: (dx, dy) => ({
                width: (this.initialWindowDimensions.width - dx),
                height: (this.initialWindowDimensions.height - dy),
                x: (this.initialWindowDimensions.x + dx),
                y: (this.initialWindowDimensions.y + dy)
            }),
            leftBottom: (dx, dy) => ({
                width: (this.initialWindowDimensions.width - dx),
                height: (this.initialWindowDimensions.height + dy),
                x: (this.initialWindowDimensions.x + dx + 1),
                y: this.resizeElement.offsetTop
            }),
            rightTop: (dx, dy) => ({
                width: (this.initialWindowDimensions.width + dx),
                height: (this.initialWindowDimensions.height - dy),
                x: this.resizeElement.offsetLeft,
                y: (this.initialWindowDimensions.y + dy + 1)
            }),
            rightBottom: (dx, dy) => ({
                width: (this.initialWindowDimensions.width + dx),
                height: (this.initialWindowDimensions.height + dy),
                x: this.resizeElement.offsetLeft,
                y: this.resizeElement.offsetTop
            })
        }

    private onResize(ev: MouseEvent) {
        ev.preventDefault();
        if (!this.currentResizingEdge) return;

        const calculateWindowSizeFunc = this.calculateWindowSize[this.currentResizingEdge];
        const mouseInnerPositionX = ev.clientX - this.initialWindowDimensions.x;
        const mouseInnerPositionY = ev.clientY - this.initialWindowDimensions.y;
        const { x, y, width, height } = {
            ...this.initialWindowDimensions,
            ...calculateWindowSizeFunc(mouseInnerPositionX, mouseInnerPositionY)
        };

        if (width > this.minimumWindowSize.width) {
            this.resizeElement.style.left = `${x}px`;
            this.resizeElement.style.width = `${width}px`;
        }
        if (height > this.minimumWindowSize.height) {
            this.resizeElement.style.top = `${y}px`;
            this.resizeElement.style.height = `${height}px`;
        }
        
        this.sharedProperties.resizableElement.x = this.resizeElement.offsetLeft;
        this.sharedProperties.resizableElement.y = this.resizeElement.offsetTop;
        this.sharedProperties.resizableElement.width = this.resizeElement.offsetWidth;
        this.sharedProperties.resizableElement.height = this.resizeElement.offsetHeight;

        if(this.onWindowMovementEnd){
            clearTimeout(this.debounceIdOnWindowMovementEnd);
            this.debounceIdOnWindowMovementEnd = setTimeout(this.onWindowMovementEnd, 50, this.sharedProperties.resizableElement);
        }
    }
    
    private onMouseUp(ev: MouseEvent) {
        this.isResizing = false;
        document.removeEventListener('mousemove', this.listenerRef[this.onResize.name]);
        document.removeEventListener('mouseup', this.listenerRef[this.onMouseUp.name]);
    }

}

export default ResizeWindow;