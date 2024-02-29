import type { FC } from "react";
import { FileWindowHeaderProps } from "./types";
import HeaderButtons from "./HeaderButtons";

const Header: FC<FileWindowHeaderProps> = ({ title, ...props }) => {
    return (
        <div className="flex justify-between items-center bg-primary text-secondary px-2 py-1">
            <h1 className=" text-lg font-bold">{title}</h1>
            <HeaderButtons  {...props} />
        </div>
    );
}

export default Header;