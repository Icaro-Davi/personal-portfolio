import { colors } from '@/settings/tailwind/theme';
import AnimationFrameRate from '../animationFrameRate';

function codeFallingAnimation(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext('2d')!;
    if (!context) throw new Error('Failed to get canvas context');

    const letters = '1234567890'.split('');
    const fontSize = 10;
    const columns = Math.round(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);
    const letterColor = colors.primary ?? '#0F0';
    const backgroundColor = colors.background + '10' ?? '#00000001'

    function draw() {
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
        drops.forEach((drop, index) => {
            let letter = letters[Math.floor(Math.random() * letters.length)];
            context.fillStyle = letterColor;
            context.fillText(letter, index * fontSize, drops[index] * fontSize);
            drops[index]++;
            if (drops[index] * fontSize > canvas.height && Math.random() > .95) {
                drops[index] = 0;
            }
        });
    }

    const animationFrameRate = new AnimationFrameRate(30)
        .registerAnimation(draw)
        .startTime();

    return () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        animationFrameRate.stopAnimation();
    }
}

export default codeFallingAnimation;