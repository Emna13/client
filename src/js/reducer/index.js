import { ADD_USERS, DELETE_USERS, GET_USERS, UPDATE_USERS } from "../const/actionTypes";

const initialState = {
  users: [],
  loading: true,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, loading: false, users: action.payload };
    case ADD_USERS:
      return { ...state, users: [ action.payload,...state.users]};
    case DELETE_USERS:
      return {...state,users:state.users.filter(user=>user._id!==action.payload)}
    case UPDATE_USERS :
      return {...state,users:state.users.map(user=>user._id===action.payload._id ? {...user,...action.payload}:user)}
    default:
      return state;
  }
};

export default userReducer;

