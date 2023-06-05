import axiosInstance from '../../config/axios';
import { widgetResponse } from '../../types';

export type createWidgetData = {
  userId: number;
  name: string;
};

export const createWidget = async ({ userId, name }: createWidgetData) => {
  try {
    const response = await axiosInstance({
      url: '/widgets/',
      method: 'POST',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
      data: {
        user: {
          id: userId,
        },
        name,
      },
    });

    return response?.data as widgetResponse;
  } catch (err) {
    console.log(err);
  }
};
