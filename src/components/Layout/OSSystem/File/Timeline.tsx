import TimelineFile from "@/components/Files/Timeline";
import { useTranslations } from "next-intl";

import type { FC } from "react";

const timeline = [
  {
    key: "free_code_camp",
    items: [
      {
        title: "Back End Development and APIs",
        sendTo:
          "https://www.freecodecamp.org/certification/icaro-davi/back-end-development-and-apis",
      },
      {
        title: "Front End Development Libraries",
        sendTo:
          "https://www.freecodecamp.org/certification/icaro-davi/front-end-development-libraries",
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        sendTo:
          "https://www.freecodecamp.org/certification/icaro-davi/javascript-algorithms-and-data-structures",
      },
      {
        title: "Responsive Web Design",
        sendTo:
          "https://www.freecodecamp.org/certification/icaro-davi/responsive-web-design",
      },
    ],
  },
  {
    key: "udemy",
    items: [
      {
        title: "NGINX Fundamentals: High Performance Servers from Scratch",
        sendTo:
          "https://www.udemy.com/certificate/UC-81f45c9a-36e4-467e-965d-c824b15f67fb/",
      },
      {
        title: "Docker para Desenvolvedores (com Docker Swarm e Kuberneres)",
        sendTo:
          "https://www.udemy.com/certificate/UC-ee492469-c9cf-47ae-91d5-0db955cd5a54/",
      },
    ],
  },
];

const Timeline: FC = () => {
  const t = useTranslations("Index.file.education.timeline");
  const translatedTimeline = timeline.map(({ items, key }) => ({
    title: t(`${key}.title` as any),
    description: t(`${key}.description` as any),
    subTitle: t(`${key}.sub_title` as any),
    items,
  }));
  return (
    <div className="w-full h-full overflow-auto">
      <TimelineFile timelineItems={translatedTimeline} />
    </div>
  );
};

export default Timeline;
