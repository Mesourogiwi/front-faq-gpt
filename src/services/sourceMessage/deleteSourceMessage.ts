import axiosInstance from '../../config/axios';

export const deleteSourceMessage = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/source-messages/${id.toString()}`,
      method: 'DELETE',
    });

    return response?.data ? true : false;
  } catch (err) {
    console.log(err);
  }
};
