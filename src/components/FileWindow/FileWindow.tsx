"use client";

import { useMemo, useState } from "react";
import useWindowMovement from "../hooks/useWindowMovement";
import Container from "./Container";
import Header from "./Header";
import getStyleByWindowState from "./getStylesByWindowState";

import type { FileWindowContainerProps } from "./types";
import type { WindowState } from "../hooks/useOSSystemReducer/types";

type FileWindowProps = {
  children?: React.ReactNode;
} & FileWindowContainerProps;

const FileWindow: React.FC<FileWindowProps> = ({ children, ...props }) => {
  const [maximize, setMaximize] = useState(false);

  const [coordinates, setCoordinates] = useState<
    FileWindowContainerProps["coordinates"]
  >(props.coordinates);

  const [containerRef, headerRef] = useWindowMovement<
    HTMLDivElement,
    HTMLDivElement
  >({
    onWindowMovementEnd: (coordinates) => {
      setMaximize(false);
      setCoordinates(coordinates);
    },
  });

  const style = useMemo(
    () =>
      getStyleByWindowState({
        positionX: coordinates?.x,
        positionY: coordinates?.y,
        width: coordinates?.width,
        height: coordinates?.height,
        isMaximized: maximize,
      } as WindowState),
    [coordinates, maximize]
  );

  return (
    <Container
      ref={containerRef}
      style={style}
      headerChildren={
        <Header
          {...props}
          ref={headerRef}
          setMaximized={setMaximize}
          isMaximized={maximize}
        />
      }
    >
      {children}
    </Container>
  );
};

export default FileWindow;
