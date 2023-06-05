import axiosInstance from '../../config/axios';

export const deleteSource = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/sources/${id.toString()}`,
      method: 'DELETE',
    });

    return response?.data ? true : false;
  } catch (err) {
    console.log(err);
  }
};
