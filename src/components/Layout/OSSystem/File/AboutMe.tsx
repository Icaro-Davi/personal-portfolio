import Image from "next/image";
import { memo } from "react";
import NerdFaceEmoji from "@/components/Sticks/NerdFace";
import DocumentFile from "@/components/Files/Document";

import type { FC } from "react";

const AboutMe: FC = () => (
    <DocumentFile>
        <h2 className="font-bold text-center text-3xl flex flex-wrap justify-center space-x-1 pb-2">
            <span className="flex items-center leading-none">Olá me chamo Icaro Davi Duarte Romualdo</span>
            <NerdFaceEmoji size={36} />
        </h2>
        <div className="pt-4 flex flex-wrap justify-center items-center text-lg">
            <div className="border w-[230px] h-[320px] mr-2 relative">
                <Image
                    title="Icaro Davi"
                    alt="Foto do Icaro Davi"
                    src="/icaro_picture.jpg"
                    className="w-full h-full object-cover"
                    fill={true}
                />
            </div>
            <div className="flex-1 min-w-[300px]">
                <p className="font-medium pt-4 text-justify">
                    Sou desenvolvedor <strong>FullStack</strong> apaixonado por tecnologia, com experiência sólida em projetos web. Graduei-me em Sistemas de Informações em 2020
                    e desde então venho me aperfeiçoando continuamente.
                </p>
                <p className="font-medium pt-4 text-justify">
                    Meus principais conhecimentos estão na criação de aplicações web utilizando <strong>HTML</strong>, <strong>CSS3</strong>, <strong>Javascript/Typescript</strong> e <strong>NodeJS</strong>. Tenho interesse em adquirir novos
                    conhecimentos, principalmente sobre tecnologias, e buscar manter-me atualizado sobre as últimas tendências.
                </p>
            </div>
            <p className="font-medium pt-4 text-justify min-w-[300px]">
                Contando um pouco sobre mim, sou <strong>autodidata</strong> e, em meus momentos livres, gosto de estudar temas relacionados às tecnologias de programação. 
                Para me divertir e manter a saúde em dia, faço academia, e também consumo animes e mangás. Se precisasse me definir, 
                diria que sou uma pessoa <strong>concentrada</strong>, <strong>focada</strong>, <strong>fiel</strong> e <strong>companheira</strong>, sempre em busca de desafios que me permitam crescer 
                profissionalmente.
            </p>
        </div>
    </DocumentFile>
);

export default memo(AboutMe);