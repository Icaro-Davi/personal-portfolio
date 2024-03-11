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
            console.log('coordinates', coordinates)
            this.dispatch({
                type: 'maxmizeWindow',
                payload: { id: this.windowState.id, isMaximized: false }
            });
            this.dispatch({
                type: 'updateCoordinates',
                payload: {
                    id: this.windowState.id,
                    ...coordinates.x ? { positionX: coordinates.x } : {},
                    ...coordinates.y ? { positionY: coordinates.y } : {},
                    ...coordinates.width ? { width: coordinates.width } : {},
                    ...coordinates.height ? { height: coordinates.height } : {},
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
                type: 'maxmizeWindow',
                payload: { id: this.windowState.id, isMaximized }
            });
        },
    }
}

export default events;