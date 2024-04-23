import { Fragment } from "react";
import OldScreenEffect from "./OldScreen";
import useOSSystemContext from "../hooks/useOSSystemContext";

import type { FC } from "react";

const ScreenEffect: FC = () => {
    const { state } = useOSSystemContext();
    if(!state.screenEffect.isActive) return <Fragment />;
    return (
        <div className="w-full h-full absolute z-50 pointer-events-none">
            <OldScreenEffect />
        </div>
    )
}


export default ScreenEffect;