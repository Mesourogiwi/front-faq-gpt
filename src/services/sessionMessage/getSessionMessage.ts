import axiosInstance from '../../config/axios';
import { sessionMessageResponse } from '../../types';

export const getSessionMessage = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/session-messages/${id.toString()}`,
      method: 'GET',
    });

    return response.data as sessionMessageResponse;
  } catch (err) {
    console.log(err);
  }
};
