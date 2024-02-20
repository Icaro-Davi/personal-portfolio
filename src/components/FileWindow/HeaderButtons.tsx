'use client';

import { FC, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegWindowMinimize } from "react-icons/fa";
import { LuMaximize } from "react-icons/lu";
import { VscChromeRestore } from "react-icons/vsc";

const ICON_SIZE = 23;
const ICON_CLASS_NAME = 'cursor-pointer text-seconday hover:text-light';

const HeaderButtons: FC = props => {
    const [isMaximized, setMaxmized] = useState(false);

    const maxmizeWindow = () => setMaxmized(true);
    const restoreDownWindow = () => setMaxmized(false);
    
    return (
        <div className="flex space-x-2 items-center">
            <FaRegWindowMinimize size={ICON_SIZE} className={ICON_CLASS_NAME} />
            {
                isMaximized
                    ? (
                        <VscChromeRestore
                            onClick={restoreDownWindow}
                            size={ICON_SIZE}
                            className={ICON_CLASS_NAME}
                        />
                    )
                    : (
                        <LuMaximize
                            onClick={maxmizeWindow}
                            size={ICON_SIZE}
                            className={ICON_CLASS_NAME}
                        />
                    )
            }
            <IoMdClose
                size={ICON_SIZE + 1}
                className="cursor-pointer text-secondary hover:text-red-500"
            />
        </div>
    );
}

export default HeaderButtons;