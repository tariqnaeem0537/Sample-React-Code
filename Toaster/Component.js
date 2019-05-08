/* eslint no-var: 0 */
import React, {useEffect} from 'react';
import {toast} from 'react-toastify';
import {string} from 'prop-types';

export default function ToasterComponent({title, message, className}) {
  const onEsc = e => e.key === 'Escape' && toast.dismiss();

  useEffect(() => {
    document.addEventListener('keydown', onEsc, false);

    return () => {
      document.removeEventListener('keydown', onEsc, false);
    };
  }, []);

  return (
    <div className={className}>
      {title && <h4>{title}</h4>}
      <p>{message}</p>
    </div>
  );
}

ToasterComponent.propTypes = {
  title: string,
  message: string,
  className: string,
};
