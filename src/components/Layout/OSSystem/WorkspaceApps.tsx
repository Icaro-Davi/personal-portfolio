import Timeline from "./File/Timeline";
import AboutMe from "./File/AboutMe";

import { WorkspaceAppsType } from "./types";

const WorkspaceApps: WorkspaceAppsType = [
    {
        title: 'Habilidades',
        iconName: 'SKILLS',
        id: 'skills',
        content: 'Habilidades'
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
        content: 'projects'
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
        content: 'contato'
    }
]

export default WorkspaceApps;