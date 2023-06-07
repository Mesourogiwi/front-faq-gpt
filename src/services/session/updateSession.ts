import axiosInstance from '../../config/axios';
import { sessionResponse } from '../../types';

export type updateSessionData = {
  widgetId: number;
  startDate: string;
  endDate: string;
};

export const updateSession = async (
  id: number,
  { widgetId, startDate, endDate }: updateSessionData
) => {
  try {
    const response = await axiosInstance({
      url: `/sessions/${id.toString()}`,
      method: 'PUT',

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
