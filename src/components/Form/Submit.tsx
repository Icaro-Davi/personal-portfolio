import GlitchText from '@/components/Glitch/Text';
import className from "./sharedStyles";

import type { FC } from "react";

type SubmitFormButtonProps = {
    title?: string;
}

const SubmitFormButton: FC<SubmitFormButtonProps> = ({ title }) => (
    <button
        type="submit"
        className={className.formElementStyle.toClassName('text-primary')}
    >
        <GlitchText>
            {title}
        </GlitchText>
    </button>
);

export default SubmitFormButton;