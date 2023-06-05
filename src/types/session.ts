import type { sessionMessageResponse } from '.';

export type sessionResponse = {
  id: number;
  startDate: string;
  endDate: string;
  sessionMessages: sessionMessageResponse[];
};
