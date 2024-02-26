import { RiContactsBookLine, RiFolder2Line, RiFolderUserLine, RiLightbulbLine } from "react-icons/ri";
import { MdOutlineSchool } from "react-icons/md";
import { PiCoffeeBold } from "react-icons/pi";

import type { AppIconsName } from "./types";
import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    icon: new CreateTailwindStyle<'withGroupHover'>([
        'w-full',
        'h-full',
        'p-1',
        'transition-all',
        'text-primary',
        'active:drop-shadow-[0_0_3px_theme(colors.primary)]',
    ])
        .addConditional('withGroupHover', (withGroupHover: boolean) => (
            withGroupHover
                ? 'group-hover:drop-shadow-[0_0_3px_theme(colors.primary)]'
                : ''
        ))
}

const IconFactory = (iconName: AppIconsName, withGroupHover?: boolean): React.JSX.Element => {
    let Icon: JSX.Element | undefined;
    className.icon.callConditional('withGroupHover', withGroupHover);
    switch (iconName) {
        case 'ABOUT_ME':
            Icon = RiFolderUserLine({ className: className.icon.toClassName() });
            break;
        case 'CONTACT':
            Icon = RiContactsBookLine({ className: className.icon.toClassName() });
            break;
        case 'EDUCATION':
            Icon = MdOutlineSchool({ className: className.icon.toClassName() });
            break;
        case 'PROJECTS':
            Icon = RiLightbulbLine({ className: className.icon.toClassName() });
            break;
        case 'SKILLS':
            Icon = RiFolder2Line({ className: className.icon.toClassName() });
            break;
        case 'COFFEE':
            Icon = PiCoffeeBold({ className: className.icon.toClassName() });
            break;
    }
    return Icon;
}

export default IconFactory;