import { memo } from "react";
import Image from 'next/image';
import { IoMdOpen, IoMdCode } from "react-icons/io";
import className from "./styled";
import LinkButton from "./LinkButton";

import type { FC } from "react";

type ProjectCardProps = {
    title: string;
    imgSrc: string;
    codeUrl?: string;
    projectUrl?: string;
}

const ProjectCard: FC<ProjectCardProps> = props => (
    <div className={className.container.toClassName()}>
        <div className="border-2 border-primary">
            <div className="flex flex-col w-52 h-64 text-white relative z-10 bg-background">
                <h2 className="text-center text-b py-1 px-2 font-bold">
                    {props.title}
                </h2>
                <div className="flex-1 border-2 border-dashed inline-block mx-2 relative">
                    <Image
                        title={props.title}
                        alt={props.title}
                        src={props.imgSrc}
                        className='object-contain w-full h-full'
                        fill={true}
                    />
                </div>
                <div className="flex gap-2 px-2 py-1">
                    <LinkButton href={props.codeUrl} icon={IoMdCode}>
                        Código
                    </LinkButton>
                    <LinkButton href={props.projectUrl} icon={IoMdOpen}>
                        Projeto
                    </LinkButton>
                </div>
            </div>
        </div>
    </div>
);

export default memo(ProjectCard);