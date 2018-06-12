import request from '../utils/request';

const PREFIX = '[GET_MY_USER]';

export const GET_MY_USER_REQUEST = `${PREFIX} REQUEST`;
export const GET_MY_USER_SUCCESS = `${PREFIX} SUCCESS`;
export const GET_MY_USER_FAILURE = `${PREFIX} FAILURE`;

const getMyUserRequest = () => ({
  type: GET_MY_USER_REQUEST,
});

const getMyUserSuccess = payload => ({
  type: GET_MY_USER_SUCCESS,
  payload,
});

const getMyUserFailure = error => ({
  type: GET_MY_USER_FAILURE,
  error,
});

export const getMyUser = () => dispatch => {
  dispatch(getMyUserRequest());

  return request
    .post('auth/me/')
    .then(({ data }) => dispatch(getMyUserSuccess(data)))
    .catch(error => dispatch(getMyUserFailure(error)));
};
