'use client';

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegWindowMinimize } from "react-icons/fa";
import { LuMaximize } from "react-icons/lu";
import { VscChromeRestore } from "react-icons/vsc";
import events from "./events";

import type { FC } from "react";
import type { HeaderButtonsFileWindowProps } from "./types";

const ICON_SIZE = 23;
const ICON_CLASS_NAME = 'cursor-pointer text-seconday hover:text-light';

const HeaderButtons: FC<HeaderButtonsFileWindowProps> = props => {
    const [isMaximized, setMaxmized] = useState(false);

    return (
        <div className="flex space-x-2 items-center">
            <FaRegWindowMinimize
                onClick={events.headerButtons.onClickMinimize.bind({ ...props })}
                size={ICON_SIZE}
                className={ICON_CLASS_NAME}
            />
            {
                isMaximized
                    ? (
                        <VscChromeRestore
                            onClick={events.headerButtons.restoreDownWindow.bind({ ...props, setMaxmized })}
                            size={ICON_SIZE}
                            className={ICON_CLASS_NAME}
                        />
                    )
                    : (
                        <LuMaximize
                            onClick={events.headerButtons.maxmizeWindow.bind({ ...props, setMaxmized })}
                            size={ICON_SIZE}
                            className={ICON_CLASS_NAME}
                        />
                    )
            }
            <IoMdClose
                size={ICON_SIZE + 1}
                className="cursor-pointer text-secondary hover:text-red-600"
                onClick={events.headerButtons.onClickClose.bind({ ...props })}
            />
        </div>
    );
}

export default HeaderButtons;