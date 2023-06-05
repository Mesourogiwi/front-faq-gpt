import axiosInstance from '../../config/axios';
import { sourceMessagesResponse } from '../../types';

export type updateSourceMessageData = {
  sourceId: number;
  timestamp: string;
  text: string;
};

export const updateSourceMessage = async (
  id: number,
  { sourceId, ...data }: updateSourceMessageData
) => {
  try {
    const response = await axiosInstance({
      url: `/source-messages/${id.toString()}`,
      method: 'PUT',

      data: {
        ...data,
        source: {
          id: sourceId,
        },
      },
    });

    return response?.data as sourceMessagesResponse;
  } catch (err) {
    console.log(err);
  }
};
