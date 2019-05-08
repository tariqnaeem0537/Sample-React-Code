import {distanceInWords, addDays, format} from 'date-fns';

export function getTimeField(data) {
  let result = null;

  if (data.status.code === 'active') {
    result = `Since ${format(data.UCM.acceptedAt, 'DD/MM/YYYY')}`;
  } else if (data.status.code === 'pending') {
    result = `Invite expires in ${distanceInWords(
      Date.now(),
      addDays(data.UCMOffer.offerDate, 14),
    )}`;
  }

  return result;
}
