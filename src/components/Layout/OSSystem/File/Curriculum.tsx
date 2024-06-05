import { useState, type FC } from "react";

const Curriculum: FC = () => {
    const [isFocused, setFocus] = useState(false);

    const focus = () => setFocus(true);
    const unFocus = () => setFocus(false);

    return (
        <div className="h-full relative" onMouseEnter={focus} onMouseLeave={unFocus}>
            {!isFocused && (
                <div className="absolute w-full h-full" />
            )}
            <object
                data="/FullStack.pdf"
                type="application/pdf"
                className="w-full h-full"
            >
                <div>No online PDF viewer installed</div>
            </object>
        </div>
    );
}

export default Curriculum;