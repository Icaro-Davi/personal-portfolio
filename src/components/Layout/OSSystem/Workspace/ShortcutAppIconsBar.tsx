import ShortcutAppWrapper from "./ShortcutAppWrapper";
import type { FC } from "react";

const ShortcutAppIconsBar: FC = props => {

    return (
        <nav className="text-primary">
            <div className="flex flex-col">
                <ShortcutAppWrapper title="Skills" iconName="SKILLS" />
                <ShortcutAppWrapper title="Sobre mim" iconName="ABOUT_ME" />
                <ShortcutAppWrapper title="Contato" iconName="CONTACT" />
                <ShortcutAppWrapper title="Educação" iconName="EDUCATION" />
                <ShortcutAppWrapper title="Projetos" iconName="PROJECTS" />
            </div>
        </nav>
    );
}

export default ShortcutAppIconsBar;