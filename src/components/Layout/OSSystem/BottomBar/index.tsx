import Clock from './Clock';
import IconsBar from './IconsBar';

import type { FC } from "react";

/* 
Talvez criar um gerenciador de janelas onde ele indica em qual o usuário abriu, e com base nisso, adicionar a janela em um array
que guarda o gerenciamento da janela ex: { status: minimized|show, ReactIcon, focus: false|true } com base nisso controlar
o estado da janela e dos atalhos no workspace e bottombar. */

const BottomBar: FC = () => {
    return (
        <div className="flex flex-row justify-between h-11 bg-secondary z-50">
            <IconsBar appIcons={[
                { focus: false, name: 'ABOUT_ME' },
                { focus: true, name: 'CONTACT' },
                { focus: false, name: 'EDUCATION' },
                { focus: false, name: 'PROJECTS' },
                { focus: false, name: 'SKILLS' },
            ]} />
            <div>
                <Clock />
            </div>
        </div>
    );
}

export default BottomBar;