import { DOMAttributes } from "react";

export type InnerFunctionElementEvent<E = HTMLElement, P = {}> =
    (
        this: P,
        ...event: Parameters<
            NonNullable<
                DOMAttributes<E>['onClick']
            >
        >
    ) => void;