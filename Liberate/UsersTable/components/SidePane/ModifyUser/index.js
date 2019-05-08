import React, {useState, useContext, useEffect} from 'react';
import {object, func} from 'prop-types';
import toast from 'components/Toaster';
import SubmitButton from 'components/Buttons/Submit';
import CancelButton from 'components/Buttons/Cancel';
import InputTextField from 'components/Inputs/TextField';
import MessageBox from 'components/MessageBox';
import {UsersTableCtx, action} from 'components/Liberate/UsersTable/consts';
import {usePerformUpdate} from './useApi';
import {cleanAndValidateInput} from './utils';
import styles from './styles.module.scss';

export default function ModifyUserPane({user, toggle}) {
  const {dispatch} = useContext(UsersTableCtx);
  const [res, updateUser] = usePerformUpdate();
  const [error, setError] = useState('');

  useEffect(() => {
    if (res.result && res.result.status === 200) {
      toggle();
      toast.success('User details updated', 'Success');
      dispatch(action.update_user, res.data);
    }
    setError(res.error);
  }, [res]);

  function handleSubmit(evt) {
    evt.preventDefault();
    setError(''); // reset error state

    const {result, cleanedObj} = cleanAndValidateInput(evt.target, user);
    if (result === 'unchanged') {
      return toggle();
    }
    if (result !== true) {
      return setError(result);
    }
    cleanedObj.search = user.serviceProviderId;
    return updateUser(user.userId, cleanedObj);
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputTextField
        id="firstName"
        label="FIRST NAME"
        inputClassName={styles.input}
        defaultValue={user.firstName}
        ariaLabel="first name field"
      />

      <InputTextField
        id="lastName"
        label="LAST NAME"
        inputClassName={styles.input}
        defaultValue={user.lastName}
        ariaLabel="last name field"
      />

      <MessageBox content={error} />

      <SubmitButton type="submit" text="Save" className={styles.button} />

      <CancelButton onClick={() => toggle()} />
    </form>
  );
}

ModifyUserPane.propTypes = {
  user: object,
  toggle: func,
};
