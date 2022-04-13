import axiosClient from '../helpers/Interceptor';

export const productApi = {
  getProduct: (params) => {
    return axiosClient.get('/products', { params });
  },
  getById: (id) => {
    return axiosClient.get(`/products/${id}`);
  },
};

export default productApi;
