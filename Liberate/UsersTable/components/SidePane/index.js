import React, {useState, useEffect} from 'react';
import {object, func, bool} from 'prop-types';
import {userTemplate} from 'utils/consts';
import Header from './Header';
import Invitation from './Invitation';
import ModifyUser from './ModifyUser';

export default function SidePane({
  user = {},
  toggle = () => {},
  editing = false,
}) {
  const data = {...userTemplate, ...user};
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    if (editing) {
      setIsEditing(editing);
    }
  }, []);

  function handleOnEdit() {
    if (editing) {
      // props telling us to Edit (only)
      return toggle();
    }
    return setIsEditing(!isEditing);
  }

  return (
    <>
      <Header
        data={data}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
      />

      {isEditing ? (
        <ModifyUser user={data} toggle={handleOnEdit} />
      ) : (
        <Invitation user={data} toggle={toggle} />
      )}
    </>
  );
}

SidePane.propTypes = {
  user: object,
  toggle: func,
  editing: bool,
};
