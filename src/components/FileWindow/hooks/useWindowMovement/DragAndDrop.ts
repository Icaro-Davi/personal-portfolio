class DragAndDrop {
    private draggableElement: HTMLElement;
    private containerElement: HTMLElement;
    private originalCoordinates = { x: 0, y: 0 };
    private isDragging = false;
    private isAvailableToDrag = false;
    private threshold: number = 5;
    private listenerRef: { [key: string]: (event: MouseEvent | TouchEvent) => void } = {};

    constructor(params: {
        draggableElement: HTMLElement;
        containerElement: HTMLElement;
        threshold?: number;
    }) {
        this.draggableElement = params.draggableElement;
        this.containerElement = params.containerElement;
        this.threshold = params.threshold ?? this.threshold;

        this.listenerRef[this.onStart.name] = this.onStart.bind(this);
        this.listenerRef[this.onMove.name] = this.onMove.bind(this);
        this.listenerRef[this.onEnd.name] = this.onEnd.bind(this);
        this.listenerRef[this.onMouseHover.name] = this.onMouseHover.bind(this);

        this.draggableElement.addEventListener('mousedown', this.listenerRef[this.onStart.name]);
        this.draggableElement.addEventListener('mouseup', this.listenerRef[this.onEnd.name]);
        this.draggableElement.addEventListener('touchstart', this.listenerRef[this.onStart.name]);
        this.draggableElement.addEventListener('mouseup', this.listenerRef[this.onEnd.name]);
        this.draggableElement.addEventListener('mousemove', this.listenerRef[this.onMouseHover.name]);
    }

    destroy() {
        this.draggableElement.removeEventListener('mousedown', this.listenerRef[this.onStart.name]);
        this.draggableElement.removeEventListener('mouseup', this.listenerRef[this.onEnd.name]);
        this.draggableElement.removeEventListener('touchstart', this.listenerRef[this.onStart.name]);
        this.draggableElement.removeEventListener('mouseup', this.listenerRef[this.onEnd.name]);
        this.draggableElement.removeEventListener('mousemove', this.listenerRef[this.onMouseHover.name]);
        document.removeEventListener('mousemove', this.listenerRef[this.onMove.name]);
        document.removeEventListener('touchmove', this.listenerRef[this.onMove.name]);
    }

    private onStart(ev: MouseEvent | TouchEvent) {
        if (!this.isAvailableToDrag) return;

        let mousePosX: number = 0;
        let mousePosY: number = 0;

        if (ev instanceof MouseEvent) {
            mousePosX = ev.clientX;
            mousePosY = ev.clientY;
        } else {
            mousePosX = ev.touches[0].clientX;
            mousePosY = ev.touches[0].clientY;
        }

        document.addEventListener('mousemove', this.listenerRef[this.onMove.name]);
        document.addEventListener('touchmove', this.listenerRef[this.onMove.name]);

        this.isDragging = true;
        this.originalCoordinates.x = mousePosX - this.containerElement.offsetLeft;
        this.originalCoordinates.y = mousePosY - this.containerElement.offsetTop;
    }

    private onMove(ev: MouseEvent | TouchEvent) {
        if (!this.isDragging) return;

        let mousePosX: number = 0;
        let mousePosY: number = 0;

        if (ev instanceof MouseEvent) {
            ev.preventDefault();
            mousePosX = ev.pageX;
            mousePosY = ev.pageY;
        } else {
            mousePosX = ev.touches[0].pageX;
            mousePosY = ev.touches[0].pageY;
        }

        this.setContainerElementCoordinates(
            mousePosX - this.originalCoordinates.x,
            mousePosY - this.originalCoordinates.y
        );
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

    private setContainerElementCoordinates(x: number, y: number) {
        this.containerElement.style.left = `${x}px`;
        this.containerElement.style.top = `${y}px`;
    }
}

export default DragAndDrop;