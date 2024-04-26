import { Fragment } from "react";

import ScreenEffect from "@/components/Layout/OSSystem/ScreenEffect";
import Wallpaper from "../Wallpaper";
import Workspace from "../Workspace/Workspace";
import BottomBar from "../BottomBar";

import type { FC } from "react";

const Screen: FC = () => (
    <Fragment>
        <div className="flex flex-1 flex-col">
            <Workspace />
            <BottomBar />
        </div>
        <Wallpaper />
        <ScreenEffect />
    </Fragment>
);

export default Screen;