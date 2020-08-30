import axios from 'axios';
import publicApis from './publicApis';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const httpClient = axios.create({
  json: true,
  baseURL: `${proxyurl}http://91.201.6.108:3389`,
});

httpClient.interceptors.request.use(
  (config) => {
    const orignalConfig = config;
    const requestUrl = orignalConfig.url;

    if (!publicApis.includes(requestUrl)) {
      const accessToken = localStorage.getItem('access_token'); // TODO we have to work on this code.
      orignalConfig.headers.authorization = `Bearer ${accessToken}`;
    }

    orignalConfig.url = `/ufc/v1${requestUrl}`;

    return orignalConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    /**
     * @see https://github.com/axios/axios#handling-errors
     *
     * error is primarily an instance of `Error`, extended further by Axios.
     * @see https://github.com/axios/axios/blob/master/lib/core/enhanceError.js#L21
     */

    if (error.request) {
      const err = { ...error };
      const data = {
        timestamp: new Date(),
        message: 'Server error',
        errors: {},
        path: err.config.url,
      };
      err.response = { data };
      return Promise.reject(err);
    }
    const err = { ...error };
    const data = {
      timestamp: new Date(),
      message: 'Connection error: check your connection',
      errors: {},
      path: err.config.url,
    };
    err.response = { data };
    return Promise.reject(err);

    return Promise.reject(error);
  }
);

export default httpClient;
