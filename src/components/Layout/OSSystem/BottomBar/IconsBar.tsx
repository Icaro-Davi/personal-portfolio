'use client';

import { useCallback, useEffect, useMemo, useRef } from "react";
import AppIcons from "./AppIcons";
import GradientDividerFromCenter from "@/components/Divider/GradientDividerFromCenter";
import useOSSystemContext from "../../../hooks/useOSSystemContext";

import type { FC } from "react";

const IconsBar: FC = () => {
    const { state, dispatch } = useOSSystemContext();
    const iconsDivRef = useRef<HTMLDivElement>(null);

    const openWindowsReferences = Array.from(state.openWindows).map(([_, _window]) => ({
        name: _window.iconName,
        window: {
            id: _window.id,
            focus: _window.id === state.windowQueue[state.windowQueue.length - 1] && !_window.isMinimized,
            title: _window.title
        }
    }));

    const Icons = useMemo(() => AppIcons(openWindowsReferences), [openWindowsReferences]);
    const IconOS = useMemo(() => AppIcons([{
        name: 'COFFEE',
        window: { focus: false, title: 'Coffee OS' },
        onClick: () => dispatch({ type: 'bottomBarVisibility', payload: { isActive: !state.bottomBar.isActive } })
    }]), [dispatch, state.bottomBar.isActive]);

    const getMaxWidthToIconsBar = () => `${window.outerWidth - 148}px`;

    const onWindowResize = useCallback((e: UIEvent) => {
        if (iconsDivRef.current) {
            iconsDivRef.current.style.setProperty('--max-width', getMaxWidthToIconsBar());
        }
    }, [iconsDivRef]);

    useEffect(() => {
        window.addEventListener('resize', onWindowResize);
        return () => {
            window.removeEventListener('resize', onWindowResize);
        }
    }, [onWindowResize]);

    return (
        <nav className="flex flex-row">
            {...IconOS}
            <GradientDividerFromCenter toVertical />
            <div
                ref={iconsDivRef}
                style={{ whiteSpace: 'nowrap', ...{ '--max-width': getMaxWidthToIconsBar() } }}
                className="overflow-x-auto overflow-y-hidden max-sm:w-[var(--max-width)]"
            >
                {...Icons}
            </div>
        </nav>
    );
}

export default IconsBar;