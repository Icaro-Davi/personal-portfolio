import { memo, type FC } from "react";

const NerdFaceEmoji: FC<{ size?: number }> = props => {
    const emojiSize = props.size ?? 32;
    return (
        <picture className="flex items-center justify-center">
            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f913/512.webp" type="image/webp" />
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f913/512.gif" alt="🤓" width={emojiSize} height={emojiSize} />
        </picture>
    );
}

export default memo(NerdFaceEmoji);