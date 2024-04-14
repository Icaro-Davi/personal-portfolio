import { memo } from "react";
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
                <h2 className="text-center text-b py-1 font-bold">
                    {props.title}
                </h2>
                <div className="flex-1 border-2 border-dashed inline-block mx-2">
                    <img className='object-cover w-full h-full' src={props.imgSrc} alt={props.title} />
                </div>
                <div className="flex gap-1 p-1">
                    <LinkButton href={props.codeUrl}>Código</LinkButton>
                    <LinkButton href={props.projectUrl}>Projeto</LinkButton>
                </div>
            </div>
        </div>
    </div>
);

export default memo(ProjectCard);