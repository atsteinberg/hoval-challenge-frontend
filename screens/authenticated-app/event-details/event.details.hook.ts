import { useEffect, useState } from 'react';
import { ErrorStatus } from '../../../classes/enums';
import useUpdateError from '../../../services/graphql/mutations/use-update-error';
import { EventItemProps } from '../../../components/event-item/event-item';

const useEventDetails = (params: Omit<EventItemProps, 'navigate'>) => {
  const { updateError } = useUpdateError();
  const { id, type, status } = params;
  const [buttonDisabled, setButtonDisabled] = useState(
    status === ErrorStatus.Acknowledged,
  );
  useEffect(() => {
    if (type === 'DeviceError' && status === ErrorStatus.Unread) {
      updateError({
        variables: {
          input: {
            id,
            status: 'Read',
          },
        },
      });
    }
  }, [id, status, type, updateError]);

  const onPress =
    type === 'DeviceError'
      ? () => {
          updateError({
            variables: { input: { id, status: ErrorStatus.Acknowledged } },
          });
          setButtonDisabled(true);
        }
      : undefined;

  return { onPress, buttonDisabled, shouldShowButton: type === 'DeviceError' };
};

export default useEventDetails;
