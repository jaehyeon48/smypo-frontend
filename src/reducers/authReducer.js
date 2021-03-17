import {
  BEGIN_LOAD_USER,
  SUCCESS_LOAD_USER,
  FAIL_LOAD_USER,
  SUCCESS_SIGNUP,
  FAIL_SIGNUP,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPLOAD_AVATAR,
  AVATAR_ERROR,
  UPDATE_USER,
  FAIL_UPDATE_USER
} from '../actions/actionTypes';

const initialState = {
  status: 'initial', // initial, idle, loading, succeeded, failed
  isAuthenticated: false,
  theme: 'light',
  user: {},
  error: ''
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case BEGIN_LOAD_USER:
      return {
        ...state,
        status: 'loading'
      };
    case SUCCESS_LOAD_USER:
      const {
        userId,
        firstName,
        lastName,
        email,
        avatar,
        theme,
        lang,
        currency
      } = payload;
      return {
        ...state,
        status: 'succeeded',
        isAuthenticated: true,
        user: {
          userId,
          firstName,
          lastName,
          email,
          avatar,
          lang,
          currency
        },
        theme: theme,
        error: ''
      };
    case FAIL_LOAD_USER:
      return {
        ...state,
        status: 'failed',
        isAuthenticated: false,
        error: payload
      };
    case SUCCESS_SIGNUP:
    case SUCCESS_LOGIN:
      return {
        ...state,
        status: 'succeeded',
        isAuthenticated: true
      };
    case FAIL_SIGNUP:
    case FAIL_LOGIN:
      return {
        ...state,
        status: 'failed',
        isAuthenticated: false
      };
    case AVATAR_ERROR:
      return {
        ...state,
        status: false,
        isAuthenticated: false
      };
    case LOGOUT_SUCCESS:
      return { ...initialState };
    case LOGOUT_FAIL:
      return {
        ...initialState,
        status: 'failed',
        error: payload
      }
    case UPLOAD_AVATAR:
      return {
        ...state,
        user: {
          ...state.user,
          avatar: payload
        }
      }
    case UPDATE_USER:
    case FAIL_UPDATE_USER:
    default:
      return state;
  }
}