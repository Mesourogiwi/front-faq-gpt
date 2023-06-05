import axiosInstance from '../../config/axios';

export const deleteWidget = async (id: number) => {
  try {
    const response = await axiosInstance({
      url: `/widgets/${id.toString()}`,
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
