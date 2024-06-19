import { useTranslations } from "next-intl";
import { memo } from "react";
import Image from 'next/image';
import { IoMdOpen, IoMdCode } from "react-icons/io";
import className from "./styled";
import LinkButton from "../../Buttons/LinkButton";
import TagDashed from "@/components/Tag/Dashed";

import type { FC } from "react";
import type { KnownTechnologyRefType } from "@/utils/KnownTechnologyRefs";

type ProjectCardProps = {
    title: string;
    imgSrc: string;
    codeUrl?: string;
    projectUrl?: string;
    tags?: KnownTechnologyRefType[];
}

const ProjectCard: FC<ProjectCardProps> = props => {
    const t = useTranslations('Index.file.projects.card');
    return (
        <div className={className.container.toClassName()}>
            <div className="border-2 border-primary">
                <div className="flex flex-col w-52 min-h-64 px-2 text-white relative z-10 bg-background">
                    <h2 className="text-center text-b py-1 font-bold">
                        {props.title}
                    </h2>
                    <div className="border-2 border-dashed inline-block relative flex-1 min-h-32">
                        <Image
                            title={props.title}
                            alt={props.title}
                            src={props.imgSrc}
                            className='object-contain w-full h-full'
                            fill={true}
                        />
                    </div>
                    {props.tags?.length && (
                        <div className="flex flex-wrap justify-center py-1 gap-1 ">
                            {props.tags.map((tag, i) => (
                                <TagDashed
                                    key={`tag-dashed-${tag.name.toLocaleLowerCase()}-${i}`}
                                    className="border-secondary"
                                    href={tag.href}
                                    icon={tag.icon}
                                >
                                    {tag.name}
                                </TagDashed>
                            ))}
                        </div>
                    )}
                    <div className="flex gap-2 py-1">
                        <LinkButton href={props.codeUrl} icon={IoMdCode}>
                            {t('code_btn')}
                        </LinkButton>
                        <LinkButton href={props.projectUrl} icon={IoMdOpen}>
                            {t('project_btn')}
                        </LinkButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ProjectCard);