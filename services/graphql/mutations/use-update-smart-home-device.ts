import { gql, useMutation } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/store';
import userInteractionsFragment from '../fragments/user-interactions.fragment';

const UPDATE_SMART_HOME_DEVICE = gql`
  mutation UpdateSmartHomeDevice($input: UpdateSmartHomeDeviceInput!) {
    updateSmartHomeDevice(input: $input) {
      id
      targetTemperature
      userInteractions
        ${userInteractionsFragment}
    }
  }
`;

const useUpdateSmartHomeDevice = () => {
  const { accessToken } = useRecoilValue(userState) ?? {};
  const [updateSmartHomeDevice, { data, loading, error }] = useMutation(
    UPDATE_SMART_HOME_DEVICE,
    {
      context: {
        accessToken,
      },
    },
  );
  return {
    updateSmartHomeDevice,
    loading,
    device: data?.updateSmartHomeDevice,
    error,
  };
};

export default useUpdateSmartHomeDevice;
