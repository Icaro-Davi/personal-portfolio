import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    text: new CreateTailwindStyle<'borderColor' | 'bgColor'>([])
        .addConditional('borderColor', (color: string = 'theme(colors.primary)') => [
            `[--bc:_${color}]`,
            `[text-shadow:-1px_-1px_0_var(--bc),1px_-1px_0_var(--bc),-1px_1px_0_var(--bc),1px_1px_0_var(--bc)]`
        ])

}

export default className;