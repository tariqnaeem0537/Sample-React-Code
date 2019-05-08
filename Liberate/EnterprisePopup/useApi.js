import {useTriggerableEndpoint} from 'utils/hooks/api';

export function useFetchEnterprise() {
  const [result, fnc] = useTriggerableEndpoint(enterpriseId => {
    if (!enterpriseId) {
      return null;
    }

    return {
      url: `/users?search=${enterpriseId}`,
      method: 'GET',
    };
  });

  return [result, fnc];
}
