import axios from 'axios';
import { toSnakeCase, toCamelCase } from 'case-converter';

import { getToken, setToken, tokenCloseToExpiry, clearToken } from './jwt';

const BACKEND_URL = 'http://localhost:4000/';

class Request {
  constructor() {
    this.initConfig();
  }

  setToken(token) {
    this.cookieToken = token;
  }

  initConfig() {
    const token = this.cookieToken || getToken();
    const baseURL = `${BACKEND_URL}v1/`;

    if (token) axios.defaults.headers.common.Authorization = `JWT ${token}`;

    axios.defaults.baseURL = baseURL;

    axios.interceptors.request.use(async (config) => {
      if (tokenCloseToExpiry(token)) await this.refreshToken();

      return config.data ? { ...config, data: toSnakeCase(config.data) } : config;
    });

    axios.interceptors.response.use(response => ({
      ...response,
      data: toCamelCase(response.data),
    }), error => Promise.reject(this.parseError(error)));
  }

  clearAuthToken() {
    clearToken();
    axios.defaults.headers.common.Authorization = '';
  }

  async refreshToken() {
    const currentToken = getToken();

    this.clearAuthToken();

    const response = await axios.post('auth/jwt/refresh/', { token: currentToken });

    this.setAuthToken(response.data.token);
  }

  setAuthToken(token) {
    setToken(token);
    axios.defaults.headers.common.Authorization = `JWT ${token}`;
  }

  parseError(error) {
    const { response = {} } = error;

    return {
      ...error,
      response: {
        ...response,
        data: {
          ...toCamelCase(response.data),
          _error: response.data.non_field_errors || '',
        },
      },
    };
  }

  get(...args) {
    return axios.get(...args);
  }

  post(...args) {
    return axios.post(...args);
  }

  options(...args) {
    return axios.options(...args);
  }

  patch(...args) {
    return axios.patch(...args);
  }
}

export default new Request();
