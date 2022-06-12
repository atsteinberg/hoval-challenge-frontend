import { gql, useQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { SmartHomeDevice } from '../../../classes/smart-home-device.class';
import { userState } from '../../../recoil/store';
import deviceErrorFragment from '../fragments/device-error.fragment';
import userInteractionsFragment from '../fragments/user-interactions.fragment';

const GET_SMART_HOME_DEVICE = gql`
  query GetSmartHomeDevice($getSmartHomeDeviceId: String!) {
    getSmartHomeDevice(id: $getSmartHomeDeviceId) {
      id
      errors
        ${deviceErrorFragment}
      statusChanges {
        id
        date
        event
      }
      createdAt
      updatedAt
      ownerId
      type
      actualTemperature
      targetTemperature
      name
      userInteractions
        ${userInteractionsFragment}
    }
  }
`;

const useGetSmartHomeDevice = (id?: string) => {
  const { accessToken } = useRecoilValue(userState) ?? {};
  const { data, loading, error } = useQuery<{
    getSmartHomeDevice: Partial<SmartHomeDevice>;
  }>(GET_SMART_HOME_DEVICE, {
    variables: {
      getSmartHomeDeviceId: id,
    },
    context: {
      accessToken,
    },
    skip: !id,
  });
  return {
    loading,
    device: data?.getSmartHomeDevice
      ? new SmartHomeDevice(data.getSmartHomeDevice)
      : null,
    error,
  };
};

export default useGetSmartHomeDevice;
