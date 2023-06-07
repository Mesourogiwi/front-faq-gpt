import axiosInstance from '../../config/axios';
import { sourceResponse } from '../../types';

export const getWidgetSources = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/widgets/${id.toString()}/sources`,
      method: 'GET',
    });

    return response.data as sourceResponse[];
  } catch (err) {
    console.log(err);
  }
};
