import type { sourceMessagesResponse } from '.';

export type sourceResponse = {
  id: number;
  text: string;
  channel: string;
  sourceMessages: sourceMessagesResponse[];
};
