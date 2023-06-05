import axiosInstance from '../../config/axios';
import { widgetResponse } from '../../types';

export type updateWidgetData = {
  userId: number;
  name: string;
};

export const updateWidget = async (id: number, { userId, name }: updateWidgetData) => {
  try {
    const response = await axiosInstance({
      url: `/widgets/${id.toString()}`,
      method: 'PUT',
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
