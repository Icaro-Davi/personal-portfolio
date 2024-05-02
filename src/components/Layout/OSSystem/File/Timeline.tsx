import TimelineFile from "@/components/Files/Timeline";

import type { FC } from "react";

const Timeline: FC = () => {

    return (
        <div className="w-full h-full overflow-auto">
            <TimelineFile
                timelineItems={[
                    {
                        title: 'FreeCodeCamp',
                        description: 'FreeCodeCamp é uma plataforma online que oferece cursos gratuitos de programação, desenvolvimento web e tecnologias relacionadas.',
                        subTitle: 'Cursos finalizados',
                        items: [
                            { title: 'Back End Development and APIs', sendTo: 'https://www.freecodecamp.org/certification/icaro-davi/back-end-development-and-apis' },
                            { title: 'Front End Development Libraries', sendTo: 'https://www.freecodecamp.org/certification/icaro-davi/front-end-development-libraries' },
                            { title: 'JavaScript Algorithms and Data Structures', sendTo: 'https://www.freecodecamp.org/certification/icaro-davi/javascript-algorithms-and-data-structures' },
                            { title: 'Responsive Web Design', sendTo: 'https://www.freecodecamp.org/certification/icaro-davi/responsive-web-design' },
                        ]
                    },
                    {
                        title: 'Cursos da Udemy',
                        description: 'Udemy é uma plataforma de ensino online que oferece uma ampla variedade de cursos pagos e gratuitos em diversas áreas.',
                        subTitle: 'Cursos finalizados',
                        items: [
                            { title: 'NGINX Fundamentals: High Performance Servers from Scratch', sendTo: 'https://www.udemy.com/certificate/UC-81f45c9a-36e4-467e-965d-c824b15f67fb/' },
                            { title: 'Docker para Desenvolvedores (com Docker Swarm e Kuberneres)', sendTo: 'https://www.udemy.com/certificate/UC-ee492469-c9cf-47ae-91d5-0db955cd5a54/' }
                        ]
                    },
                ]}
            />
        </div>
    );
}

export default Timeline;