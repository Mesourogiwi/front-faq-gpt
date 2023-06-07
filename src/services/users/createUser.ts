import axiosInstance from '../../config/axios';
import { userResponse } from '../../types';

export type createUserData = {
  name: string;
  login: string;
  password: string;
};

export const createUser = async (data: createUserData) => {
  try {
    const response = await axiosInstance({
      url: '/users/',
      method: 'POST',
      data,
    });

    return response?.data as userResponse;
  } catch (err) {
    console.log(err);
  }
};
