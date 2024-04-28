import Image from "next/image";
import { memo } from "react";
import NerdFaceEmoji from "@/components/Sticks/NerdFace";
import DocumentFile from "@/components/Files/Document";
import GetCurrentAge from "@/utils/GetCurrentAge";

import type { FC } from "react";

const AboutMe: FC = () => {
    const age = GetCurrentAge(1997, 7, 15);
    return (
        <DocumentFile>
            <h2 className="font-bold text-center text-3xl flex flex-wrap justify-center space-x-1 pb-2">
                <span className="flex items-center leading-none">Olá me chamo Icaro Davi Duarte Romualdo</span>
                <NerdFaceEmoji size={36} />
            </h2>
            <div className="pt-4 flex flex-wrap justify-center items-center text-lg">
                <div className="border w-[200px] h-[270px] mr-2 relative">
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
                        Sou desenvolvedor FullStack e amante da tecnologia, atualmente tenho {age} anos,
                        minha jornada iniciou-se já na minha infância, onde tive contato com a tecnologia que me
                        despertou a curiosidade de como tudo aquilo era feito, no ano de 2017 consegui entrar
                        no curso de Sistemas de Informações e lá iniciei minha carreira de desenvolvedor, finalizei
                        essa etapa no ano de 2020 e desde então venho sempre me aperfeiçoando a fim
                        de me tornar um profissional cada vez melhor.
                    </p>
                    <p className="font-medium pt-4 text-justify">
                        Os meus principais conhecimentos consistem na criação de aplicações web utilizando HTML, CSS3,
                        Javascript e nas APIs, geralmente faço uso de NodeJS e Typescipt.
                    </p>
                </div>
                <p className="font-medium pt-4 text-justify min-w-[300px]">
                    Fora toda essa parte técnica, gosto bastante de ver notícias sobre tecnologias, passo meu
                    tempo estudando, jogando jogos online com meus amigos, ou lendo/assistindo anime, mangás,
                    filmes ou séries. Se fosse para me descrever, eu me acho uma pessoa bastante concentrada,
                    focada, fiel e companheira. Bem, ficou um pouco longo, mas agora você conhece um pouco mais sobre mim,
                    muito prazer.
                </p>
            </div>
        </DocumentFile>
    );
}

export default memo(AboutMe);