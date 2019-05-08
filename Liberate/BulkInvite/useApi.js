import {url} from 'utils/consts';
import {useTriggerableEndpoint} from 'utils/hooks/api';

export function useUploadFile() {
  const [result, fnc] = useTriggerableEndpoint(file => {
    if (!file) {
      return null;
    }

    const data = new FormData();
    data.append(file.name, file);

    return {
      method: 'POST',
      url: url.api.bulkInvite,
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
  });

  return [result, fnc];
}
