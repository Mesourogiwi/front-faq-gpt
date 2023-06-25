import { sessionResponse, sourceResponse } from '.';

export type widgetResponse = {
  id: number;
  name: string;
  sources: sourceResponse[];
  sessions: sessionResponse[];
};
