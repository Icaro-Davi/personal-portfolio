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
        'text-center'
    ])
        .addConditional('disabled', (isDisabled?: boolean) =>
            isDisabled ? [
                'text-gray-400',
                'cursor-not-allowed'
            ] : []
        )
}

export default className;