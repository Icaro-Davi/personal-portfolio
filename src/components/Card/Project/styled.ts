import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    container: new CreateTailwindStyle([
        'inline-block',
        'relative',

        'after:absolute',
        'after:block',
        'after:bg-secondary',
        'after:top-0',
        'after:border-background',
        'after:w-[calc(100%-4rem)]',
        'after:h-full',
        'after:align-middle',
        'after:left-[50%]',
        'after:translate-x-[-50%]',

        'before:absolute',
        'before:block',
        'before:bg-secondary',
        'before:border-background',
        'before:h-[calc(100%-4rem)]',
        'before:w-full',
        'before:align-middle',
        'before:top-[50%]',
        'before:translate-y-[-50%]'
    ]),
    button: new CreateTailwindStyle<'disabled'>([
        'flex-1',
        'flex',
        'items-center',
        'justify-center',
        'gap-1',
        'flex-nowrap',
        'border-secondary',
        'border-2',
    ])
        .addConditional('disabled', (isDisabled?: boolean) =>
            isDisabled
                ? [
                    'text-gray-400',
                    'cursor-not-allowed'
                ]
                : [
                    'transition',
                    'duration-300',
                    'hover:bg-secondary',
                    'hover:text-primary'
                ]
        )
}

export default className;