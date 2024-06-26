import { useEffect, useMemo, useRef, Fragment } from "react";
import { useRouter } from "next/navigation";
import { LuWallpaper } from "react-icons/lu";
import { IoLanguage } from "react-icons/io5";
import { GiMagicPortal } from "react-icons/gi";
import { useTranslations } from "next-intl";
import OptionButton from "./OptionButton";
import GradientDividerFromCenter from "@/components/Divider/GradientDividerFromCenter";
import GlitchText from "@/components/Glitch/Text";
import useOSSystemContext from "../../../../hooks/useOSSystemContext";

import type { FC } from "react";

const BottomBarOptions: FC = () => {
  const router = useRouter();
  const { state, dispatch } = useOSSystemContext();
  const divRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Index.bottom_bar.os_button_menu");

  const Options = useMemo(
    () => [
      {
        key: "wallpaper",
        onClick: () =>
          dispatch({
            type: "wallpaperVisibility",
            payload: { isActive: !state.wallpaper.isActive },
          }),
        icon: LuWallpaper,
        iconActive: state.wallpaper.isActive,
      },
      {
        key: "screen_effect",
        onClick: () =>
          dispatch({
            type: "screenEffectVisibility",
            payload: { isActive: !state.screenEffect.isActive },
          }),
        icon: GiMagicPortal,
        iconActive: state.screenEffect.isActive,
      },
      {
        key: "change_locale",
        onClick: () => router.push("/"),
        icon: IoLanguage,
        iconActive: false,
      },
    ],
    [state.wallpaper.isActive, state.screenEffect.isActive, dispatch]
  );

  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus();
    }
  }, [divRef]);

  return (
    <div
      tabIndex={0}
      ref={divRef}
      onBlur={() =>
        dispatch({
          type: "bottomBarVisibility",
          payload: { isActive: !state.bottomBar.isActive },
        })
      }
      className="absolute w-56 -translate-y-full border-2 border-primary border-b-0 bg-background bg-opacity-95 outline-none"
    >
      {Options.map((optionProps, index) => (
        <Fragment key={`option-${index}`}>
          <OptionButton
            onClick={optionProps.onClick}
            icon={optionProps.icon}
            iconActive={optionProps.iconActive}
            onMouseDown={(e) => e.preventDefault()}
          >
            <GlitchText>{t(`${optionProps.key}` as any)}</GlitchText>
          </OptionButton>
          {index < Options.length - 1 && <GradientDividerFromCenter />}
        </Fragment>
      ))}
    </div>
  );
};

export default BottomBarOptions;
