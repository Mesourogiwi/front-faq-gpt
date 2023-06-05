import axiosInstance from '../../config/axios';
import { sourceResponse } from '../../types';

export type createSourceData = {
  widgetId: number;
  channel: string;
};

export const createSource = async ({ widgetId, channel }: createSourceData) => {
  try {
    const response = await axiosInstance({
      url: '/sources/',
      method: 'POST',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
      data: {
        widget: {
          id: widgetId,
        },
        channel,
      },
    });

    return response?.data as sourceResponse;
  } catch (err) {
    console.log(err);
  }
};
