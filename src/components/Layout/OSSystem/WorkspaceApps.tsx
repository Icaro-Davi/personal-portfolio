import Timeline from "./File/Timeline";
import AboutMe from "./File/AboutMe";
import Projects from "./File/Projects";
import Abilities from "./File/Abilities";
import Contact from "./File/Contact";

import type { WorkspaceAppsType } from "./types";
import Curriculum from "./File/Curriculum";

const WorkspaceApps: WorkspaceAppsType = [
    {
        iconName: 'SKILLS',
        id: 'skills',
        content: <Abilities />
    },
    {
        fileExtension: '.doc',
        iconName: 'ABOUT_ME',
        id: 'about_me',
        content: <AboutMe />
    },
    {
        iconName: 'PROJECTS',
        id: 'projects',
        content: <Projects />
    },
    {
        fileExtension: '',
        iconName: 'EDUCATION',
        id: 'education',
        content: <Timeline />,
    },
    {
        fileExtension: '.exe',
        iconName: 'CONTACT',
        id: 'contact',
        content: <Contact />
    },
    {
        fileExtension: '.pdf',
        iconName: 'ABOUT_ME',
        id: 'curriculum',
        content: <Curriculum />
    }
]

export default WorkspaceApps;