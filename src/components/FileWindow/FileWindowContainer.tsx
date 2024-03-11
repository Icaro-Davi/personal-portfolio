import { Container, Header } from ".";

import type { FC } from "react";
import type { FileWindowContainerProps } from "./types";

const FileWindowContainer: FC<FileWindowContainerProps & { setMaximized: (isMaximized: boolean) => void}> = ({ children, ...props }) => {
    return (
        <Container headerchildren={<Header {...props} />}>
            {children}
        </Container>
    );
}

export default FileWindowContainer;