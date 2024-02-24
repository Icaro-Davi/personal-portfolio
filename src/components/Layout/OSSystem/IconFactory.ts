import { RiContactsBookLine, RiFolder2Line, RiFolderUserLine, RiLightbulbLine } from "react-icons/ri";
import { MdOutlineSchool } from "react-icons/md";

import type { AppIconsName } from "./types";

const className = 'w-full h-full p-1 text-primary';

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
    }
    return Icon;
}

export default IconFactory;