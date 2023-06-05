import axiosInstance from '../../config/axios';
import { sourceResponse } from '../../types';

export const getSources = async () => {
  try {
    const response = await axiosInstance({
      url: '/sources/',
      method: 'GET',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
    });

    return response.data as sourceResponse[];
  } catch (err) {
    console.log(err);
  }
};
