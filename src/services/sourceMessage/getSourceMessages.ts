import axiosInstance from '../../config/axios';
import { sourceMessagesResponse } from '../../types';

export const getSourceMessages = async () => {
  try {
    const response = await axiosInstance({
      url: '/source-messages/',
      method: 'GET',
    });

    return response.data as sourceMessagesResponse[];
  } catch (err) {
    console.log(err);
  }
};
