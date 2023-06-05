import axiosInstance from '../../config/axios';
import { sessionResponse } from '../../types';

export type createSessionData = {
  widgetId: number;
  startDate: string;
  endDate: string;
};

export const createSession = async ({ widgetId, startDate, endDate }: createSessionData) => {
  try {
    const response = await axiosInstance({
      url: '/sessions/',
      method: 'POST',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
      data: {
        widget: {
          id: widgetId,
        },
        startDate,
        endDate,
      },
    });

    return response?.data as sessionResponse;
  } catch (err) {
    console.log(err);
  }
};
