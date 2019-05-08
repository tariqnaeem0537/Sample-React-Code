import {validateMobile} from 'utils';
import {url} from 'utils/consts';
import {get} from 'utils/api';
import {till} from 'utils/api/utils';

/**
 * @description for provided status, it decides:
 *  - actin type ['remove', 'revoke', 'invite']
 *  - button text (what to display on the <SidePane /> main button)
 *  - helper text (what to display below the main button -- optional)
 *
 * @param {Object} status user object status
 * @returns {Object} result {code: action type, btnText: button text, helperText: below button <p />}
 */
export function prepareAction(data) {
  const result = {
    code: null,
    btnText: null,
    helperText: null,
  };
  if (
    data.status.code === 'active' &&
    !(data.construct.toLowerCase() === 'liberate')
  ) {
    result.code = 'remove';
    result.btnText = 'Remove';
    result.helperText = `When you click remove, it will clear all data
    from this FNN and make it eligible again.`;
  } else if (data.status.code === 'pending') {
    result.code = 'revoke';
    result.btnText = 'Revoke invitation';
  } else if (data.status.code === 'eligible') {
    result.code = 'invite';
    result.btnText = 'Invite';
    result.helperText = `When you click invite, the user will receive
    a message with a link to liberate.`;
  }
  // otherwise, the action will be "View"
  return result;
}

/**
 * @description makes sure:
 * - mobile format is correct
 * - user has accepted Ts&Cs
 * - mobile no. is eligible (via mica) -- should be done on the API side on invite but ¯\_(ツ)_/¯
 *
 * @param {Array} form event.target
 * @returns {Object} {
 *  result: bool | string,
 *  msisdn: bool | string
 * }
 */
export async function cleanAndValidateInput(form) {
  let result = true;
  const msisdn = validateMobile(form.mobileNumber.value);

  if (msisdn === false) {
    result = 'Incorrect mobile number format';
  } else if (!form.tsandcs.checked) {
    result =
      'To invite a new user to join Liberate please accept the Terms & Conditions.';
  } else {
    const [err, res] = await till(get(`${url.api.mobile}/${msisdn}`));
    if (err) {
      result = 'Error validating moible number';
    } else if (res.data) {
      result = res.data.eligible || res.data.description;
    }
  }

  return {result, msisdn};
}

/**
 * @description reads the request config object to figure out what action the request was performing
 *  Becasue
 * - The API is returning the updated user object instead of a 200/400 response
 * - One func is used to manage [invite, resend, revoke, remove]
 * => We have to decide on what success/error message to display by reading the request obj
 *
 * @param {Object} result of AJAX requeast
 */
export function getSuccessMessage({config}) {
  let message = '';

  if (config.method === 'post') {
    message = 'Invitation sent';
  } else if (config.method === 'patch') {
    if (config.data.includes('removed')) {
      message = 'Liberate has been removed';
    } else {
      message = 'Invitation has been revoked';
    }
  }

  return message;
}
