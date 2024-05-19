import {
    BiLogoTypescript, BiLogoJavascript,
    BiLogoReact, BiLogoDocker,
    BiLogoNodejs, BiLogoCss3,
    BiLogoHtml5, BiLogoGit,
    BiLogoMongodb, BiLogoPostgresql,
    BiLogoTailwindCss,
    BiLogoSass, BiLogoJava
} from 'react-icons/bi';
import { SiNginx, SiAntdesign, SiExpress, SiDiscord, SiRedis, SiStyledcomponents } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import type { IconType } from "react-icons";

export type KnownTechnologyRefType = { name: string; href: string; icon: IconType; };

const KnownTechnologyRefs: KnownTechnologyRefType[] = [
    {
        name: "Typescript",
        href: "https://www.typescriptlang.org/",
        icon: BiLogoTypescript
    },
    {
        name: "React",
        href: "https://react.dev/",
        icon: BiLogoReact
    },
    {
        name: "Docker",
        href: "https://www.docker.com/",
        icon: BiLogoDocker
    },
    {
        name: "NodeJS",
        href: "https://nodejs.org/",
        icon: BiLogoNodejs
    },
    {
        name: "Javascript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: BiLogoJavascript
    },
    {
        name: "HTML",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: BiLogoHtml5
    },
    {
        name: "CSS",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: BiLogoCss3
    },
    {
        name: "TailwindCSS",
        href: "https://tailwindcss.com/",
        icon: BiLogoTailwindCss
    },
    {
        name: "Styled Components",
        href: "https://styled-components.com/",
        icon: SiStyledcomponents
    },
    {
        name: "SASS",
        href: "https://sass-lang.com/",
        icon: BiLogoSass
    },
    {
        name: "Git",
        href: "https://git-scm.com/",
        icon: BiLogoGit
    },
    {
        name: "MongoDB",
        href: "https://www.mongodb.com/",
        icon: BiLogoMongodb
    },
    {
        name: "PostgresSQL",
        href: "https://www.postgresql.org/",
        icon: BiLogoPostgresql
    },
    {
        name: "Java",
        href: "https://www.java.com/",
        icon: BiLogoJava
    },
    {
        name: "Nginx",
        href: "https://nginx.org/en/",
        icon: SiNginx
    },
    {
        name: "Ant Design",
        href: "https://ant.design/",
        icon: SiAntdesign
    },
    {
        name: "NextJS",
        href: "https://nextjs.org/",
        icon: TbBrandNextjs
    },
    {
        name: "ExpressJS",
        href: "https://expressjs.com/",
        icon: SiExpress
    },
    {
        name: "DiscordJS",
        href: "https://discord.js.org/",
        icon: SiDiscord
    },
    {
        name: 'Redis',
        href: 'https://redis.io/docs/latest/',
        icon: SiRedis
    }
]

export default {
    technologies: KnownTechnologyRefs,
    get: function (...params: string[]) {
        return params.reduce((prev, current) => {
            const technologyRef = this.technologies.find(technologyRef => technologyRef.name.match(new RegExp(`${current}`, 'i')));
            if (!technologyRef) return prev;
            return [...prev, technologyRef];
        }, [] as KnownTechnologyRefType[]);
    }
};