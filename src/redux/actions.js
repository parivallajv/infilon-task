// actions

import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./constants";

export const fetchUsersFailure = (users) => ({
  type: FETCH_USERS_FAILURE,
  users,
});

export const fetchUsersRequest = (loading) => ({
  type: FETCH_USERS_REQUEST,
  loading,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  users,
});

// fetch all users data

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const response = await axios.get("https://reqres.in/api/users?page=1");
    dispatch(fetchUsersSuccess(response?.data?.data));
  } catch (error) {
    dispatch(fetchUsersFailure(error));
  }
};
