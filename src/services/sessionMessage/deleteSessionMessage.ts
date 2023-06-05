import axiosInstance from '../../config/axios';

export const deleteSessionMessage = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/session-messages/${id.toString()}`,
      method: 'DELETE',
    });

    return response?.data ? true : false;
  } catch (err) {
    console.log(err);
  }
};
