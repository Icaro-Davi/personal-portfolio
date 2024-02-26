import type { FC, ReactNode } from "react";
import type { AppIcon } from "../types";
import className from './styles';
import IconFactory from '../IconFactory';

export const AppIconWrapper: FC<{
    children: ReactNode;
    className?: string;
    focus?: boolean;
}> = props => {
    className.appIconWrapperStyle.callConditional('focus', props?.focus);
    return (
        <a className={className.appIconWrapperStyle.toClassName(props.className)}>
            {props.children}
        </a>
    );
}

const IconsFactory = (icons: AppIcon[]): ReactNode[] => {
    return icons.map(({ name, focus }) => {
        let Icon = IconFactory(name);
        return (
            <AppIconWrapper focus={focus}>
                {Icon}
            </AppIconWrapper>
        );
    });
}

export default IconsFactory;