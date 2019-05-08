import React from 'react';
import {object, func} from 'prop-types';
import CloudUpload from 'components/Icons/CloudUpload';
import SpanButton from 'components/Buttons/Span';
import styles from './styles.module.scss';

export default function UploadContentBox({
  file = null,
  onRemoveFile = () => {},
}) {
  function handleRemoveFile(e) {
    e.stopPropagation(); // prevent outter div from openning file upload dialog
    onRemoveFile();
  }

  if (file) {
    return (
      <p className={styles.uploading}>
        You're about to upload:
        <span className={styles.filename}>{file.name}</span>
        <SpanButton
          title="Remove file"
          className={styles.cancel}
          onClick={handleRemoveFile}
        >
          X
        </SpanButton>
      </p>
    );
  }
  return (
    <>
      <CloudUpload />
      <p className={styles.select}>
        Select your .csv file or drag and drop it here
      </p>
    </>
  );
}

UploadContentBox.propTypes = {
  file: object,
  onRemoveFile: func,
};
