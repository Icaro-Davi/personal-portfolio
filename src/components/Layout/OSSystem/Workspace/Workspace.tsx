import ShortcutAppIconsBar from "./ShortcutAppIconsBar";
import OpenFileWindows from "./OpenFileWindows";
import type { FC } from "react";

const Workspace: FC = () => {
    return (
        <div className="flex flex-1 relative p-2 overflow-hidden">
            <ShortcutAppIconsBar />
            <OpenFileWindows />
        </div>
    );
}

export default Workspace;