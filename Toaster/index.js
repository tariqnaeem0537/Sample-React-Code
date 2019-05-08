/* eslint no-unused-vars:0 */
/* eslint react/prop-types:0 */
import React from 'react';
import {toast} from 'react-toastify';
import {ArrowRight} from 'components/Icons';
import Component from './Component';
import styles from './styles.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const CloseBtn = ({closeToast}) => <ArrowRight />;

/**
 * @param {Object} paramsObj
 */
function toastIt(paramsObj) {
  const initObj = {message: '', type: 'default', title: ''};
  const {type, title, message} = {...initObj, ...paramsObj};

  const className = styles[type];

  toast(<Component title={title} message={message} />, {
    closeButton: <CloseBtn />,
    className,
  });
}

export default {
  error: (message, title = '') => toastIt({message, title, type: 'error'}),
  success: (message, title = '') => toastIt({message, title, type: 'success'}),
  warning: (message, title = '') => toastIt({message, title, type: 'warning'}),
  info: (message, title = '') => toastIt({message, title, type: 'info'}),
  default: (message, title = '') => toastIt({message, title}),
};
