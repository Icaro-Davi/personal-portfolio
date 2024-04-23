import keyframes from './keyframe';
import type { Config } from 'tailwindcss';

export const colors = {
    primary: '#3BFD4E',
    secondary: '#2B2B2B',
    background: '#1E1E1E',
    light: '#FFFFFF',
}

const theme: Pick<Config, 'theme'> = {
    theme: {
        extend: {
            keyframes,
            fontFamily: {
                'file-content': ['var(--font-file-content)']
            },
            colors
        }
    }
}

export default theme;