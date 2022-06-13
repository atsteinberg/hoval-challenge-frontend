import { gql, useQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { DeviceError } from '../../../classes/device-error.class';
import { userState } from '../../../recoil/store';

const GET_ERROR = gql`
  query Query($getErrorId: String!) {
    getError(id: $getErrorId) {
      id
      createdAt
      updatedAt
      errorType
      message
      status
    }
  }
`;

const useGetError = (id?: string) => {
  const { accessToken } = useRecoilValue(userState) ?? {};
  const { data, loading, error } = useQuery<{
    getError: Partial<DeviceError>;
  }>(GET_ERROR, {
    variables: {
      getErrorId: id,
    },
    context: {
      accessToken,
    },
    skip: !id,
  });
  return {
    loading,
    device: data?.getError ? new DeviceError(data.getError) : null,
    error,
  };
};

export default useGetError;
