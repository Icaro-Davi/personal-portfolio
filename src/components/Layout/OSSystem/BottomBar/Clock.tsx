'use client';

import { memo, useEffect, useState } from "react";
import GradientDividerFromCenter from "@/components/Divider/GradientDividerFromCenter";

import type { FC } from "react";

const Clock: FC = () => {

    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        let intervalRef = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(intervalRef);
        }
    }, []);

    const time = date?.toLocaleTimeString('pt-BR', { hour12: true, hour: 'numeric', minute: 'numeric' });
    const _date = date?.toLocaleDateString('pt-BR');

    return (
        <div className="flex flex-col items-center justify-center h-full px-2 text-primary">
            <div className="text-lg leading-4">
                {time}
            </div>
            <GradientDividerFromCenter />
            <div className="text-xs">
                {_date}
            </div>
        </div>
    );
}

export default memo(Clock);