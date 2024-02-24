'use client';

import Image from "next/image";
import { useMemo } from "react";
import AppIcons, { AppIconWrapper } from "./AppIcons";

import type { FC } from "react";
import type { IconsBarProps } from "../types";

const IconsBar: FC<IconsBarProps> = props => {
    const Icons = useMemo(() => AppIcons(props.appIcons), props.appIcons);
    return (
        <div className="flex flex-row">
            <AppIconWrapper className='flex-0 relative h-11 w-11'>
                <Image
                    fill
                    src="/Duck.svg"
                    alt='Duck Operational System logo'
                    className="p-1"
                />
            </AppIconWrapper>
            {...Icons}
        </div>
    );
}

export default IconsBar;