import GlitchText from '@/components/Glitch/Text';
import ScreenEffect from './ScreenEffect';

import type { FC } from 'react';

const Loading: FC = () => (
    <div className='flex items-center justify-center bg-background w-full h-full z-50'>
        <h1 className='text-white font-bold text-4xl max-sm:text-xl'>
            <GlitchText>
                Coffee.sys loading
            </GlitchText>
        </h1>
        <ScreenEffect />
    </div>
);

export default Loading;