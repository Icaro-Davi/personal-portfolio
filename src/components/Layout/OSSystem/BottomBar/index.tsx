import Clock from './Clock';
import IconsBar from './IconsBar';

import type { FC } from "react";

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