import {useTriggerableEndpoint} from 'utils/hooks/api';

export function usePerformUpdate() {
  const [result, fnc] = useTriggerableEndpoint((userId, data) => {
    if (!data) {
      return null;
    }

    return {
      url: `/users/${userId}`,
      method: 'PATCH',
      data,
    };
  });

  return [result, fnc];
}
