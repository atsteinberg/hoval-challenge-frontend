import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/store';
import AuthenticatedApp from './authenticated-app/authenticated-app';
import UnauthenticatedApp from './unauthenticated-app.tsx/unauthenticated-app';

const Screens: FC = () => {
  const [user] = useRecoilState(userState);

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Screens;
