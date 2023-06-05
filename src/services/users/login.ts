import axiosInstance from '../../config/axios';
import { loginResponse } from '../../types';

export type loginData = {
  login: string;
  password: string;
};

export const login = async (data: loginData) => {
  try {
    const response = await axiosInstance({
      url: '/login',
      method: 'POST',
      data,
    });

    return response?.data as loginResponse;
  } catch (err) {
    console.log(err);
  }
};
