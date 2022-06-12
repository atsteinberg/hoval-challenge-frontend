import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/store';
import AuthenticatedApp from './authenticated-app';
import Login from './login';

const Screens: FC = () => {
  const [user] = useRecoilState(userState);

  return user ? <AuthenticatedApp /> : <Login />;
};

export default Screens;
