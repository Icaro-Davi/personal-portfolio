'use client';

import { IoMdClose } from "react-icons/io";
import { FaRegWindowMinimize } from "react-icons/fa";
import { LuMaximize } from "react-icons/lu";
import { VscChromeRestore } from "react-icons/vsc";
import events from "./events";

import type { FC } from "react";
import type { HeaderButtonsFileWindowProps } from "./types";

const ICON_SIZE = 23;
const ICON_CLASS_NAME = 'cursor-pointer text-seconday hover:text-light px-1';

const HeaderButtons: FC<HeaderButtonsFileWindowProps> = props => {
    return (
        <div className="flex items-center window-movement-off">
            <div className={ICON_CLASS_NAME}>
                <FaRegWindowMinimize
                    onClick={events.headerButtons.onClickMinimize.bind({ ...props })}
                    size={ICON_SIZE}
                />
            </div>
            <div className={ICON_CLASS_NAME}>
                {
                    props.isMaximized
                        ? (
                            <VscChromeRestore
                                onClick={events.headerButtons.restoreDownWindow.bind({ ...props })}
                                size={ICON_SIZE}
                            />
                        )
                        : (
                            <LuMaximize
                                onClick={events.headerButtons.maxmizeWindow.bind({ ...props })}
                                size={ICON_SIZE}
                            />
                        )
                }
            </div>
            <div className="cursor-pointer text-secondary hover:text-red-600 px-1">
                <IoMdClose
                    size={ICON_SIZE + 1}
                    onClick={events.headerButtons.onClickClose.bind({ ...props })}
                />
            </div>
        </div>
    );
}

export default HeaderButtons;