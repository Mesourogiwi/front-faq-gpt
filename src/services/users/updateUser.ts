import axiosInstance from '../../config/axios';
import { userResponse } from '../../types';

export type updateUserData = {
  name: string;
  login: string;
  password: string;
};

export const updateUser = async (id: number, data: updateUserData) => {
  try {
    const response = await axiosInstance({
      url: `/users/${id.toString()}`,
      method: 'PUT',

      data,
    });

    return response?.data as userResponse;
  } catch (err) {
    console.log(err);
  }
};
