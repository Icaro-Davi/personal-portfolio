'use client';

import { Suspense } from "react";
import dynamic from "next/dynamic";
import OSSystemProvider from "./hooks/useOSSystemContext/Provider";

const Screen = dynamic(() => import("./Screen"), { ssr: false, loading: () => <Loading /> });

import type { FC } from "react";
import Loading from "./loading";

const OSSystem: FC = () => {
    return (
        <OSSystemProvider>
            <Suspense fallback={<Loading />}>
                <Screen />
            </Suspense>
        </OSSystemProvider>
    );
}

export default OSSystem;