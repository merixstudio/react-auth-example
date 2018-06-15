import { GET_ME_SUCCESS } from '../actions/auth';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ME_SUCCESS:
      const { payload: { email, name, role } = {} } = action;

      return {
        ...state,
        currentUser: { email, name, role },
      };
    default:
      return state;
  }
}
