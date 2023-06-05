import axiosInstance from '../../config/axios';

export const deleteUser = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/users/${id.toString()}`,
      method: 'DELETE',
    });

    return response?.data ? true : false;
  } catch (err) {
    console.log(err);
  }
};
