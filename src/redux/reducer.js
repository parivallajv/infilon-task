// reducers

import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action?.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, users: action?.users, error: null };
    case FETCH_USERS_FAILURE:
      return { loading: false, users: [], error: action?.error };
    default:
      return state;
  }
};
