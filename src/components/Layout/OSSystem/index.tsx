'use client';

import Workspace from "./Workspace/Workspace";
import BottomBar from "./BottomBar";
import OSSystemProvider from "./hooks/useOSSystemContext/Provider";

import type { FC } from "react";
import ScreenEffect from "@/components/ScreenEffect";

const OSSystem: FC = () => {
    return (
        <OSSystemProvider>
            <div className="flex flex-1 flex-col">
                <Workspace />
                <BottomBar />
            </div>
            <ScreenEffect />
        </OSSystemProvider>
    );
}

export default OSSystem;