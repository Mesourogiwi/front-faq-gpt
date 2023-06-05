import axiosInstance from '../../config/axios';
import { widgetResponse } from '../../types';

export const getWidgets = async () => {
  try {
    const response = await axiosInstance({
      url: '/widgets/',
      method: 'GET',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
    });

    return response.data as widgetResponse[];
  } catch (err) {
    console.log(err);
  }
};
