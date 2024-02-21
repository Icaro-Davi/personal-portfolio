import type {ReactNode} from "react"

export type FileWindowHeaderProps = {
    title: string;
}

export interface FileWindowContainerProps extends FileWindowHeaderProps {
    children?: ReactNode;
}

export interface FileWindowProps extends Omit<FileWindowContainerProps, "children"> {};
