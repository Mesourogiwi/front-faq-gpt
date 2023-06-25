import { atom } from 'recoil';
import { loginResponse, userResponse } from '../types';

export const currentUserState = atom<userResponse | undefined>({
  key: 'current-user',
  default: undefined,
});
