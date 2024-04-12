import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    container: new CreateTailwindStyle([
        "bg-gray-300",
        "w-full",
        "h-full",
        "flex",
        "overflow-auto",
        "touch-auto",
        "py-2"
    ]),
    paper: new CreateTailwindStyle([
        "max-w-[874px]",
        "min-h-[1240px]",
        'inline-table',
        "bg-white",
        "w-full",
        "h-full",
        "mx-auto",
        "p-12",
        "max-sm:px-2",
        "shadow-md",
    ])
}

export default className;