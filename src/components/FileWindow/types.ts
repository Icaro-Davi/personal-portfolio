import type {DOMAttributes, ReactNode} from "react"

export type HeaderButtonsFileWindowProps = {
    onClickClose?: DOMAttributes<SVGAElement>['onClick'];
    onClickMinimize?: DOMAttributes<SVGAElement>['onClick'];
}

export interface FileWindowHeaderProps extends HeaderButtonsFileWindowProps {
    title: string;
}

export interface FileWindowContainerProps extends FileWindowHeaderProps {
    children?: ReactNode;
    zIndex?: number;
}

export interface FileWindowProps extends Omit<FileWindowContainerProps, "children"> {};
