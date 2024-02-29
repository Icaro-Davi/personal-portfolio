import Clock from './Clock';
import IconsBar from './IconsBar';

import type { FC } from "react";

const BottomBar: FC = () => {
    return (
        <div className="flex flex-row justify-between h-11 bg-secondary z-50">
            <IconsBar />
            <div>
                <Clock />
            </div>
        </div>
    );
}

export default BottomBar;