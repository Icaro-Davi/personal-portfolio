import { useMemo } from "react";
import ShortcutAppWrapper from "./ShortcutAppWrapper";
import type { FC } from "react";

const ShortcutAppIconsBar: FC = props => {

    return (
        <nav className="text-primary">
            <div className="flex flex-col">
                <ShortcutAppWrapper title="Skills" iconName="SKILLS" />
                <ShortcutAppWrapper title="Sobre mim teste legals" iconName="ABOUT_ME" />
            </div>
        </nav>
    );
}

export default ShortcutAppIconsBar;