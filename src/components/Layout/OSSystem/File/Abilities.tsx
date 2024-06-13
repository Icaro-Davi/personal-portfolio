import { useTranslations } from "use-intl";
import IconShape from "@/components/IconShape";
import KnownTechnologyRefs from '@/utils/KnownTechnologyRefs';

import type { FC } from "react";

const Abilities: FC = () => {
    const t = useTranslations('Index.file.skills');
    return (
        <div className='w-full h-full p-2 flex overflow-auto'>
            <div className='text-center m-auto'>
                <h2 className='pb-2 text-lg text-primary font-bold'>
                    {t('my_skills')}
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
}

export default Abilities;