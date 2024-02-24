import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    appIconWrapperStyle: new CreateTailwindStyle<'focus'>([
        'h-11',
        'w-11',
        'border-solid',
        'border-x-2',
        'border-y-2',
        'border-secondary',
        'hover:bg-background',
    ]).addConditional('focus', (focus: boolean) => focus ? 'border-b-primary' : ''),
}

export default className;