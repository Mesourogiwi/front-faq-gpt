import { atom } from 'recoil';
import { loginResponse } from '../types';

export const currentUserState = atom<loginResponse | undefined>({
  key: 'current-user',
  default: undefined,
});
