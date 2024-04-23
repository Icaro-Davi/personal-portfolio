import ShortcutAppIconsBar from "./ShortcutAppIconsBar";
import OpenFileWindows from "./OpenFileWindows";
import type { FC } from "react";
import Wallpaper from "../Wallpaper";

const Workspace: FC = () => {
    return (
        <div className="flex flex-1 relative overflow-hidden">
            <Wallpaper />
            <ShortcutAppIconsBar />
            <OpenFileWindows />
        </div>
    );
}

export default Workspace;