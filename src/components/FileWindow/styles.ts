import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    container: new CreateTailwindStyle([
        'flex',
        'flex-col',
        'absolute',
        'bg-secondary',
        'border-x-2',
        'border-b-2',
        'border-primary',
        'w-full',
        'h-full',
        'sm:w-[70%]',
        'sm:h-[80%]',
        'md:w-[70%]',
        'md:h-[80%]',
        'lg:w-[60%]',
        'lg:h-[80%]',
        'z-20'
    ])
}

export default className;