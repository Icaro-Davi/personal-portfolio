import { OnWindowMovementEndFunc, SharedPropertiesType } from "./types";

class DragAndDrop {
    private draggableElement: HTMLElement;
    private containerElement: HTMLElement;
    private sharedProperties: SharedPropertiesType;
    private initialInnerMousePositionPercentage = { x: 0, y: 0 };
    private isDragging = false;
    private isAvailableToDrag = false;
    private threshold: number = 5;
    private listenerRef: { [key: string]: (event: MouseEvent | TouchEvent) => void } = {};
    private onWindowMovementEnd: OnWindowMovementEndFunc | undefined;
    private onWindowMovementDebounceId: NodeJS.Timeout | undefined;

    constructor(params: {
        draggableElement: HTMLElement;
        containerElement: HTMLElement;
        sharedProperties: SharedPropertiesType;
        threshold?: number;
        onWindowMovementEnd?: OnWindowMovementEndFunc;
    }) {
        this.draggableElement = params.draggableElement;
        this.containerElement = params.containerElement;
        this.sharedProperties = params.sharedProperties;
        this.threshold = params.threshold ?? this.threshold;
        this.onWindowMovementEnd = params.onWindowMovementEnd;

        this.listenerRef[this.onStart.name] = this.onStart.bind(this);
        this.listenerRef[this.onMove.name] = this.onMove.bind(this);
        this.listenerRef[this.onEnd.name] = this.onEnd.bind(this);
        this.listenerRef[this.onMouseHover.name] = this.onMouseHover.bind(this);

        this.draggableElement.addEventListener('mousedown', this.listenerRef[this.onStart.name]);
        this.draggableElement.addEventListener('touchstart', this.listenerRef[this.onStart.name], { passive: false });
        this.draggableElement.addEventListener('mousemove', this.listenerRef[this.onMouseHover.name]);
        document.addEventListener('mouseup', this.listenerRef[this.onEnd.name]);
        document.addEventListener('touchend', this.listenerRef[this.onEnd.name], { passive: false });
    }

    destroy() {
        this.draggableElement.removeEventListener('mousedown', this.listenerRef[this.onStart.name]);
        this.draggableElement.removeEventListener('mouseup', this.listenerRef[this.onEnd.name]);
        this.draggableElement.removeEventListener('touchstart', this.listenerRef[this.onStart.name]);
        this.draggableElement.removeEventListener('touchend', this.listenerRef[this.onEnd.name]);
        this.draggableElement.removeEventListener('mousemove', this.listenerRef[this.onMouseHover.name]);
        document.removeEventListener('mousemove', this.listenerRef[this.onMove.name]);
        document.removeEventListener('touchmove', this.listenerRef[this.onMove.name]);
        document.removeEventListener('mouseup', this.listenerRef[this.onEnd.name]);
        document.removeEventListener('touchend', this.listenerRef[this.onEnd.name]);
    }

    private onStart(ev: MouseEvent | TouchEvent) {
        if (!this.isAvailableToDrag) return;
        document.addEventListener('mousemove', this.listenerRef[this.onMove.name]);
        document.addEventListener('touchmove', this.listenerRef[this.onMove.name]);

        let mousePosX: number = 0;
        let mousePosY: number = 0;

        if (ev instanceof MouseEvent) {
            mousePosX = ev.clientX;
            mousePosY = ev.clientY;
        } else {
            mousePosX = ev.touches[0].clientX;
            mousePosY = ev.touches[0].clientY;
        }

        this.isDragging = true;

        const innerMouseXPosition = (mousePosX - this.containerElement.offsetLeft);
        const innerMouseYPosition = (mousePosY - this.containerElement.offsetTop);
        this.initialInnerMousePositionPercentage.x = innerMouseXPosition / this.containerElement.offsetWidth;
        this.initialInnerMousePositionPercentage.y = innerMouseYPosition / this.containerElement.offsetHeight;
    }

    private calculePosition(currentMousePosition: { x: number, y: number }): { x: number; y: number } {
        const XPositionInPercentage = this.initialInnerMousePositionPercentage.x;
        const YPositionInPercentage = this.initialInnerMousePositionPercentage.y;
        const innerPositionX = Math.floor(XPositionInPercentage * this.sharedProperties.resizableElement.width);
        const innerPositionY = Math.floor(YPositionInPercentage * this.sharedProperties.resizableElement.height);
        return {
            x: currentMousePosition.x - innerPositionX,
            y: currentMousePosition.y - innerPositionY
        }
    }

    private onMove(ev: MouseEvent | TouchEvent) {
        if (!this.isDragging) return;

        let mousePosX: number = 0;
        let mousePosY: number = 0;

        if (ev instanceof MouseEvent) {
            mousePosX = ev.pageX;
            mousePosY = ev.pageY;
        } else {
            mousePosX = ev.touches[0].pageX;
            mousePosY = ev.touches[0].pageY;
        }

        const { x, y } = this.calculePosition({ x: mousePosX, y: mousePosY });

        this.sharedProperties.resizableElement.x = x;
        this.sharedProperties.resizableElement.y = y;
        const { height, width } = this.sharedProperties.resizableElement;

        this.setContainerElementCoordinates(x, y, width, height);

        if (this.onWindowMovementEnd) {
            clearTimeout(this.onWindowMovementDebounceId);
            this.onWindowMovementDebounceId = setTimeout(this.onWindowMovementEnd, 50, { x, y, width, height });
        }
    }

    private onMouseHover(ev: MouseEvent | TouchEvent) {
        if (ev instanceof MouseEvent) {
            if (
                ev.offsetY >= this.threshold
                && ev.offsetX >= this.threshold
                && (this.draggableElement.offsetWidth - ev.offsetX) >= this.threshold
            ) {
                this.isAvailableToDrag = true;
                this.draggableElement.style.cursor = 'move';
            } else {
                this.isAvailableToDrag = false;
                this.draggableElement.style.cursor === 'move' &&
                    (this.draggableElement.style.cursor = '');
            }
        }
    }

    private onEnd(ev: MouseEvent | TouchEvent) {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.listenerRef[this.onMove.name]);
        document.removeEventListener('touchmove', this.listenerRef[this.onMove.name]);
    }

    private setContainerElementCoordinates(x: number, y: number, width: number, height: number) {
        this.containerElement.style.left = `${x}px`;
        this.containerElement.style.top = `${y}px`;
        this.containerElement.style.width = `${width}px`;
        this.containerElement.style.height = `${height}px`;
    }
}

export default DragAndDrop;