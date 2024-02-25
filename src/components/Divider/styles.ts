import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    gradientDivider: new CreateTailwindStyle<'fillPercentage'>([
        'w-full',
        'h-px',
        'bg-gradient-to-r',
        'from-transparent', 'from-0%',
        'via-primary', 'via-50%',
        'to-transparent', 'to-100%',
    ])
}

export default className;