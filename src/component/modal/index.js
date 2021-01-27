import React, { useState } from "react";
import {Modal, Form, Button} from "react-bootstrap"
import { useDispatch } from "react-redux";
import { addUsers } from "../../js/actions";

const UserModal = ({handleClose,handelshow,show}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Last Name </Form.Label>
            <Form.Control type="lastName" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
          </Form.Group>
          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();dispatch(addUsers(name,lastName,email,phone))}}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserModal;
