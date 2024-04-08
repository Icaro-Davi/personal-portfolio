import type { FC, ReactNode } from "react";
import className from "./styles";

const DocumentFile: FC<{ children: ReactNode }> = props => {
    return (
        <div className={className.container.toClassName()}>
            <div className={className.paper.toClassName()}>
                {props.children}
            </div>
        </div>
    );
}

export default DocumentFile;