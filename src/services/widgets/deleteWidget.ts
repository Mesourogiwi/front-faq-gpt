import axiosInstance from '../../config/axios';

export const deleteWidget = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/widgets/${id.toString()}`,
      method: 'DELETE',
    });

    return response?.data ? true : false;
  } catch (err) {
    console.log(err);
  }
};
