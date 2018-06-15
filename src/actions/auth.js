import { SubmissionError } from 'redux-form';

import request from '../utils/request';

const PREFIX = '[AUTH]';

export const LOGIN_REQUEST = `${PREFIX} LOGIN_REQUEST`;
export const LOGIN_SUCCESS = `${PREFIX} LOGIN_SUCCESS`;
export const LOGIN_FAILURE = `${PREFIX} LOGIN_FAILURE`;

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const login = payload => dispatch => {
  dispatch(loginRequest());

  return request
    .post('auth/jwt/create/', payload)
    .then(({ data: { token } = {} }) => {
      dispatch(loginSuccess());
      request.setAuthToken(token);

      return dispatch(getMe());
    })
    .catch(({ response: { data } = {} }) => {
      dispatch(loginFailure());

      throw new SubmissionError(data);
    });
};

export const GET_ME_REQUEST = `${PREFIX} GET_ME_REQUEST`;
export const GET_ME_SUCCESS = `${PREFIX} GET_ME_SUCCESS`;
export const GET_ME_FAILURE = `${PREFIX} GET_ME_FAILURE`;

const getMeRequest = () => ({
  type: GET_ME_REQUEST,
});

const getMeSuccess = payload => ({
  type: GET_ME_SUCCESS,
  payload,
});

const getMeFailure = () => ({
  type: GET_ME_FAILURE,
});

export const getMe = () => dispatch => {
  dispatch(getMeRequest());

  return request
    .post('auth/me/')
    .then(({ data }) => dispatch(getMeSuccess(data)))
    .catch(error => {
      dispatch(getMeFailure());

      throw error;
    });
};
