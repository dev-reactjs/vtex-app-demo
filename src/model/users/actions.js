import axios from "axios";
import { API_URL } from "../../config";
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_STARTED,
} from "./types";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersStarted());
    axios
      .get(`${API_URL}users`)
      .then((res) => {
        dispatch(fetchUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err.message));
      });
  };
};

const fetchUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

const fetchUsersStarted = () => ({
  type: GET_USERS_STARTED,
});

const fetchUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: {
    error,
  },
});
