import axiosInstance from '../../config/axios';
import { sourceMessagesResponse } from '../../types';

export const getSourceMessage = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/source-messages/${id.toString()}`,
      method: 'GET',
    });

    return response.data as sourceMessagesResponse;
  } catch (err) {
    console.log(err);
  }
};
