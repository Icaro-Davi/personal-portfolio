import { forwardRef, memo } from 'react';
import HeaderButtons from "./HeaderButtons";

import type { FileWindowHeaderProps } from "./types";

const Header = forwardRef<HTMLDivElement, FileWindowHeaderProps>(({ title, ...props }, ref) =>
    <div ref={ref} className="flex justify-between items-center bg-primary text-secondary px-2 py-1">
        <h1 className=" text-lg font-bold">{title}</h1>
        <HeaderButtons  {...props} />
    </div>
);

export default memo(Header);