import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    linkButton: new CreateTailwindStyle<'disabled'>([
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