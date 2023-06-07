import axiosInstance from '../../config/axios';

export const deleteSession = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/sessions/${id.toString()}`,
      method: 'DELETE',
    });

    return response?.data ? true : false;
  } catch (err) {
    console.log(err);
  }
};
