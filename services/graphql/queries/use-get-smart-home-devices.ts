import { gql, useQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { SmartHomeDevice } from '../../../classes/smart-home-device.class';
import { userState } from '../../../recoil/store';
import deviceErrorFragment from '../fragments/device-error.fragment';

export const GET_SMART_HOME_DEVICES = gql`
  query GetSmartHomeDevices {
    getSmartHomeDevices {
      id
      type
      name
      errors
        ${deviceErrorFragment}
    }
  }
`;

const useGetSmartHomeDevices = () => {
  const { accessToken } = useRecoilValue(userState) ?? {};
  const { data, loading, error } = useQuery<{
    getSmartHomeDevices: Partial<SmartHomeDevice>[];
  }>(GET_SMART_HOME_DEVICES, {
    context: {
      accessToken,
    },
  });
  return {
    loading,
    devices: data?.getSmartHomeDevices.map(
      (device) => new SmartHomeDevice(device),
    ),
    error,
  };
};

export default useGetSmartHomeDevices;
