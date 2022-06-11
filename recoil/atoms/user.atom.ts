import { atom } from 'recoil';
import User from '../../classes/user.class';

export const userState = atom({
  key: 'User',
  default: null as User | null,
});

export default userState;
