import type { sourceMessagesResponse } from './sourceMessages';

export type sourceResponse = {
  id: number;
  text: string;
  channel: string;
  sourceMessages: sourceMessagesResponse[];
};
