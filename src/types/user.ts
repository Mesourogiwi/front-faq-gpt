import { widgetResponse } from '.';

export type userResponse = {
  id: number;
  login: string;
  name: string;
  widgets: widgetResponse[];
};

export type loginResponse = {
  id: number;
  Authorization: string;
};
