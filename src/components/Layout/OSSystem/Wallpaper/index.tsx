import { PiCoffeeBold } from "react-icons/pi";
import MatrixCodeFalling from "./MatrixCodeFalling";

import type { FC } from "react";
import useOSSystemContext from "../../../hooks/useOSSystemContext";

const Wallpaper: FC = props => {
    const { state } = useOSSystemContext();
    return (
        <div className="w-full h-full absolute left-0 top-0">
            <div className="absolute w-full h-full flex justify-center items-center">
                <PiCoffeeBold className="text-background opacity-80" size={400} />
            </div>
            <MatrixCodeFalling animationActive={state.wallpaper.isActive} />
        </div>
    );
}

export default Wallpaper;