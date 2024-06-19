import { Fragment } from "react";
import useOSSystemContext from "../../../hooks/useOSSystemContext";
import ScreenEffect_ from "./ScreenEffect";

const ScreenEffect: React.FC = () => {
    const { state } = useOSSystemContext();
    if(!state.screenEffect.isActive) return <Fragment />;
    return <ScreenEffect_ />;
}

export default ScreenEffect;