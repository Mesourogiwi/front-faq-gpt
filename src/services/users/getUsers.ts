import axiosInstance from '../../config/axios';
import { userResponse } from '../../types';

export const getUsers = async () => {
  try {
    const { data } = await axiosInstance({
      url: '/users/',
      method: 'GET',
    });

    return data as userResponse[];
  } catch (err) {
    console.log(err);
  }
};
