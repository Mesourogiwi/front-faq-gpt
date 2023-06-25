import { atom } from 'jotai';
import { Option } from './types';

const inital_options = [
  {
    name: 'Home',
    selected: true,
  },
  {
    name: 'DataSources',
    selected: false,
  },
  {
    name: 'Control',
    selected: false,
  },
  {
    name: 'Sessions',
    selected: false,
  },
  {
    name: 'Settings',
    selected: false,
  },
];

export const options = atom<Option[]>(inital_options);
