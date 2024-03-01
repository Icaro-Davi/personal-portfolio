import type { DOMAttributes, Dispatch, ReactNode, RefObject, SetStateAction } from "react"
import type { InnerFunctionElementEvent } from "../types";

export type HeaderButtonsFileWindowProps = {
    onClickClose?: DOMAttributes<SVGAElement>['onClick'];
    onClickMinimize?: DOMAttributes<SVGAElement>['onClick'];
    containerRef: RefObject<HTMLDivElement>;
}

export interface FileWindowHeaderProps extends HeaderButtonsFileWindowProps {
    title: string;
}

export interface FileWindowContainerProps extends Omit<FileWindowHeaderProps, 'containerRef'> {
    children?: ReactNode;
    zIndex?: number;
}

export interface FileWindowProps extends Omit<FileWindowContainerProps, "children"> { };

export type FileWindowElementEvents = {
    headerButtons: {
        maxmizeWindow: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps & { setMaxmized: Dispatch<SetStateAction<boolean>> }>;
        restoreDownWindow: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps & { setMaxmized: Dispatch<SetStateAction<boolean>> }>;
        onClickMinimize: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps>;
        onClickClose: InnerFunctionElementEvent<SVGAElement, HeaderButtonsFileWindowProps>;
    }
}