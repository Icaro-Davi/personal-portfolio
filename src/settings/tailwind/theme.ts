import type { Config } from 'tailwindcss'

const theme: Pick<Config, 'theme'> = {
    theme: {
        extend: {
            fontFamily: {
                'roboto': ['var(--font-roboto)']
            },
            colors: {
                primary: '#3BFD4E',
                secondary: '#2B2B2B',
                background: '#1E1E1E',
                light: '#FFFFFF',
            },
        }
    }
}

export default theme;