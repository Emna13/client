import React, { useState } from "react";
import "./style.css";
import {Button} from "react-bootstrap"
import UserModal from "../modal";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="nav">
      <h1>Contact List</h1>
      <Button variant="light" onClick={handleShow}>
        +
      </Button>
      <UserModal handleClose={handleClose} handleShow={handleShow} show={show}/>
    </div>
  );
};

export default Navbar;
