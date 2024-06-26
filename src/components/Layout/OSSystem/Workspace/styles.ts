import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    shortcutAppWrapper: new CreateTailwindStyle([
        'group',
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'cursor-pointer'
    ]),
    shortcutAppTitle: new CreateTailwindStyle([
        'max-w-18',
        'max-h-6',
        'text-xs',
        'text-center',
        'leading-none',
        'text-ellipsis',
        'overflow-hidden',
        '[display:-webkit-box]',
        '[-webkit-line-clamp:2]',
        '[-webkit-box-orient:vertical]',
        'group-hover:[text-shadow:0_0_6px_theme(colors.primary)]',
        'transition-all',
        'bg-background',
        'p-0.5',
        'rounded-sm',
        'block'
    ])
}

export default className;