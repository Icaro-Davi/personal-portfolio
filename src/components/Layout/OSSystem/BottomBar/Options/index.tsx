import { useEffect, useMemo, useRef, Fragment } from "react";
import { LuWallpaper } from "react-icons/lu";
import { GiMagicPortal } from "react-icons/gi";
import GlitchText from '@/components/Glitch/Text';
import useOSSystemContext from "../../hooks/useOSSystemContext";
import OptionButton from "./OptionButton";

import type { FC } from "react";
import GradientDividerFromCenter from "@/components/Divider/GradientDividerFromCenter";

const BottomBarOptions: FC = () => {
    const { state, dispatch } = useOSSystemContext();
    const divRef = useRef<HTMLDivElement>(null);
    const Options = useMemo(() => [
        {
            onClick: () => dispatch({ type: 'wallpaperVisibility', payload: { isActive: !state.wallpaper.isActive } }),
            icon: LuWallpaper,
            iconActive: state.wallpaper.isActive,
            title: 'Wallpaper'
        },
        {
            onClick: () => dispatch({ type: 'screenEffectVisibility', payload: { isActive: !state.screenEffect.isActive } }),
            icon: GiMagicPortal,
            iconActive: state.screenEffect.isActive,
            title: 'Efeito de tela'
        },
    ], [state.wallpaper.isActive, state.screenEffect.isActive]);

    useEffect(() => {
        if (divRef.current) {
            divRef.current.focus();
        }
    }, [divRef.current]);

    return (
        <div
            tabIndex={0}
            ref={divRef}
            onBlur={() => dispatch({ type: 'bottomBarVisibility', payload: { isActive: !state.bottomBar.isActive } })}
            className="absolute w-56 -translate-y-full border-2 border-primary border-b-0 bg-background bg-opacity-95 outline-none"
        >
            {Options.map((optionProps, index) => (
                <Fragment key={`option-${index}`}>
                    <OptionButton
                        onClick={optionProps.onClick}
                        icon={optionProps.icon}
                        iconActive={optionProps.iconActive}
                        onMouseDown={e => e.preventDefault()}
                    >
                        <GlitchText>
                            {optionProps.title}
                        </GlitchText>
                    </OptionButton>
                    {index < (Options.length - 1) && (
                        <GradientDividerFromCenter />
                    )}
                </Fragment>
            ))}
        </div>
    );
};

export default BottomBarOptions;