import React, {useEffect, useContext, useState, useRef} from 'react';
import {func, string} from 'prop-types';
import history from 'routes/history';
import {LoggedInUserCtx} from 'utils/consts';
import WindowStorage from 'utils/storage';
import {LS_NAMES} from 'utils/storage/consts';
import MessageBox from 'components/MessageBox';
import SubmitButton from 'components/Buttons/Submit';
import InputTextField from 'components/Inputs/TextField';
import NeedSupport from 'components/Liberate/NeedSupport';
import {useFetchEnterprise} from './useApi';
import styles from './styles.module.scss';

const storage = WindowStorage('session');

export default function EnterpriseIdForm({
  onSuccess = () => {},
  title = 'Enterprise ID',
}) {
  const ref = useRef(null);
  const [error, setError] = useState(null);
  const {setUser} = useContext(LoggedInUserCtx);
  const [res, fetchEnterprise] = useFetchEnterprise();

  useEffect(() => {
    if (res.data && res.data.length) {
      const {tenancyName, tenancyId} = res.data[0];
      ref.current.value = `${tenancyName} (${tenancyId})`;
    }
  }, [res]);

  function onSubmit(e) {
    e.preventDefault();
    fetchEnterprise(e.target[0].value.trim());
  }

  function onConfirm() {
    setUser(res.data[0]); // once set, LoggedInUserCtx subscribers will react
    onSuccess(res.data[0]);
    // the following is hacky way to reset search state/data
    storage.remove(LS_NAMES.search);
    history.push('');
  }

  function handleInputChange() {
    if (error) {
      setError(null);
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <div className={styles.title}>{title}</div>

      <span className={styles.searchBox}>
        <span className={styles.inputField}>
          <InputTextField
            el={ref}
            required
            type="text"
            id="enterpriseId"
            loading={res.loading}
            onChange={handleInputChange}
            ariaLabel="Enterprise ID field"
            label="Search User FNN/Enterprise ID"
            placeholder="Search User FNN/Enterprise ID"
          />
        </span>

        <SubmitButton
          type="submit"
          text="Search"
          className={styles.searchButton}
        />
      </span>

      <MessageBox content={res.error} />

      <SubmitButton
        type="button"
        text="Confirm ID"
        onClick={onConfirm}
        disabled={!res.data}
        className={styles.confirmButton}
      />

      <NeedSupport />
    </form>
  );
}

EnterpriseIdForm.propTypes = {
  onSuccess: func,
  title: string,
};
