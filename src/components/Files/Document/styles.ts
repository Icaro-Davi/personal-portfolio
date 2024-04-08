import CreateTailwindStyle from "@/utils/CreateTailwindStyle";

const className = {
    container: new CreateTailwindStyle([
        "bg-gray-300",
        "w-full",
        "h-full",
        "flex",
        "overflow-auto",
        "py-2"
    ]),
    paper: new CreateTailwindStyle([
        "max-w-[874px]",
        "min-h-[1240px]",
        "bg-white",
        "w-full",
        "h-full",
        "mx-auto",
        "p-12",
        "max-sm:px-2",
        "font-roboto",
        "shadow-md",
        "touch-auto"
    ])
}

export default className;