import { Silkscreen } from "next/font/google";
import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const silkscreen = Silkscreen({ weight: '400', subsets: ['latin'] });

const className = {
    body: new CreateTailwindStyle([
        silkscreen.className,
        'w-dvw',
        'h-dvh',
        'flex',
        'bg-background',
        'max-sm:overscroll-contain',
        'max-sm:select-none'
    ])
}

export default className;