import axiosInstance from '../../config/axios';
import { userResponse } from '../../types';

export const getUserByLogin = async (login: string) => {
  try {
    const response = await axiosInstance({
      url: `/users/by-login/${login}`,
      method: 'GET',
    });

    return response?.data as userResponse;
  } catch (err) {
    console.log(err);
  }
};
