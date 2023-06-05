import axiosInstance from '../../config/axios';
import { widgetResponse } from '../../types';

export const getUserWidgets = async (id: number) => {
  try {
    const { data } = await axiosInstance({
      url: `/users/${id.toString()}/widgets`,
      method: 'GET',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
    });

    return data as widgetResponse[];
  } catch (err) {
    console.log(err);
  }
};
