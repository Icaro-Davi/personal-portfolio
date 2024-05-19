import { IoMdClose } from "react-icons/io";
import { FaRegWindowMinimize } from "react-icons/fa";
import { LuMaximize } from "react-icons/lu";
import { VscChromeRestore } from "react-icons/vsc";
import events from "./events";

import type { ButtonHTMLAttributes, FC } from "react";
import type { HeaderButtonsFileWindowProps } from "./types";
import type { IconType } from "react-icons";

const ICON_SIZE = 23;

const Button: FC<{ icon: IconType } & ButtonHTMLAttributes<HTMLButtonElement>> = ({ icon: Icon, className, ...props }) => {
    return (
        <button className={`cursor-pointer text-secondary hover:text-light px-1 ${className}`}  {...props}>
            <Icon size={ICON_SIZE} />
        </button>
    )
}

const HeaderButtons: FC<HeaderButtonsFileWindowProps> = props => {
    return (
        <div className="flex items-center window-movement-off">
            <Button
                icon={FaRegWindowMinimize}
                onClick={events.headerButtons.onClickMinimize.bind({ ...props })}
            />
            {
                props.isMaximized
                    ? (
                        <Button
                            icon={VscChromeRestore}
                            onClick={events.headerButtons.restoreDownWindow.bind({ ...props })}
                        />
                    )
                    : (
                        <Button
                            icon={LuMaximize}
                            onClick={events.headerButtons.maximizeWindow.bind({ ...props })}
                        />
                    )
            }
            <Button
                className="hover:text-red-500"
                icon={IoMdClose}
                onClick={events.headerButtons.onClickClose.bind({ ...props })}
            />
        </div>
    );
}

export default HeaderButtons;