import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DivButton from 'components/Buttons/Div';
import TsAndCs from 'components/Liberate/TermsConditions';
import styles from './styles.module.scss';

export default function TermsAndConditions() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <TsAndCs />

      <DivButton className={styles.accept} onClick={() => setChecked(!checked)}>
        <span className={styles.checkbox}>
          <Checkbox
            id="tsandcs"
            name="tsandcs"
            checked={checked}
            classes={{checked: styles.checked}}
            onChange={() => setChecked(!checked)}
            inputProps={{'aria-label': 'accept terms and conditions'}}
          />
          I accept the Terms & Conditions
        </span>
      </DivButton>
    </div>
  );
}
