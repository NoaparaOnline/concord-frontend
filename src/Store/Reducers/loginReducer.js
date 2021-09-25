import {logInConstants} from '../Constants/loginConstant';

const initialState = {
    user: null,
    userRole : ''
  };

  export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case logInConstants.LOGIN_IN:
            return { ...state, user: payload };
        case logInConstants.USER_TYPE:
            return { ...state, userRole: payload };
        case logInConstants.LOG_OUT_USER:
              return { ...state, user: payload };
        case logInConstants.GET_USER_FROM_LOCAL:
                return { ...state, user: payload };
      default:
        return state;
    }
  };