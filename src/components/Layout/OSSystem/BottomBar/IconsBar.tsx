'use client';

import { useMemo } from "react";
import AppIcons from "./AppIcons";

import type { FC } from "react";
import type { IconsBarProps } from "../types";
import GradientDividerFromCenter from "@/components/Divider/GradientDividerFromCenter";

const IconsBar: FC<IconsBarProps> = props => {
    const IconOS = useMemo(() => AppIcons([{ name: 'COFFEE', focus: false }]), []);
    const Icons = useMemo(() => AppIcons(props.appIcons), props.appIcons);
    return (
        <nav className="flex flex-row">
            {...IconOS}
            <GradientDividerFromCenter toVertical />
            {...Icons}
        </nav>
    );
}

export default IconsBar;