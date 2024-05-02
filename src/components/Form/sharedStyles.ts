import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    formElementStyle: new CreateTailwindStyle([
        'p-1',
        'w-full',
        'outline-none',
        'bg-background',
        'border-2',
        'border-primary',
        'focus:border-white',
        'z-10',
        'relative'
    ])
}

export default className;