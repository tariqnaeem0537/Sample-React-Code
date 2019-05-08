/* eslint no-nested-ternary: 0 */
import React, {useState, useContext} from 'react';
import {LoggedInUserCtx} from 'utils/consts';
import DivButton from 'components/Buttons/Div';
import ChevronIcon from 'components/ChevronIcon';
import InitialsCircle from 'components/Liberate/InitialsCircle';
import TermsConditions from 'components/Liberate/TermsConditions';
import useSidePane from 'utils/hooks/html/useSidePane';
import DropdownBox from './components/DropdownBox';
import {initState, UserNavDropdownCtx, option} from './consts';
import styles from './styles.module.scss';

export default function UsernameNavItem() {
  const {SidePane, toggle} = useSidePane();
  const [state, setState] = useState(initState);
  const {
    user: {userName},
  } = useContext(LoggedInUserCtx);

  function toggleDropdown(opt = null) {
    setState({
      ...state,
      show: typeof opt === 'boolean' ? opt : !state.show,
    });
  }

  function selectOption(opt = '') {
    setState({show: false, selected: opt});
    toggle();
  }

  return (
    <UserNavDropdownCtx.Provider value={{state, selectOption}}>
      <DivButton
        onClick={() => toggleDropdown()}
        className={styles.userNavItem}
      >
        <InitialsCircle fullname={userName} className={styles.circle} />

        <span className={styles.username}>{userName}</span>

        <ChevronIcon up={state.show} />
      </DivButton>

      {state.show && (
        <DropdownBox onClickOutside={() => toggleDropdown(false)} />
      )}

      <SidePane>
        {state.selected === option.terms ? (
          <TermsConditions />
        ) : state.selected === option.sms ? (
          <p>Customise SMS</p>
        ) : null}
      </SidePane>
    </UserNavDropdownCtx.Provider>
  );
}
