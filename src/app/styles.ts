import { Silkscreen, Roboto } from "next/font/google";
import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const silkscreen = Silkscreen({
    weight: ['400'],
    subsets: ['latin'], 
    preload: true,
});

const fileContent = Roboto({
    weight: ['400'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-file-content'
});

const className = {
    body: new CreateTailwindStyle([
        silkscreen.className,
        fileContent.variable,
        'w-dvw',
        'h-dvh',
        'flex',
        'bg-background',
        'max-sm:overscroll-contain',
        'max-sm:select-none'
    ])
}

export default className;