import type { AxiosRequestConfig } from 'axios';

import axiosInstance from './instance';

class DangolAPIClient {
  async get<T, D = unknown>(url: string, config?: AxiosRequestConfig<D>) {
    const response = await axiosInstance.get<T>(url, config);

    return response.data;
  }

  async post<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
    const response = await axiosInstance.post<T>(url, data, config);

    return response.data;
  }

  async put<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig) {
    const response = await axiosInstance.put<T>(url, data, config);

    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig) {
    const response = await axiosInstance.delete<T>(url, config);

    return response.data;
  }
}

export default new DangolAPIClient();
