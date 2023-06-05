import axiosInstance from '../../config/axios';
import { sourceMessagesResponse } from '../../types';

export const getSourceMessage = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/source-messages/${id.toString()}`,
      method: 'GET',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
    });

    return response.data as sourceMessagesResponse;
  } catch (err) {
    console.log(err);
  }
};
