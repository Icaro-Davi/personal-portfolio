import type { DOMAttributes, Dispatch, ReactNode, RefObject, SetStateAction } from "react"
import type { InnerFunctionElementEvent } from "../types";
import type { OnWindowMovementEndFunc } from "./hooks/useWindowMovement/types";

export type HeaderButtonsFileWindowProps = {
    onClickClose?: DOMAttributes<SVGAElement>['onClick'];
    onClickMinimize?: DOMAttributes<SVGAElement>['onClick'];
    onMaximize?: (isMaximized: boolean) => void;
    containerRef: RefObject<HTMLDivElement>;
    isMaximized?: boolean;
    setMaximized: Dispatch<SetStateAction<boolean>>;
}

export interface FileWindowHeaderProps extends HeaderButtonsFileWindowProps {
    title: string;
}

export interface FileWindowContainerProps extends Omit<FileWindowHeaderProps, 'containerRef' | 'setMaximized'> {
    children?: ReactNode;
    zIndex?: number;
    onWindowMovementEnd?: OnWindowMovementEndFunc;
    coordinates?: {
        x?: number; y?: number; 
        width?: number; height?: number;
    }
}

export interface FileWindowProps extends Omit<FileWindowContainerProps, "children"> { };

export type FileWindowElementEvents = {
    headerButtons: {
        maxmizeWindow: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps>;
        restoreDownWindow: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps>;
        onClickMinimize: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps>;
        onClickClose: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps>;
    }
}