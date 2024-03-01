import type { FileWindowElementEvents } from "./types";

const events: FileWindowElementEvents = {
    headerButtons: {
        maxmizeWindow: function () {
            if (this.containerRef.current) {
                this.containerRef.current.style.width = "100%";
                this.containerRef.current.style.height = "100%";
            }
            this.setMaxmized(true);
        },

        restoreDownWindow: function () {
            if (this.containerRef.current) {
                this.containerRef.current.style.width = "";
                this.containerRef.current.style.height = "";
            }
            this.setMaxmized(false);
        },

        onClickMinimize: function (e) {
            e.stopPropagation();
            this.onClickMinimize?.(e);
        },

        onClickClose: function (e) {
            e.stopPropagation();
            this.onClickClose?.(e);
        }
    }
}

export default events;