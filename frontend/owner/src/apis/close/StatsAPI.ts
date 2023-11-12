import api from '../api';

const StatsAPI = async () => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await api.get(`/api/order-server/orders/stats`, {
      headers: { Authorization: `${accessToken}` },
    });
    //console.log('StatsAPI', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default StatsAPI;
