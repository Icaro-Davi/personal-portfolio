import type { FileWindowElementEvents } from "./types";

const events: FileWindowElementEvents = {
    headerButtons: {
        maxmizeWindow: function (ev) {
            ev.nativeEvent.stopImmediatePropagation(); ev.stopPropagation(); ev.preventDefault();
            this.setMaximized(true);
            this.onMaximize?.(true);
        },
        
        restoreDownWindow: function (ev) {
            ev.nativeEvent.stopImmediatePropagation(); ev.stopPropagation(); ev.preventDefault();
            this.setMaximized(false);
            this.onMaximize?.(false);
        },

        onClickMinimize: function (ev) {
            ev.stopPropagation();
            this.onClickMinimize?.(ev);
        },

        onClickClose: function (ev) {
            ev.stopPropagation();
            this.onClickClose?.(ev);
        }
    }
}

export default events;