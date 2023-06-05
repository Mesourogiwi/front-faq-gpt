import axiosInstance from '../../config/axios';
import { sessionMessageResponse } from '../../types';

export const getSessionMessages = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/sessions/${id.toString()}/messages`,
      method: 'GET',
    });

    return response.data as sessionMessageResponse[];
  } catch (err) {
    console.log(err);
  }
};
