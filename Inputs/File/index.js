import React, {useState, useCallback} from 'react';
import {string, any, func} from 'prop-types';
import {useDropzone} from 'react-dropzone';
import styles from './styles.module.scss';

export default function FileInputBox({
  className = '',
  children = null,
  onDragEnterClass = '',
  onFileDrop = () => {},
  ...props
}) {
  const [draggedOver, setDraggedOver] = useState(false);
  const onDrop = useCallback(acceptedFiles => {
    onFileDrop(acceptedFiles);
  }, []);

  const {getRootProps, getInputProps} = useDropzone({onDrop, ...props});

  const css = `${styles.container} ${className} ${
    draggedOver ? onDragEnterClass : ''
  }`;

  return (
    <div
      className={css}
      {...getRootProps()}
      onDragEnter={() => setDraggedOver(true)}
      onDragLeave={() => setDraggedOver(false)}
    >
      <input {...getInputProps()} />
      {children}
    </div>
  );
}

FileInputBox.propTypes = {
  className: string,
  children: any,
  onFileDrop: func,
  onDragEnterClass: string,
};
