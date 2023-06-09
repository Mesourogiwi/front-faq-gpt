import axiosInstance from '../../config/axios';
import { sourceMessagesResponse } from '../../types';

export const getSourceMessages = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/sources/${id.toString()}/messages`,
      method: 'GET',
    });

    return response.data as sourceMessagesResponse[];
  } catch (err) {
    console.log(err);
  }
};
