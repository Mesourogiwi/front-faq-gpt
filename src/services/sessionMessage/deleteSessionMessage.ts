import axiosInstance from '../../config/axios';

export const deleteSessionMessage = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/session-messages/${id.toString()}`,
      method: 'DELETE',
      headers: {
        Authorization: import.meta.env.VITE_BEARER_TOKEN,
      },
    });

    return response?.data ? true : false;
  } catch (err) {
    console.log(err);
  }
};
