import { useEffect, useRef, useState } from "react";
import UnderlineGlitchLinkButton from "@/components/Buttons/UnderlineLinkButton";

import type { FC } from "react";

const Curriculum: FC = () => {
  const [barrierVisibility, setBarrierVisibility] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout>();

  const showBarrier = () => {
    clearTimeout(debounceRef.current);
    setBarrierVisibility(true);
  }
  const hideBarrier = () => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(setBarrierVisibility, 100, false);
  };

  return (
    <div
      className={`h-full relative ${barrierVisibility ? 'select-none' : ''}`}
      onMouseEnter={hideBarrier}
      onMouseLeave={showBarrier}
    >
      {barrierVisibility && <div className="absolute w-full h-full" />}
      <object
        data="/FullStack.pdf"
        type="application/pdf"
        className="w-full h-full"
      >
        <div className="text-white text-center p-1">
          <p className="">
            Você não possui o plugin necessário para poder visualizar o PDF, não
            se preocupe você pode fazer o
            <UnderlineGlitchLinkButton href="/FullStack.pdf" className="pl-1">
              download do PDF clicando aqui.
            </UnderlineGlitchLinkButton>
          </p>
        </div>
      </object>
    </div>
  );
};

export default Curriculum;
