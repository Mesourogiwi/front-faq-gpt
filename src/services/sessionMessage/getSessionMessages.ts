import axiosInstance from '../../config/axios';
import { sessionMessageResponse } from '../../types';

export const getSessionMessages = async () => {
  try {
    const response = await axiosInstance({
      url: '/session-messages/',
      method: 'GET',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
    });

    return response.data as sessionMessageResponse[];
  } catch (err) {
    console.log(err);
  }
};
