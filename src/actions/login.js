import request from '../utils/request';

const PREFIX = '[LOGIN]';

export const LOGIN_REQUEST = `${PREFIX} REQUEST`;
export const LOGIN_SUCCESS = `${PREFIX} SUCCESS`;
export const LOGIN_FAILURE = `${PREFIX} FAILURE`;

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});

export const login = (payload, cb = () => {}) => dispatch => {
  dispatch(loginRequest());

  return request
    .post('auth/jwt/create/', payload)
    .then(({ data }) => {
      dispatch(loginSuccess(data));
      request.setAuthToken(data.token);

      return dispatch(cb());
    })
    .catch(error => dispatch(loginFailure(error)));
};
