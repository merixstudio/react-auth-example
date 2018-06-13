import axios from 'axios';
import request from './utils/request';

class Mock {
  axiosResponseHandlers = []

  constructor() {
    this.request = request;
    this.axios = axios;
  }

  mockResponse() {
    this.axiosResponseHandlers = [...axios.interceptors.response.handlers];
    axios.interceptors.response.handlers = [];

    axios.interceptors.response.use(() => {}, ({ config: { url } = {} } = {}) => {
      let response = {};

      switch (url) {
        case 'http://localhost:8000/api/auth/jwt/create/':
          response = { data: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjA0MjEzMzIzNjEsIm9yaWdfaWF0IjoxNTI4ODg1MjM4OTM0fQ.tC8DOL2T-TO0CG0X9DhzX9yxaIudfiOi-7lfVfunaOY' } };
          break;
        default:
          return Promise.reject();
      }

      return Promise.resolve(response);
    });
  }

  restore() {
    axios.interceptors.response.handlers = [...this.axiosResponseHandlers];
    this.axiosResponseHandlers = [];
  }
}

export default new Mock();
