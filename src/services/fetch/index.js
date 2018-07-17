import axios from 'axios';

import { onRequest, onRequestError } from './requestInterceptor';
import { onResponse, onResponseError } from './responseInterceptor';
import env from '../../../env';

/**
 * Read more on creating custom axios instance here:
 * https://github.com/axios/axios#creating-an-instance
 */
const fetch = axios.create({
  baseURL: env.base_url,
  timeout: env.endpoint_timeout,
});

fetch.interceptors.request.use(onRequest, onRequestError);
fetch.interceptors.response.use(onResponse, onResponseError);

export default fetch;
