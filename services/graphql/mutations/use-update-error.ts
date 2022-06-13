import { gql, useMutation } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/store';

const UPDATE_ERROR = gql`
  mutation Mutation($input: UpdateDeviceErrorInput!) {
    updateError(input: $input) {
      id
      status
    }
  }
`;

const useUpdateError = () => {
  const { accessToken } = useRecoilValue(userState) ?? {};
  const [updateError, { data, loading, error }] = useMutation(UPDATE_ERROR, {
    context: {
      accessToken,
    },
  });
  return {
    updateError,
    loading,
    deviceError: data?.updateError,
    error,
  };
};

export default useUpdateError;
