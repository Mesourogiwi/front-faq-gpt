import axiosInstance from '../../config/axios';
import { userResponse } from '../../types';

export const getUser = async (id: number) => {
  try {
    const { data } = await axiosInstance({
      url: `/users/${id.toString()}`,
      method: 'GET',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
    });

    return data as userResponse;
  } catch (err) {
    console.log(err);
  }
};
