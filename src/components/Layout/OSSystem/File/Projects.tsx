import ProjectCard from '@/components/Card/Project';

import type { FC } from "react";

const projects = [
    {
        title: 'Pokecard',
        imgSrc: 'https://raw.githubusercontent.com/Icaro-Davi/pokecard/main/src/app/favicon.ico',
        projectUrl: 'https://pokecard-icaro-davi.vercel.app/',
        codeUrl: 'https://github.com/Icaro-Davi/pokecard'
    },
    {
        title: 'Marvel Comics',
        imgSrc: 'https://raw.githubusercontent.com/Icaro-Davi/marvel-comics/main/public/svg/marvel.svg',
        projectUrl: 'https://marvel-comics-omega.vercel.app',
        codeUrl: 'https://github.com/Icaro-Davi/marvel-comics'
    },
    {
        title: 'Coffee OS',
        imgSrc: '/coffee_os.png',
        codeUrl: 'https://github.com/Icaro-Davi/personal-portfolio'
    }
]

const Projects: FC = props => (
    <div className='p-2 flex flex-wrap gap-2 justify-center items-center w-full h-full overflow-auto'>
        {projects.map((project, index) => (
            <ProjectCard key={`project-card-${index}`} {...project} />
        ))}
    </div>
);

export default Projects;