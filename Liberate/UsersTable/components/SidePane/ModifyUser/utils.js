/**
 * @description
 * 1. cleans form input by trim()
 * 2. check against simple validation rules
 * 3. if input === data, result = 'unchanged' so we don't ajax server
 *    if not valide, result = error message
 *    if valide, result = true
 *
 * @param {Array} form event.target
 * @param {Object} data original user data
 * @returns {Object} {result: string | bool, cleanedObj: object}
 */
export function cleanAndValidateInput(form, data) {
  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();

  const validation = {
    result: true,
    cleanedObj: {firstName, lastName},
  };

  if (!firstName) {
    validation.result = 'Missing first name!';
  }
  if (!lastName) {
    validation.result = 'Missing last name';
  }
  if (firstName.length > 25 || lastName > 25) {
    validation.result = 'Name field cannot be more than 25 characters';
  }
  if (firstName === data.firstName && lastName === data.lastName) {
    validation.result = 'unchanged';
  }

  return validation;
}

export const editables = {
  firstName: true,
  lastName: true,
};
