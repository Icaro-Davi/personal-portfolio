import type {FC} from 'react';
import { FileWindowProps } from './types';
import Header from './Header';

const FileWindow: FC<FileWindowProps> = props => {
    return (
        <div className="flex flex-col bg-secondary border-x-2 border-b-2 border-primary w-full h-full sm:w-[70%] sm:h-[60%]">
            <Header title="Title" />
            <div className="p-2 text-base" >
                {props.children}
            </div>
        </div>
    );
}

export default FileWindow;