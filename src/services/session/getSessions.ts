import axiosInstance from '../../config/axios';
import { sessionResponse } from '../../types';

export const getSessions = async () => {
  try {
    const response = await axiosInstance({
      url: '/sessions/',
      method: 'GET',
    });

    return response.data as sessionResponse[];
  } catch (err) {
    console.log(err);
  }
};
