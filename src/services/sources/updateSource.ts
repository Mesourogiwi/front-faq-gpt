import axiosInstance from '../../config/axios';
import { sourceResponse } from '../../types';

export type updateSourceData = {
  widgetId: number;
  channel: string;
};

export const updateSource = async (id: number, { widgetId, channel }: updateSourceData) => {
  try {
    const response = await axiosInstance({
      url: `/sources/${id.toString()}`,
      method: 'PUT',
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
