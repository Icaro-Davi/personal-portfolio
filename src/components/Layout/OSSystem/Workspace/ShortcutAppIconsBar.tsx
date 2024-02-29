import OpenFileShortcut from "./OpenFileShortcut";
import WorkspaceApps from "../WorkspaceApps";

import type { FC } from "react";

const ShortcutAppIconsBar: FC = () => (
    <nav className="text-primary relative z-10 flex justify-self-start flex-col">
        {WorkspaceApps.map((app, index) => (
            <OpenFileShortcut
                key={`workspace-shortcut-${index}`}
                title={app.title}
                iconName={app.iconName}
                openWindowId={app.id}
                componentTarget={app.content}
            />
        ))}
    </nav>
);

export default ShortcutAppIconsBar;