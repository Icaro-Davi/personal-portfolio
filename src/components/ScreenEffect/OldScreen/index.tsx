import className from "./styles";
import { FC } from "react";

const OldScreenEffect: FC = () => (
    <div className={className.oldScreen.toClassName()} />
);

export default OldScreenEffect;