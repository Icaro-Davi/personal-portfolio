import { useEffect, useRef } from "react";
import codeFallingAnimation from "./codeFallingAnimation";

import type { FC } from 'react';
import type { WallpaperProps } from "../types";

const MatrixCodeFalling: FC<WallpaperProps> = (props, ref) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cancelAnimationRef = useRef<Function>();

    const onResize = (e: UIEvent) => {
        if (canvasRef.current) {
            cancelAnimationRef.current?.();
            cancelAnimationRef.current = codeFallingAnimation(canvasRef.current);
        }
    }

    useEffect(() => {
        if (canvasRef.current && props.animationActive) {
            cancelAnimationRef.current = codeFallingAnimation(canvasRef.current);
            window.addEventListener('resize', onResize);
        }

        return () => {
            cancelAnimationRef.current?.();
            window.removeEventListener('resize', onResize);
        }
    }, [canvasRef, props.animationActive]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full"
        />
    );
};

export default MatrixCodeFalling;