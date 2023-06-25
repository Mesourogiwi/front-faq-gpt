import { AxiosResponse } from 'axios';
import axiosInstance from '../../config/axios';
import { sourceResponse } from '../../types';

export const getSources = async (): Promise<sourceResponse[] | undefined> => {
  try {
    const response = await axiosInstance({
      url: '/sources/',
      method: 'GET',
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
