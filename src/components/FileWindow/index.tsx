import type { FC } from 'react';
import FileWindowContainer from './FileWindowContainer';
import { FileWindowContainerProps } from './types';

const FileWindow: FC<FileWindowContainerProps> = props => (
    <FileWindowContainer  {...props} />
);

export default FileWindow;