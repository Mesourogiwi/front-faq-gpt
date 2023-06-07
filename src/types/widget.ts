import { sessionResponse, sourceResponse } from '.';

export type widgetResponse = {
  id: number;
  sources: sourceResponse[];
  sessions: sessionResponse[];
};
