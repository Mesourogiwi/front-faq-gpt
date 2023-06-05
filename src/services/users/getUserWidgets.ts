import axiosInstance from '../../config/axios';
import { widgetResponse } from '../../types';

export const getUserWidgets = async (id: number) => {
  try {
    const { data } = await axiosInstance({
      url: `/users/${id.toString()}/widgets`,
      method: 'GET',
    });

    return data as widgetResponse[];
  } catch (err) {
    console.log(err);
  }
};
