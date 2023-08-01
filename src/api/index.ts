import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AccessKey } from '../utils/constants';

const BASE_URL = 'http://84.201.188.117:5003/api/v3'; 
const BASE_API_PATH = '/';

export enum queryMethod {
  POST = 'post',
  GET = 'get',
}

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    headers.set('Content-Type', 'application/json');
    headers.set('AccessKey', AccessKey);

    return headers;
  },
});

export const api = createApi({
  reducerPath: BASE_API_PATH,
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
