import axiosInstance from '../../config/axios';
import { sessionMessageResponse } from '../../types';

export type chatData = {
  sessionId: number;
  question: string;
};

export const chat = async (data: chatData) => {
  try {
    const response = await axiosInstance({
      url: '/chat/',
      method: 'POST',
      data,
    });

    return response?.data as sessionMessageResponse;
  } catch (err) {
    console.log(err);
  }
};
