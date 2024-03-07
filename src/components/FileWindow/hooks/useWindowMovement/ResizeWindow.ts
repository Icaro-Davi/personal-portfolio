import type { OnWindowMovementEndFunc } from "./types";

class ResizeWindow {

    private resizeElement: HTMLElement;
    private listenerRef: { [key: string]: (event: MouseEvent) => void } = {};
    private isResizing = false;
    private currentResizingEdge: undefined | 'leftTop' | 'left' | 'leftBottom' | 'bottom' | 'rightBottom' | 'right' | 'rightTop' | 'top';
    private marginEvent = 5;
    private intialWindowDimensions = { x: 0, y: 0, width: 0, height: 0 };
    private minimumWindowSize = { width: 300, height: 400 };
    private edgeMarginMouseCursor = this.marginEvent;
    private onWindowMovementEnd: OnWindowMovementEndFunc | undefined;

    constructor(params: { element: HTMLElement; onWindowMovementEnd?: OnWindowMovementEndFunc }) {
        this.resizeElement = params.element;
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

        const mouseInnerPosX = ev.offsetX;
        const mouseInnerPosY = ev.offsetY;

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
        ev.preventDefault();
        this.isResizing = true;
        this.intialWindowDimensions.x = ev.clientX;
        this.intialWindowDimensions.y = ev.clientY;
        this.intialWindowDimensions.width = this.resizeElement.offsetWidth;
        this.intialWindowDimensions.height = this.resizeElement.offsetHeight;
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
                NonNullable<Partial<typeof this.intialWindowDimensions>>
            );
        } = {
            left: (dx, dy) => ({
                x: (this.intialWindowDimensions.x + dx),
                y: this.resizeElement.offsetTop,
                width: (this.intialWindowDimensions.width - dx)
            }),
            right: (dx, dy) => ({
                width: (this.intialWindowDimensions.width + dx),
                x: this.resizeElement.offsetLeft,
                y: this.resizeElement.offsetTop
            }),
            bottom: (dx, dy) => ({
                height: (this.intialWindowDimensions.height + dy),
                x: this.resizeElement.offsetLeft,
                y: this.resizeElement.offsetTop
            }),
            top: (dx, dy) => ({
                height: (this.intialWindowDimensions.height - dy),
                x: this.resizeElement.offsetLeft,
                y: (this.intialWindowDimensions.y + dy)
            }),
            leftTop: (dx, dy) => ({
                width: (this.intialWindowDimensions.width - dx),
                height: (this.intialWindowDimensions.height - dy),
                x: (this.intialWindowDimensions.x + dx),
                y: (this.intialWindowDimensions.y + dy)
            }),
            leftBottom: (dx, dy) => ({
                width: (this.intialWindowDimensions.width - dx),
                height: (this.intialWindowDimensions.height + dy),
                x: (this.intialWindowDimensions.x + dx + 1),
                y: this.resizeElement.offsetTop
            }),
            rightTop: (dx, dy) => ({
                width: (this.intialWindowDimensions.width + dx),
                height: (this.intialWindowDimensions.height - dy),
                x: this.resizeElement.offsetLeft,
                y: (this.intialWindowDimensions.y + dy + 1)
            }),
            rightBottom: (dx, dy) => ({
                width: (this.intialWindowDimensions.width + dx),
                height: (this.intialWindowDimensions.height + dy),
                x: this.resizeElement.offsetLeft,
                y: this.resizeElement.offsetTop
            })
        }

    private onResize(ev: MouseEvent) {
        if (!this.currentResizingEdge) return;

        const calculateWindowSizeFunc = this.calculateWindowSize[this.currentResizingEdge];
        const { x, y, width, height } = {
            ...this.intialWindowDimensions,
            ...calculateWindowSizeFunc(
                (ev.clientX - this.intialWindowDimensions.x),
                ev.clientY - this.intialWindowDimensions.y
            )
        };

        if (width > this.minimumWindowSize.width) {
            this.resizeElement.style.left = `${x}px`;
            this.resizeElement.style.width = `${width}px`;
        }
        if (height > this.minimumWindowSize.height) {
            this.resizeElement.style.height = `${height}px`;
            this.resizeElement.style.top = `${y}px`;
        }
    }

    private onMouseUp(ev: MouseEvent) {
        this.isResizing = false;
        document.removeEventListener('mousemove', this.listenerRef[this.onResize.name]);
        document.removeEventListener('mouseup', this.listenerRef[this.onMouseUp.name]);
        this.onWindowMovementEnd?.({
            x: this.resizeElement.offsetLeft,
            y: this.resizeElement.offsetTop,
            width: this.resizeElement.offsetWidth,
            height: this.resizeElement.offsetHeight
        });
    }

}

export default ResizeWindow;