import { EventsType } from "./types";

const events: EventsType = {
    container: {
        onMouseDown(ev) {
            this.dispatch({
                type: 'moveWindowToTop',
                payload: { id: this.windowState.id }
            });
        },
        onWindowMovementEnd(coordinates) {
            this.dispatch({
                type: 'updateCoordinates',
                payload: {
                    id: this.windowState.id,
                    ...(typeof coordinates.x === 'number') ? { positionX: coordinates.x } : {},
                    ...(typeof coordinates.y === 'number') ? { positionY: coordinates.y } : {},
                    ...(typeof coordinates.width === 'number') ? { width: coordinates.width } : {},
                    ...(typeof coordinates.height === 'number') ? { height: coordinates.height } : {},
                }
            });
        }
    },
    header: {
        onClickClose() {
            this.dispatch({
                type: 'closeWindow',
                payload: { id: this.windowState.id }
            })
        },
        onClickMinimize() {
            this.dispatch({
                type: 'minimizeWindow',
                payload: { id: this.windowState.id }
            })
        },
        setMaximized(isMaximized) {
            this.dispatch({
                type: 'maximizeWindow',
                payload: { id: this.windowState.id, isMaximized }
            });
        },
    }
}

export default events;