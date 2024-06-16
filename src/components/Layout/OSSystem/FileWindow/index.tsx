'use client';

import { Fragment, memo } from "react";
import useOSSystemContext from "../../../hooks/useOSSystemContext";

import type { FC } from "react";
import FileWindow from "./FileWindow";

const FileWindowLayout: FC<{ windowId: string; }> = memo(
    props => {
        const { state } = useOSSystemContext();
        const windowState = state.openWindows.get(props.windowId)!;
        if (!windowState || windowState.isMinimized) return (<Fragment />);
        return (<FileWindow {...props} />);
    }
);

FileWindowLayout.displayName = FileWindowLayout.name;

export default FileWindowLayout;