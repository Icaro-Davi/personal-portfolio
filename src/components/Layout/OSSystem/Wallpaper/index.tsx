import { FC } from "react";
import MatrixCodeFalling from "./MatrixCodeFalling";

const Wallpaper: FC = props => (
    <div className="w-full h-full absolute left-0 top-0">
        <MatrixCodeFalling />
    </div>
);

export default Wallpaper;