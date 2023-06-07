import axiosInstance from '../../config/axios';
import { sessionMessageResponse } from '../../types';

export type createSessionMessageData = {
  sessionId: number;
  timestamp: string;
  text: string;
  isUser: boolean;
};

export const createSessionMessage = async ({ sessionId, ...data }: createSessionMessageData) => {
  try {
    const response = await axiosInstance({
      url: '/session-messages/',
      method: 'POST',

      data: {
        ...data,
        session: {
          id: sessionId,
        },
      },
    });

    return response?.data as sessionMessageResponse;
  } catch (err) {
    console.log(err);
  }
};
