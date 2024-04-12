import TimelineFile from "@/components/Files/Timeline";

import type { FC } from "react";

const Timeline: FC = () => {

    return (
        <TimelineFile
            timelineItems={[
                {
                    title: 'FreeCodeCamp',
                    description: 'FreeCodeCamp é uma plataforma online que oferece cursos gratuitos de programação, desenvolvimento web e tecnologias relacionadas.',
                    subTitle: 'Cursos finalizados',
                    items: [
                        { title: 'Back End Development and APIs', sendTo: 'https://google.com' },
                        { title: 'Front End Development Libraries', sendTo: 'https://google.com' },
                        { title: 'JavaScript Algorithms and Data Structures', sendTo: 'https://google.com' },
                        { title: 'Responsive Web Design', sendTo: 'https://google.com' },
                    ]
                },
                {
                    title: 'Cursos da Udemy',
                    description: 'Udemy é uma plataforma de ensino online que oferece uma ampla variedade de cursos pagos e gratuitos em diversas áreas.',
                    subTitle: 'Cursos finalizados',
                    items: [
                        { title: 'NGINX Fundamentals: High Performance Servers from Scratch', sendTo: 'https://google.com' },
                        { title: 'Docker para Desenvolvedores (com Docker Swarm e Kuberneres)', sendTo: 'https://google.com' }
                    ]
                },
            ]}
        />
    );
}

export default Timeline;