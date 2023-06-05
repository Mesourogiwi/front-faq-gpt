import axiosInstance from '../../config/axios';
import { sessionResponse } from '../../types';

export const getWidgetSessions = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/widgets/${id.toString()}/sessions`,
      method: 'GET',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
    });

    return response.data as sessionResponse[];
  } catch (err) {
    console.log(err);
  }
};
