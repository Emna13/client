import React, { useState } from "react";
import "./style.css";
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { deleteUsers, updateUsers } from "../../js/actions";
import EditUser from "../modal/EditUser";

const UserCard = ({ user }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-md-4 mt-2">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {user.name} {user.lastName}
          </Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.phone}</Card.Text>
          <Button variant="secondary" onClick={handleShow}>Edit</Button>
          <Button variant="danger" onClick={()=>dispatch(deleteUsers(user._id))}>Delete</Button>
        </Card.Body>
      </Card>
      <EditUser handleClose={handleClose} show={show} user={user}/>
    </div>
  );
};

export default UserCard;
