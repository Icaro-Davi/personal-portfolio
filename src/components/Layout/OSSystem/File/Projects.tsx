import ProjectCard from '@/components/Card/Project';
import KnownTechnologyRefs from '@/utils/KnownTechnologyRefs';

import type { CSSProperties, FC } from "react";

const projects = [
    {
        title: 'Immersive squares',
        imgSrc: '/immersive_squares.png',
        projectUrl: 'https://codepen.io/Idate/full/OJrXqqR',
        codeUrl: 'https://codepen.io/Idate/pen/OJrXqqR',
        tags: KnownTechnologyRefs.get('CSS', 'Javascript')
    },
    {
        title: 'Pokecard',
        imgSrc: 'https://raw.githubusercontent.com/Icaro-Davi/pokecard/main/src/app/favicon.ico',
        projectUrl: 'https://pokecard-icaro-davi.vercel.app/',
        codeUrl: 'https://github.com/Icaro-Davi/pokecard',
        tags: KnownTechnologyRefs.get('SASS', 'Typescript', 'React', 'NextJS')
    },
    {
        title: 'Marvel Comics',
        imgSrc: 'https://raw.githubusercontent.com/Icaro-Davi/marvel-comics/main/public/svg/marvel.svg',
        projectUrl: 'https://marvel-comics-omega.vercel.app',
        codeUrl: 'https://github.com/Icaro-Davi/marvel-comics',
        tags: KnownTechnologyRefs.get('SASS', 'Typescript', 'React', 'NextJS', 'ant')
    },
    {
        title: 'Coffee OS',
        imgSrc: '/coffee_os.png',
        codeUrl: 'https://github.com/Icaro-Davi/personal-portfolio',
        tags: KnownTechnologyRefs.get('Tailwind', 'Typescript', 'React', 'NextJS')
    },
    {
        title: 'Poing (Discord Bot)',
        imgSrc: '/poing.webp',
        codeUrl: 'https://github.com/Icaro-Davi/Poing',
        tags: KnownTechnologyRefs.get('NodeJS', 'DiscordJS', 'MongoDB', 'Typescript')
    },
    {
        title: 'Poing (Web)',
        imgSrc: '/poing.webp',
        codeUrl: 'https://github.com/Icaro-Davi/poing-web',
        tags: KnownTechnologyRefs.get('NodeJS', 'NextJS', 'Typescript', 'Styled COmponents')
    },
    {
        title: 'Poing (API)',
        imgSrc: '/poing.webp',
        codeUrl: 'https://github.com/Icaro-Davi/poing-web',
        tags: KnownTechnologyRefs.get('NodeJS', 'ExpressJS', 'Typescript', 'MongoDB', 'Redis')
    },
];

const maxRows = projects.length < 4 ? projects.length : 4;

const Projects: FC = props => (
    <div style={{ ...({'--items-length': maxRows} as CSSProperties) }} className='flex h-full overflow-auto'>
        <div className='m-auto p-2 max-w-[calc(theme(spacing.56)*var(--items-length))] columns-[var(--items-length)_theme(spacing.52)] [column-gap:theme(spacing.2)] space-y-2 text-center'>
            {projects.map((project, index) => (
                <div>
                    <ProjectCard key={`project-card-${index}`} {...project} />
                </div>
            ))}
        </div>
    </div>
);

export default Projects;