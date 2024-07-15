import {createApi, BaseQueryFn} from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import type {AxiosError, AxiosRequestConfig} from 'axios';

// Define the type for the request options used in Axios requests
export type AxiosRequestOptions = {
  url: string;
  baseURL?: AxiosRequestConfig['baseURL'];
  method?: AxiosRequestConfig['method'];
  params?: AxiosRequestConfig['params'];
  headers?: AxiosRequestConfig['headers'];
};

// Create an Axios instance with default configurations
const instance = axios.create({
  method: 'get',
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json;charset=utf-8',
  },
  timeout: 10000,
  validateStatus: (status: number) => status >= 200 && status < 400,
});

// Define a base query function for Redux Toolkit Query using Axios
const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestOptions> => async requestOptions => {
    try {
      // Make an Axios request with the provided options
      const results = await instance(requestOptions);
      return {
        data: {
          statusCode: results?.status,
          data: results?.data,
        },
      };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };

// Create an API service using Redux Toolkit Query and the base query function
export const api = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}), // it can be module split
});
