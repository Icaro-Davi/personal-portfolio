import type { FC } from 'react';
import FileWindowProvider from './hooks/useFIleWindowContext/Provider';
import FileWindowContainer from './FileWindowContainer';
import { FileWindowContainerProps } from './types';

const FileWindow: FC<FileWindowContainerProps> = props => (
    <FileWindowProvider>
        <FileWindowContainer  {...props} />
    </FileWindowProvider>
);

export default FileWindow;