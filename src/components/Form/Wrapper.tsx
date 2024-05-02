import { useMemo, cloneElement, Children, memo } from "react";
import type { FC, ReactElement, ReactNode } from "react";

type InputProps = {
    title?: string;
    children: ReactNode;
};

const Wrapper: FC<InputProps> = memo(
    ({ children, title }) => {
        const id = useMemo(() => title ? Math.random().toString(32).slice(-6) : undefined, [title]);
        return (
            <div className="w-full inline-block text-primary mb-2">
                {title && (
                    <label
                        htmlFor={id}
                        className="block"
                    >{title}</label>
                )}
                <div className='w-full'>
                    {Children.map(children, (child, index) => (
                        cloneElement(child as ReactElement, { id })
                    ))}
                </div>
            </div>
        )
    }
);

export default Wrapper;