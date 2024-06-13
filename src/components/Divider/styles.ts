import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    gradientDivider: new CreateTailwindStyle<'direction'>([
        'block',
        'from-transparent', 'from-0%',
        'via-primary', 'via-50%',
        'to-transparent', 'to-100%',
    ])
        .addConditional('direction', (defaultDirection: boolean) => (
            defaultDirection
                ? 'bg-gradient-to-r w-full h-px'
                : 'bg-gradient-to-t h-full w-px'
        ))
}

export default className;