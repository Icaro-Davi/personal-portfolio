import IconDash from "@/components/IconDash/IconDash";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import type { IconType } from "react-icons";

type OptionButtonProps = {
    icon: IconType;
    iconActive: boolean;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const OptionButton: FC<OptionButtonProps> = ({ iconActive, icon, children, ...props }) => (
    <button {...props} className="w-full p-1 hover:bg-secondary flex items-center justify-start gap-1 text-primary">
        <IconDash dash={iconActive} Icon={icon} />
        {children}
    </button>
);

export default OptionButton;