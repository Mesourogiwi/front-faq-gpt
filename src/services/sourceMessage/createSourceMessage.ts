import axiosInstance from '../../config/axios';
import { sourceMessagesResponse } from '../../types';

export type createSourceMessageData = {
  sourceId: number;
  timestamp: string;
  text: string;
};

export const createSourceMessage = async ({ sourceId, ...data }: createSourceMessageData) => {
  try {
    const response = await axiosInstance({
      url: '/source-messages/',
      method: 'POST',

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
