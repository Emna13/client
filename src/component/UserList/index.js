import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../js/actions";
import UserCard from "../UserCard";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const getAllUsers = () => {
    dispatch(getUsers());
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container-fluid">
      <div className='row'>
        {users.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
