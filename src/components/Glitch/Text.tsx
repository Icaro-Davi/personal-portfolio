import { memo, Children, isValidElement } from "react";
import CreateTailwindStyle from "@/utils/CreateTailwindStyle";
import type { FC, ReactNode } from "react";

const className = {
    text: new CreateTailwindStyle([
        '[--offset-1:2px]',
        '[--offset-2:-2px]',
        '[--highlight-1:#FD2F2F]',
        '[--highlight-2:#3636FF]',
        'inline-block',

        'before:content-[attr(data-text)]',
        'before:absolute',
        'before:top-0',
        'before:left-0',
        'before:w-full',
        'before:h-full',

        'after:content-[attr(data-text)]',
        'after:absolute',
        'after:top-0',
        'after:left-0',
        'after:w-full',
        'after:h-full',

        'before:left-[var(--offset-1)]',
        'before:[text-shadow:-2px_0_var(--highlight-1)]',
        'before:[clip:rect(24px,550px,90px,0)]',
        'before:[animation:glitchEffectOne_var(--effect-time-1)_infinite_linear_alternate-reverse]',

        'after:left-[var(--offset-2)]',
        'after:[text-shadow:-2px_0_var(--highlight-1)]',
        'after:[clip:rect(85px,550px,140px,0)]',
        'after:[animation:glitchEffectTwo_var(--effect-time-2)_infinite_linear_alternate-reverse]',
    ])
}

const extractTextFromChild = (children: ReactNode) => {
    let text = '';
    Children.forEach(children, child => {
        if (typeof child === 'string') {
            text += child;
            return;
        }
        if (isValidElement(child)) {
            text += extractTextFromChild(child.props.children);
        }
    });
    return text;
}

const GlitchText: FC<{ children?: ReactNode }> = props => {
    const childText = extractTextFromChild(props.children);
    if (typeof childText !== 'string') throw new Error('Children must be string');
    return (
        <span
            style={{
                position: 'relative',
                ...{
                    '--effect-time-1': `${Math.floor(Math.random() * 10) + 3}s`,
                    '--effect-time-2': `${Math.floor(Math.random() * 10) + 1}s`,
                }
            }}
            className={className.text.toClassName()}
            data-text={childText}
        >
            {props.children}
        </span>
    )
}

export default memo(GlitchText);

/* generate keyframe for /tailwindStyle/keyframes/glitchEffect.css
(function generateGlitchKeyframe(steps) {
    function create(steps, index, keyframe) {
        
        const top = Math.round(Math.random() * 150);
        const bottom = Math.round(Math.random() * 150);
        const left = 9999;
        const right = 0;
        const cssClipRect = `rect(${top}px, ${left}px, ${bottom}px, ${right}px)`;
        
        const percentage = (index / steps) * 100;
        keyframe = { ...keyframe, [`${percentage}%`]: { 'clip': cssClipRect } };
        
        index++;
        if (index > steps) return keyframe;
        return create(steps, index, keyframe);
    }
    return create(steps, 0, {});
})(28)
*/