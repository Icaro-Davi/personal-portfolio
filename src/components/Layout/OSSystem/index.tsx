'use client';

import Workspace from "./Workspace/Workspace";
import BottomBar from "./BottomBar";
import OSSystemProvider from "./hooks/useOSSystemContext/Provider";

import ScreenEffect from "@/components/Layout/OSSystem/ScreenEffect";
import type { FC } from "react";

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