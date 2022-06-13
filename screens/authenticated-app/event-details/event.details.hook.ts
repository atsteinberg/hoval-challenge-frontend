import { useEffect } from 'react';
import { ErrorStatus } from '../../../classes/enums';
import useUpdateError from '../../../services/graphql/mutations/use-update-error';
import { EventItemProps } from '../../../components/event-item/event-item';

const useEventDetails = (
  params: Omit<EventItemProps, 'navigate'>,
  goBack: () => void,
) => {
  const { updateError } = useUpdateError();
  const { id, type, status } = params;
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

  const acknowledge =
    type === 'DeviceError'
      ? () => {
          updateError({
            variables: { input: { id, status: ErrorStatus.Acknowledged } },
          });
          goBack();
        }
      : undefined;

  return {
    acknowledge,
    buttonDisabled: status === ErrorStatus.Acknowledged,
    shouldShowButton: type === 'DeviceError',
  };
};

export default useEventDetails;
