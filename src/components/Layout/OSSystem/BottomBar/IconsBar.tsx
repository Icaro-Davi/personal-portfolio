'use client';

import { useMemo } from "react";
import AppIcons from "./AppIcons";
import GradientDividerFromCenter from "@/components/Divider/GradientDividerFromCenter";
import useOSSystemContext from "../hooks/useOSSystemContext";

import type { FC } from "react";

const IconsBar: FC = () => {
    const { state } = useOSSystemContext();
    
    const openWindowsReferences = Array.from(state.openWindows).map(([_, _window]) => ({
        name: _window.iconName,
        window: {
            id: _window.id,
            focus: _window.focus,
            title: _window.title
        }
    }));

    const IconOS = useMemo(() => AppIcons([{ name: 'COFFEE', window: { focus: false, title: 'Coffee OS' } }]), []);
    const Icons = useMemo(() => AppIcons(openWindowsReferences), [openWindowsReferences]);

    return (
        <nav className="flex flex-row">
            {...IconOS}
            <GradientDividerFromCenter toVertical />
            {...Icons}
        </nav>
    );
}

export default IconsBar;