const clean = term => term.replace(/[;,.*?^${}()|[\]\\]|-| /g, '').toLowerCase();
/**
 * @description checks if the user has a property (service/construct)
 * that is included/selected in filters array
 * @param {Object} user {...props, service, construct}
 * @param {Object} filters {construct: [], service: []}
 * @returns {Boolean}
 */
export function containsSelectedFilters(user = {}, filters = {}) {
  if (!filters.service.length && !filters.construct.length) {
    return true;
  }
  const userService = clean(user.service);
  const userConstruct = clean(user.construct);
  if (filters.service.length && filters.construct.length) {
    return (
      filters.service.some(f => clean(f) === userService)
      && filters.construct.some(f => clean(f) === userConstruct)
    );
  }
  return (
    filters.service.some(f => clean(f) === userService)
    || filters.construct.some(f => clean(f) === userConstruct)
  );
}

