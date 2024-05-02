import Timeline from "./File/Timeline";
import AboutMe from "./File/AboutMe";
import Projects from "./File/Projects";
import Abilities from "./File/Abilities";
import Contact from "./File/Contact";

import type { WorkspaceAppsType } from "./types";

const WorkspaceApps: WorkspaceAppsType = [
    {
        title: 'Habilidades',
        iconName: 'SKILLS',
        id: 'skills',
        content: <Abilities />
    },
    {
        title: 'Sobre mim',
        fileExtension: '.doc',
        iconName: 'ABOUT_ME',
        id: 'about_me',
        content: <AboutMe />
    },
    {
        title: 'Projetos',
        iconName: 'PROJECTS',
        id: 'projects',
        content: <Projects />
    },
    {
        title: 'Educação',
        fileExtension: '',
        iconName: 'EDUCATION',
        id: 'education',
        content: <Timeline />,
    },
    {
        title: 'Contato',
        fileExtension: '.exe',
        iconName: 'CONTACT',
        id: 'contact',
        content: <Contact />
    }
]

export default WorkspaceApps;