import className from "./styles";
import { forwardRef, memo } from 'react';

import type { ContainerProps } from "./types";

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => (
    <div
        {...props}
        ref={ref}
        className={className.container.toClassName()}
    >
        {props.headerchildren}
        <div className="p-2 text-base flex-1" >
            {props.children}
        </div>
    </div>
))

export default memo(Container);