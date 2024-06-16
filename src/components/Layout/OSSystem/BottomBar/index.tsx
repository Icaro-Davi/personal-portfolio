import Clock from './Clock';
import IconsBar from './IconsBar';
import BottomBarOptions from './Options';
import useOSSystemContext from '../../../hooks/useOSSystemContext';

import type { FC } from "react";

const BottomBar: FC = () => {
    const { state: { bottomBar } } = useOSSystemContext();
    return (
        <div className='z-50 relative'>
            {bottomBar.isActive && (
                <BottomBarOptions />
            )}
            <div className="flex flex-row justify-between h-11 bg-secondary relative">
                <IconsBar />
                <div>
                    <Clock />
                </div>
            </div>
        </div>
    );
}

export default BottomBar;