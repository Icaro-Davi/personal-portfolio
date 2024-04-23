import type { DOMAttributes, HTMLAttributes, ReactNode } from "react"
import type { InnerFunctionElementEvent } from "../types";
import type { OnWindowMovementEndFunc } from "../Layout/OSSystem/hooks/useWindowMovement/types";

export type HeaderButtonsFileWindowProps = {
    onClickClose?: DOMAttributes<SVGAElement>['onClick'];
    onClickMinimize?: DOMAttributes<SVGAElement>['onClick'];
    onMaximize?: (isMaximized: boolean) => void;
    isMaximized?: boolean;
    setMaximized: (isMaximized: boolean) => void;
}

export type ContainerProps = {
    headerChildren: ReactNode;
    children: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

export interface FileWindowHeaderProps extends HeaderButtonsFileWindowProps {
    title: string;
}

export interface FileWindowContainerProps extends Omit<FileWindowHeaderProps, 'containerRef' | 'setMaximized'> {
    children?: ReactNode;
    onWindowMovementEnd?: OnWindowMovementEndFunc;
    onMouseDown?: DOMAttributes<HTMLDivElement>['onMouseDown'];
    windowId: string;
    coordinates?: {
        x?: number; y?: number;
        width?: number; height?: number;
    }
}

export interface FileWindowProps extends Omit<FileWindowContainerProps, "children"> { };

export type FileWindowElementEvents = {
    headerButtons: {
        maximizeWindow: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps>;
        restoreDownWindow: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps>;
        onClickMinimize: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps>;
        onClickClose: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps>;
    }
}