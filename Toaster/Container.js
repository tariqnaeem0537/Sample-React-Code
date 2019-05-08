import React from 'react';
import {ToastContainer} from 'react-toastify';

export default function ToasterContainer() {
  return (
    <ToastContainer
      closeOnClick
      newestOnTop
      rtl={false}
      autoClose={false}
      draggable={false}
      position="top-right"
      pauseOnVisibilityChange={false}
    />
  );
}
