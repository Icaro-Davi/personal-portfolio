'use client';

import { Fragment, memo, useMemo } from "react";
import { Container, Header } from "@/components/FileWindow";
import useOSSystemContext from "../hooks/useOSSystemContext";
import useWindowMovement from "../hooks/useWindowMovement";
import events from "./events";

import type { FC } from "react";
import type { FileWindowHeaderProps } from "@/components/FileWindow/types";
import type { WindowState } from "../hooks/useOSSystemReducer/types";

const getStyleByWindowState = (params: WindowState) => ({
    ...params.isMaximized
        ? { top: 'unset', left: 'unset', width: '100%', height: '100%', }
        : {
            ...(typeof params?.positionY === 'number') ? { top: `${params.positionY}px` } : { top: '' },
            ...(typeof params?.positionX === 'number') ? { left: `${params.positionX}px` } : { left: '' },
            ...(typeof params?.width === 'number') ? { width: `${params.width}px` } : { width: '' },
            ...(typeof params?.height === 'number') ? { height: `${params.height}px` } : { height: '' },
        },
});

const FileWindowLayout: FC<{ windowId: string; }> = props => {
    const { state, dispatch } = useOSSystemContext();
    const windowState = state.openWindows.get(props.windowId);

    if (!windowState || windowState.isMinimized) return <Fragment />;

    const [containerRef, headerRef] = useWindowMovement<HTMLDivElement, HTMLDivElement>({
        onWindowMovementEnd: events.container.onWindowMovementEnd.bind({ windowState, dispatch })
    });

    const containerProps = useMemo(() => ({
        onMouseDown: events.container.onMouseDown.bind({ windowState, dispatch })
    }), []);

    const headerProps: FileWindowHeaderProps = useMemo(() => ({
        containerRef,
        title: windowState.title,
        setMaximized: events.header.setMaximized.bind({ windowState, dispatch }),
        onClickClose: events.header.onClickClose.bind({ windowState, dispatch }),
        onClickMinimize: events.header.onClickMinimize.bind({ windowState, dispatch })
    }), []);

    const styles = getStyleByWindowState(windowState);
    
    return (
        <Container
            ref={containerRef}
            style={styles}
            headerchildren={(
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

export default memo(FileWindowLayout);