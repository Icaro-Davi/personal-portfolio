import IconShape from "@/components/IconShape";
import KnownTechnologyRefs from '@/utils/KnownTechnologyRefs';

import type { FC } from "react";

const Abilities: FC = () => (
    <div className='w-full h-full p-2 flex overflow-auto'>
        <div className='text-center m-auto'>
            <h2 className='pb-2 text-lg text-primary font-bold'>
                Minhas Habilidades
            </h2>
            <div className='flex flex-wrap gap-2 justify-center'>
                {KnownTechnologyRefs.technologies.map(({ href, icon, name }, index) => (
                    <IconShape
                        key={`ability-${index}`}
                        title={name}
                        icon={icon}
                        href={href}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default Abilities;