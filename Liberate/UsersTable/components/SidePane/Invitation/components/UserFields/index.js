import React from 'react';
import {object} from 'prop-types';
import InputTextField from 'components/Inputs/TextField';
import CannotEditThis from './CannotEditThis';
import styles from './styles.module.scss';

export default function UserFields({user = {}}) {
  return (
    <>
      <InputTextField
        disabled
        id="firstName"
        label="FIRST NAME"
        inputClassName={styles.input}
        defaultValue={user.firstName}
        ariaLabel="first name field"
      />
      <InputTextField
        disabled
        id="lastName"
        label="LAST NAME"
        inputClassName={styles.input}
        defaultValue={user.lastName}
        ariaLabel="last name field"
      />

      <CannotEditThis />

      <InputTextField
        disabled
        id="phoneNumber"
        label="FIXED NUMBER"
        inputClassName={styles.input}
        defaultValue={user.phoneNumber}
        ariaLabel="phone number field"
      />

      {user.status.code !== 'ineligible' && (
        <InputTextField
          id="mobileNumber"
          label="MOBILE NUMBER"
          inputClassName={styles.input}
          defaultValue={user.mobileNumber}
          ariaLabel="mobile number field"
          disabled={!(user.status.code === 'eligible')}
        />
      )}
      {user.status.code === 'pending' && (
        <p className={styles.pendingMobileText}>
          You aren’t able to edit because it’s a pending invitation.
        </p>
      )}
    </>
  );
}

UserFields.propTypes = {
  user: object,
};
