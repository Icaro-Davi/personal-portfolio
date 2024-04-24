import { colors } from '@/settings/tailwind/theme';
import AnimationFrameRate from '../animationFrameRate';

const config = {
    fallingLetters: '01',
    letter: {
        color: colors.primary ?? '#0F0F0F',
        size: 10
    },
    backgroundColor: colors.background ?? '#000000',
    framesPerSecond: 30
}

function codeFallingAnimation(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext('2d')!;
    if (!context) throw new Error('Failed to get canvas context');

    const letters = config.fallingLetters.split('');
    const fontSize = config.letter.size;
    const columns = Math.round(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);
    const letterColor = config.letter.color;
    const backgroundColor = config.backgroundColor;
    const backgroundColorWithOpacity = `${config.backgroundColor}09`;

    function draw() {
        context.fillStyle = backgroundColorWithOpacity;
        context.fillRect(0, 0, canvas.width, canvas.height);
        drops.forEach((drop, index) => {
            let letter = letters[Math.floor(Math.random() * letters.length)];
            
            const x = index * fontSize;
            const y = drop * fontSize;
            
            context.fillStyle = backgroundColor;
            context.fillRect(x, y, fontSize, fontSize);
            
            context.fillStyle = letterColor;
            context.fillText(letter, x, y);
            
            drop++;
            if (drop * fontSize > canvas.height && Math.random() > .95) {
                drops[index] = 0;
            } else {
                drops[index] = drop;
            }
        });
    }

    const animationFrameRate = new AnimationFrameRate(config.framesPerSecond)
        .registerAnimation(draw)
        .startTime();

    return () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        animationFrameRate.stopAnimation();
    }
}

export default codeFallingAnimation;