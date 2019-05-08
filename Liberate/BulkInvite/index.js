import React, {useState, useEffect} from 'react';
import {func} from 'prop-types';
import toast from 'components/Toaster';
import FileInputBox from 'components/Inputs/File';
import Button from 'components/Buttons/Submit';
import MessageBox from 'components/MessageBox';
import BoxContent from './BoxContent';
import {useUploadFile} from './useApi';
import styles from './styles.module.scss';

const acceptedFormats = [
  '.csv',
  'text/csv',
  'text/plain',
  'text/x-csv',
  'application/vnd.ms-excel',
  'application/octet-stream',
];

export default function BulkUpload({toggle = () => {}}) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [res, uploadFile] = useUploadFile();

  useEffect(() => {
    if (res.result && res.result.status === 200) {
      setFile(null);
      toast.success('File sent', 'Success');
      toggle();
    }
    setError(res.error);
  }, [res]);

  function onFileDrop(files) {
    setError('');
    setFile(files[0]);
  }

  function handleRejectedFormats() {
    const msg = 'Please upload a .csv file that is less than 10 MB in size.';
    setError(msg);
  }

  function handleUpload() {
    if (!file) {
      return;
    }
    uploadFile(file);
  }

  return (
    <div className={styles.container}>
      <h1>Bulk invite</h1>

      <div className={styles.uploadTitle}>
        <b>UPLOAD YOUR FILE</b>
        <span className={styles.download}>Download a template .csv file</span>
      </div>

      <FileInputBox
        multiple={false}
        maxSize={1000000}
        accept={acceptedFormats}
        onFileDrop={onFileDrop}
        className={styles.uploadBox}
        onDragEnterClass={styles.onDragOver}
        onDropRejected={handleRejectedFormats}
      >
        <BoxContent file={file} onRemoveFile={() => setFile(null)} />
      </FileInputBox>

      <p className={styles.howto}>
        Start by downloading this CSV template file. Now fill in your .CSV file
        with the numbers you want to invite. Then drag and drop your .CSV file
        back onto this page.
      </p>

      <MessageBox content={error} />

      <Button
        text="Upload"
        className={styles.uploadButton}
        onClick={handleUpload}
      />
    </div>
  );
}

BulkUpload.propTypes = {
  toggle: func,
};
