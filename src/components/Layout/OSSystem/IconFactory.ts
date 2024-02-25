import { RiContactsBookLine, RiFolder2Line, RiFolderUserLine, RiLightbulbLine } from "react-icons/ri";
import { MdOutlineSchool } from "react-icons/md";
import { PiCoffeeBold } from "react-icons/pi";

import type { AppIconsName } from "./types";

const className = 'w-full h-full p-1 transition-all active:drop-shadow-[0_0_3px_theme(colors.primary)] text-primary';

const IconFactory = (iconName: AppIconsName): React.JSX.Element => {
    let Icon: JSX.Element | undefined;
    switch (iconName) {
        case 'ABOUT_ME':
            Icon = RiFolderUserLine({ className });
            break;
        case 'CONTACT':
            Icon = RiContactsBookLine({ className });
            break;
        case 'EDUCATION':
            Icon = MdOutlineSchool({ className });
            break;
        case 'PROJECTS':
            Icon = RiLightbulbLine({ className });
            break;
        case 'SKILLS':
            Icon = RiFolder2Line({ className });
            break;
        case 'COFFEE':
            Icon = PiCoffeeBold({ className });
            break;
    }
    return Icon;
}

export default IconFactory;