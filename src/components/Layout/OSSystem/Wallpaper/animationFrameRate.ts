class AnimationFrameRate {

    private animationFunction: (() => void) | undefined = undefined;
    private fps = 5;
    private animationId: number | undefined;
    private fpsInterval: number;
    private time = [Date.now(), Date.now(), 0];

    constructor(fps: number) {
        this.fps = fps;
        this.fpsInterval = 1000 / this.fps;
    }

    public registerAnimation(animationCallback: () => void) {
        this.animationFunction = animationCallback;
        return this;
    }

    public stopAnimation() {
        this.animationId && cancelAnimationFrame(this.animationId);
        return this;
    }

    public startTime() {
        if (!this.animationFunction) throw new Error('Animation function not defined');

        const animate = () => {
            this.animationId = requestAnimationFrame(animate);

            this.time[1] = Date.now();
            const [lastRender, currentTime, deltaTime] = this.time;
            this.time[2] = currentTime - lastRender;

            if (deltaTime > this.fpsInterval) {
                this.time[0] = currentTime - (deltaTime % this.fpsInterval);
                this.animationFunction!();
            }
        }

        animate();
        return this;
    }

}

export default AnimationFrameRate;