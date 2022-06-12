import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../recoil/store';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import LoginUser from '../../classes/login-user.class';
import { loginUser } from '../../services/axios/axios.service';
import Toast from 'react-native-toast-message';

const resolver = classValidatorResolver(LoginUser);

export const useLogin = () => {
  const setUser = useSetRecoilState(userState);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver,
  });
  const onSubmit = async (user: LoginUser) => {
    const response = await loginUser(user.username, user.password);
    if (response) {
      setUser({ username: user.username, ...response });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Benutzername oder Passwort sind inkorrekt.',
      });
    }
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
