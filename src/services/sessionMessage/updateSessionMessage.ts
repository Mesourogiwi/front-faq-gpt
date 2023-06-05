import axiosInstance from '../../config/axios';
import { sessionMessageResponse } from '../../types';

export type updateSessionMessageData = {
  sessionId: number;
  timestamp: string;
  text: string;
  isUser: boolean;
};

export const updateSessionMessage = async (
  id: number,
  { sessionId, ...data }: updateSessionMessageData
) => {
  try {
    const response = await axiosInstance({
      url: `/session-messages/${id.toString()}`,
      method: 'PUT',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
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
