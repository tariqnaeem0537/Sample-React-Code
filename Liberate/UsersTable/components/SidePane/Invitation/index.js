/* eslint no-param-reassign:0 */
import React, {useState, useEffect, useContext} from 'react';
import {object, func} from 'prop-types';
import toast from 'components/Toaster';
import {LoggedInUserCtx} from 'utils/consts';
import Button from 'components/Buttons/Submit';
import MessageBox from 'components/MessageBox';
import Spinner from 'components/LoadingSpinner';
import {
  UsersTableCtx,
  action as TableAction,
} from 'components/Liberate/UsersTable/consts';
import ResentButton from './components/ResendButton';
import UserFields from './components/UserFields';
import TsAndCs from './components/TermsConditions';
import {usePerformAction} from './useApi';
import {prepareAction, cleanAndValidateInput, getSuccessMessage} from './utils';
import styles from './styles.module.scss';

export default function InvitationSidePane({user, toggle}) {
  const {dispatch} = useContext(UsersTableCtx);
  const [res, performAction] = usePerformAction();
  const [error, setError] = useState('');

  const action = prepareAction(user);
  const {
    user: {tenancyId},
  } = useContext(LoggedInUserCtx);

  useEffect(() => {
    if (res.result && res.result.status === 200) {
      toggle();
      toast.success(getSuccessMessage(res.result), 'Success');
      dispatch(TableAction.update_user, res.data);
    }
    setError(res.error);
  }, [res]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    setError(''); // reset error state
    const params = {
      ...user,
    };

    if (user.status.code === 'eligible') {
      const {result, msisdn} = await cleanAndValidateInput(evt.target);
      if (result !== true) {
        return setError(result);
      }
      params.mobileNumber = msisdn;
    }

    return sendRequest(action.code, params);
  }

  function sendRequest(actionCode, params) {
    params.enterpriseId = tenancyId;
    return performAction(actionCode, params);
  }

  const isPending = user.status.code === 'pending';
  const showTsAndCs = user.status.code === 'eligible';

  return (
    <>
      {res.loading && <Spinner size={24} oClassName={styles.spinner} />}

      {isPending && (
        <ResentButton onClick={() => sendRequest('invite', user)} />
      )}

      <form onSubmit={handleSubmit}>
        <UserFields user={user} />

        {showTsAndCs && <TsAndCs />}

        {action.code && (
          <>
            <MessageBox content={error} />
            <Button
              type="submit"
              text={action.btnText}
              disabled={res.loading}
              className={styles.button}
            />
          </>
        )}
      </form>

      <p className={styles.explaination}>{action.helperText}</p>
    </>
  );
}

InvitationSidePane.propTypes = {
  user: object,
  toggle: func,
};
