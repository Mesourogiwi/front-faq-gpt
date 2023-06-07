import axiosInstance from '../../config/axios';
import { sessionMessageResponse } from '../../types';

export const getSessionMessages = async () => {
  try {
    const response = await axiosInstance({
      url: '/session-messages/',
      method: 'GET',
    });

    return response.data as sessionMessageResponse[];
  } catch (err) {
    console.log(err);
  }
};
