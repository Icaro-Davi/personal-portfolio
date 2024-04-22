import type { FC } from "react";
import type { IconType } from "react-icons";

type IconShapeType = {
    title: string;
    href?: string;
    icon: IconType
}

const IconShape: FC<IconShapeType> = ({ icon: Icon, title, href }) => (
    <a href={href} target="_blank" className="p-1 text-center inline-block text-primary border-2 border-primary min-w-24 rounded-tr-lg bg-background">
        <div className="w-11 h-11 m-auto">
            <Icon className="w-full h-full scale-110" />
        </div>
        <div className="border-t-2 border-secondary">
            <span className="font-bold w-full">{title}</span>
        </div>
    </a>
);

export default IconShape;