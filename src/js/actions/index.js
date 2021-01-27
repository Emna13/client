import { ADD_USERS, DELETE_USERS, GET_USERS, UPDATE_USERS } from "../const/actionTypes";
import axios from "axios";

export const getUsers = () => (dispatch) => {
  axios
    .get("/api/users")
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => alert("err get"));
};

export const deleteUsers = (id) => (dispatch) => {
  axios
    .delete(`/api/users/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_USERS,
        payload: res.data,
      });
    })
    .catch((err) => alert("err delete"));
};

export const updateUsers = (id, name, lastName, email, phone) => (dispatch) => {
  const newUser = {
    name: name,
    lastName: lastName,
    email: email,
    phone: phone,
  };
  axios
    .put(`/api/users/${id}`, newUser)
    .then((res) => {
      dispatch({
        type: UPDATE_USERS,
        payload: res.data,
      });
    })
    .catch((err) => alert("err update"));
};

export const addUsers = (name, lastName, email, phone) => (dispatch) => {
  const newUser = {
    name: name,
    lastName: lastName,
    email: email,
    phone: phone,
  };
  axios
    .post("/api/add_user", newUser)

    .then((res) => {
      dispatch({
        type: ADD_USERS,
        payload: res.data,
      });
    })
    .catch((err) => alert("err post"));
};
