import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    oldScreen: new CreateTailwindStyle([
        '[--line-color:theme(colors.primary)11]',
        'w-full',
        'h-full',
        'absolute',
        'top-0',
        'left-0',

        'after:w-full',
        'after:h-full',
        'after:absolute',
        'after:[background-size:100%_8px]',
        'after:[background-image:linear-gradient(0,var(--line-color)_10%,transparent_10%,transparent_50%,var(--line-color)_50%,var(--line-color)_60%,transparent_60%,transparent)]',
        'after:animate-[bgMove_5s_linear_infinite]',
    ])
}

export default className;