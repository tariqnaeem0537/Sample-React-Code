import {useTriggerableEndpoint} from 'utils/hooks/api';

export function usePerformAction() {
  const [result, fnc] = useTriggerableEndpoint((action, data) => {
    if (!action && !data) {
      return null;
    }
    return prepareAxios(action, data);
  });

  return [result, fnc];
}

function prepareAxios(action, data) {
  switch (action) {
    case 'invite':
      return {
        url: '/users/invitation',
        method: 'POST',
        data: {
          FNN: data.phoneNumber,
          MSISDN: data.mobileNumber,
          userId: data.userId,
          search: data.enterpriseId,
        },
      };
    case 'revoke':
      return {
        url: `/users/${data.userId}/invitation`,
        method: 'PATCH',
        data: {
          FNN: data.phoneNumber,
          status: 'revoked',
          search: data.enterpriseId,
        },
      };
    case 'remove':
      return {
        url: `/user/${data.phoneNumber}`,
        method: 'DELETE',
        data: {
          search: data.enterpriseId,
        },
      };
    default:
      return null;
  }
}
