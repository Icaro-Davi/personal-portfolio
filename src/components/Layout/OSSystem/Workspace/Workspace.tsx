import ShortcutAppIconsBar from "./ShortcutAppIconsBar";
import OpenFileWindows from "./OpenFileWindows";
import type { FC } from "react";

const Workspace: FC = () => {
    return (
        <div className="flex flex-1 relative overflow-hidden">
            <ShortcutAppIconsBar />
            <OpenFileWindows />
        </div>
    );
}

export default Workspace;