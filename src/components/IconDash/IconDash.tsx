import CreateTailwindStyle from "@/utils/CreateTailwindStyle";
import type { CSSProperties, FC } from "react";
import type { IconType } from "react-icons";

type IconDashProps = {
    Icon: IconType;
    dash: boolean;
    dashHexColor?: string;
}

const className = {
    container: new CreateTailwindStyle<'dash'>([
        '[--icon-dash-color:theme(colors.primary)]',
        'color-[var(--icon-dash-color)]',
    ]).addConditional('dash',
        (withDash) => withDash ? [
            'relative',
            'flex',
            'justify-center',
            'items-center',
            'before:absolute',
            'before:w-full',
            'before:h-[8%]',
            'before:bg-[var(--icon-dash-color)]',
            'before:scale-[1.3]',
            'before:rotate-45',
        ] : []
    )
}

const IconDash: FC<IconDashProps> = ({ Icon, ...props }) => {
    return (
        <div
            style={{
                ...(props.dashHexColor ? ({ '--icon-dash-color': props.dashHexColor } as CSSProperties) : {})
            }}
            className={className.container.callConditional('dash', props.dash).toClassName()}
        >
            <Icon size={20} />
        </div>
    );
}

export default IconDash;