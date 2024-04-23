import { useEffect, useRef } from "react";
import codeFallingAnimation from "./codeFallingAnimation";
import type { FC } from "react";

const MatrixCodeFalling: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let cancelAnimation: (() => void) | undefined;
        if (canvasRef.current) {
            cancelAnimation = codeFallingAnimation(canvasRef.current);
        }
        return () => {
            cancelAnimation?.();
        }
    }, [canvasRef]);

    return (<canvas ref={canvasRef} className="w-full h-full" />);
}

export default MatrixCodeFalling;