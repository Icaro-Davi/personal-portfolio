import { Silkscreen, Roboto } from "next/font/google";
import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const silkscreen = Silkscreen({
    weight: ['400'],
    subsets: ['latin'], 
    preload: true,
});

const roboto = Roboto({
    weight: ['300', '400', '500'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto'
});

const className = {
    body: new CreateTailwindStyle([
        silkscreen.className,
        roboto.variable,
        'w-dvw',
        'h-dvh',
        'flex',
        'bg-background',
        'max-sm:overscroll-contain',
        'max-sm:select-none'
    ])
}

export default className;