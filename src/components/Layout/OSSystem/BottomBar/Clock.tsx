"use client";

import { memo, useEffect, useState } from "react";
import GradientDividerFromCenter from "@/components/Divider/GradientDividerFromCenter";

import type { FC } from "react";
import { ClientCookie } from "@/utils/cookies";

const getDataLangByLocale = (locale: string): string | undefined => {
    const lang = {
        'pt': 'pt-BR',
        'en': 'en-US'
    }
    return lang[locale as keyof typeof lang];
}

const Clock: FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const locale = ClientCookie.getLocale();
  const dateLocale =  locale ? getDataLangByLocale(locale) : 'pt-BR';

  useEffect(() => {
    let intervalRef = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  const time = date?.toLocaleTimeString(dateLocale, {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });
  const _date = date?.toLocaleDateString(dateLocale);

  return (
    <div className="flex flex-col items-center justify-center h-full px-2 text-primary">
      <div className="text-lg leading-4" suppressHydrationWarning>
        {time}
      </div>
      <GradientDividerFromCenter />
      <div className="text-xs">{_date}</div>
    </div>
  );
};

export default memo(Clock);
