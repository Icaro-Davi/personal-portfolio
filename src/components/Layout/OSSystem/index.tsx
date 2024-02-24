import type { FC } from "react";
import Workspace from "./Workspace/Workspace";
import BottomBar from "./BottomBar";

const OSSystem: FC = () => {
    return (
        <div className="flex flex-1 flex-col">
            <Workspace />
            <BottomBar />
        </div>
    );
}

export default OSSystem;