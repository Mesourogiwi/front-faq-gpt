import axiosInstance from '../../config/axios';
import { widgetResponse } from '../../types';

export const getWidgets = async () => {
  try {
    const response = await axiosInstance({
      url: '/widgets/',
      method: 'GET',
    });

    return response.data as widgetResponse[];
  } catch (err) {
    console.log(err);
  }
};
