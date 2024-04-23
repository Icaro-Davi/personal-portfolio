import className from "./styles";
import { forwardRef, memo } from 'react';

import type { ContainerProps } from "./types";

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ headerChildren, ...props }, ref) => (
    <section
        {...props}
        ref={ref}
        className={className.container.toClassName()}
    >
        {headerChildren}
        <div className="text-base flex-1 overflow-hidden font-file-content">
            {props.children}
        </div>
    </section>
));

export default memo(Container);