import { memo } from "react";
import GlitchText from '@/components/Glitch/Text';
import className from "./styles";

import type { FC } from "react";

type TimelineItem = {
    title: string;
    subTitle?: string;
    description?: string;
    items: {
        title: string;
        sendTo?: string;
    }[]
}

const TimelineFile: FC<{ timelineItems: TimelineItem[] }> = props => (
    <div className={className.container.toClassName()}>
        {props.timelineItems.map(({ items, title, description, subTitle }, index) => (
            <div key={`timeline-${index}`} className="flex w-min-[300px] w-max-[600px]">
                <div key={`timeline-item-${index}`} className={className.timelineItemContainer.toClassName()}>
                    <div className="flex">
                        <h2 className={className.title.callConditional('principal').toClassName()}>{title}</h2>
                    </div>
                    <div className={className.leftBorder.toClassName()}>
                        {description && (
                            <div className="flex">
                                <p className={className.listItem.toClassName('mb-2')}>{description}</p>
                            </div>
                        )}{subTitle && (
                            <div className="inline-block">
                                <h3 className={className.title.callConditional('subTitle').toClassName(className.listItem)}>{subTitle}</h3>
                            </div>
                        )}
                        <ul>
                            {items.map(({ title, sendTo }, _index) => (
                                <li key={`timeline-subitem-${index}-${_index}`} className="flex">
                                    <a
                                        className={className.listItem.callConditional('add-dot').toClassName()}
                                        target="blank"
                                        href={sendTo ?? ''}>
                                        {sendTo ? <GlitchText>{title}</GlitchText> : title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default memo(TimelineFile);