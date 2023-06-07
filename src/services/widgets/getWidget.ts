import axiosInstance from '../../config/axios';
import { widgetResponse } from '../../types';

export const getWidget = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/widgets/${id.toString()}`,
      method: 'GET',
    });

    return response.data as widgetResponse;
  } catch (err) {
    console.log(err);
  }
};
