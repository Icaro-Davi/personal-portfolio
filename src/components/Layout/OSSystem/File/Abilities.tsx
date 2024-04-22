import {
    BiLogoTypescript, BiLogoJavascript,
    BiLogoReact, BiLogoDocker,
    BiLogoNodejs, BiLogoCss3,
    BiLogoHtml5, BiLogoGit,
    BiLogoMongodb, BiLogoPostgresql,
    BiLogoTailwindCss,
    BiLogoSass, BiLogoJava
} from 'react-icons/bi';
import IconShape from "@/components/IconShape";

import type { FC } from "react";
import TextBorder from '@/components/TextBorder';

const Abilities: FC = () => (
    <div className='w-full h-full p-2 flex items-center justify-center'>

        <div className='text-center'>
            <h2 className='pb-2 text-lg text-background font-bold'>
                <TextBorder>Tecnologias</TextBorder>
            </h2>
            <div className='flex flex-wrap gap-2 justify-center'>
                <IconShape
                    title="Typescript"
                    href="https://www.typescriptlang.org/"
                    icon={BiLogoTypescript}
                />
                <IconShape
                    title="React"
                    href="https://react.dev/"
                    icon={BiLogoReact}
                />
                <IconShape
                    title="Docker"
                    href="https://www.docker.com/"
                    icon={BiLogoDocker}
                />
                <IconShape
                    title="NodeJS"
                    href="https://nodejs.org/"
                    icon={BiLogoNodejs}
                />
                <IconShape
                    title="Javascript"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    icon={BiLogoJavascript}
                />
                <IconShape
                    title="HTML"
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    icon={BiLogoHtml5}
                />
                <IconShape
                    title="CSS"
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    icon={BiLogoCss3}
                />
                <IconShape
                    title="TailwindCSS"
                    href="https://tailwindcss.com/"
                    icon={BiLogoTailwindCss}
                />
                <IconShape
                    title="SASS"
                    href="https://sass-lang.com/"
                    icon={BiLogoSass}
                />
                <IconShape
                    title="Git"
                    href="https://git-scm.com/"
                    icon={BiLogoGit}
                />
                <IconShape
                    title="MongoDB"
                    href="https://www.mongodb.com/"
                    icon={BiLogoMongodb}
                />
                <IconShape
                    title="PostgresSQL"
                    href="https://www.postgresql.org/"
                    icon={BiLogoPostgresql}
                />
                <IconShape
                    title="Java"
                    href="https://www.java.com/"
                    icon={BiLogoJava}
                />
            </div>
        </div>
    </div>
);

export default Abilities;