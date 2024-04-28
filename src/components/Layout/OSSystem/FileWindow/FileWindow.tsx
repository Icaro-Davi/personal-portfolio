'use client';

import { useMemo } from "react";
import { Container, Header } from "@/components/FileWindow";
import useOSSystemContext from "../hooks/useOSSystemContext";
import useWindowMovement from "../hooks/useWindowMovement";
import getStyleByWindowState from "./getStylesByWindowState";
import events from "./events";

import type { FC } from "react";
import type { FileWindowHeaderProps } from "@/components/FileWindow/types";

const FileWindow: FC<{ windowId: string; }> = props => {
    const { state, dispatch } = useOSSystemContext();
    const windowState = state.openWindows.get(props.windowId)!;

    const [containerRef, headerRef] = useWindowMovement<HTMLDivElement, HTMLDivElement>({
        onWindowMovementEnd: events.container.onWindowMovementEnd.bind({ windowState, dispatch })
    });

    const containerProps = useMemo(() => ({
        onMouseDown: events.container.onMouseDown.bind({ windowState, dispatch })
    }), [windowState, dispatch]);

    const headerProps: FileWindowHeaderProps = useMemo(() => ({
        containerRef,
        title: windowState.title,
        setMaximized: events.header.setMaximized.bind({ windowState, dispatch }),
        onClickClose: events.header.onClickClose.bind({ windowState, dispatch }),
        onClickMinimize: events.header.onClickMinimize.bind({ windowState, dispatch })
    }), [containerRef, windowState, dispatch]);

    const styles = getStyleByWindowState(windowState);

    return (
        <Container
            ref={containerRef}
            style={styles}
            headerChildren={(
                <Header
                    ref={headerRef}
                    isMaximized={windowState.isMaximized}
                    {...{ ...headerProps }}
                />
            )}
            {...containerProps}
        >
            {windowState.children}
        </Container>
    )
}

export default FileWindow;