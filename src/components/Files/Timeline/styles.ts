import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    container: new CreateTailwindStyle([
        'overflow-auto',
        'p-2',
        'text-primary',
        'text-white',
        'flex',
        'flex-wrap',
        'gap-2'
    ]),
    timelineItemContainer: new CreateTailwindStyle([
        'flex',
        'flex-col'
    ]),
    title: new CreateTailwindStyle<'principal' | 'subTitle'>([
        'font-bold',
        'border-b-2',
        'border-primary',
        'px-1',
        'bg-background',
        'rounded-t-md',
    ])
        .addConditional('principal', () => 'text-xl')
        .addConditional('subTitle', () => 'text-lg'),
    leftBorder: new CreateTailwindStyle([
        'border-l-2',
        'border-primary',
        'ml-2'
    ]),
    listItem: new CreateTailwindStyle<'add-dot'>([
        'flex',
        'items-center',
        'border-b-2',
        'border-primary',
        'px-1',
        'bg-background',
        'rounded-tr-md',
        'text-justify',
    ])
        .addConditional('add-dot', () => [
            'before:m-1',
            'before:rounded-full',
            'before:block',
            'before:w-2',
            'before:h-2',
            'before:bg-primary',
        ])
}

export default className;