import React from 'react';
import {shape, string} from 'prop-types';
import SpanButton from 'components/Buttons/Span';
import useSidePane from 'utils/hooks/html/useSidePane';
import InitialsCircle from 'components/Liberate/InitialsCircle';
import SidePaneContent from 'components/Liberate/UsersTable/components/SidePane';
import styles from './styles.module.scss';

export default function FullnameField({data}) {
  const {SidePane, toggle} = useSidePane();

  return (
    <>
      <SpanButton
        onClick={toggle}
        title="Modify user details"
        className={styles.nameField}
      >
        <InitialsCircle
          fname={data.firstName}
          lname={data.lastName}
          fullname={data.fullName}
          className={styles.initCircle}
        />
        <span>{data.fullName}</span>
      </SpanButton>

      <SidePane>
        <SidePaneContent user={data} toggle={toggle} editing />
      </SidePane>
    </>
  );
}

FullnameField.propTypes = {
  data: shape({
    firstName: string,
    lastName: string,
    fullName: string,
  }),
};
