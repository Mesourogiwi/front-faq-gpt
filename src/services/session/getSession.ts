import axiosInstance from '../../config/axios';
import { sessionResponse } from '../../types';

export const getSession = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/sessions/${id.toString()}`,
      method: 'GET',
    });

    return response.data as sessionResponse;
  } catch (err) {
    console.log(err);
  }
};
