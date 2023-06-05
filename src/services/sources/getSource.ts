import axiosInstance from '../../config/axios';
import { sourceResponse } from '../../types';

export const getSource = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/sources/${id.toString()}`,
      method: 'GET',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
    });

    return response.data as sourceResponse;
  } catch (err) {
    console.log(err);
  }
};
