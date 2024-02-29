import type { ReactNode } from "react";
import type { AppIcon } from "../types";

export type AppIconWrapperProps = {
    children: ReactNode;
    className?: string;
    windowTitle: string;
    windowInFocus?: boolean;
    windowId?: string;
    onClick?: () => void;
}

export type AppIcons = (AppIcon & { onClick?: () => void })[];