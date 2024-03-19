// AdminEdit.jsx

import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import '../CSS/SignUp.css';
import { fetchUserById, updateUser } from "../services/AdminService";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import '../CSS/AdminEdit.css';
import { Navigationbar } from "./Navigationbar";

export default function AdminEdit() {
    const navigate = useNavigate();

  const params = useParams();
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userCity: "",
    userContactNumber: "",
    userPostalCode: "",
    userPassword: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await updateUser(formData, params.id);
      console.log(result);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 1500);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const populateUserState = async () => {
    try {
      const result = await fetchUserById(params.id);
      setFormData(result);
      console.log(result.User);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    populateUserState();
  }, []);

 

  function handleClick() {
    setTimeout(() => {
      navigate(`/admin`);
    }, 3000);
  }

  return (
    <>
    <Navigationbar></Navigationbar>
    <Container className="mt-5">
      {formData ? (
        <Form onSubmit={handleSubmit} className="registration-form">
          <h2 className="mb-3 mt-5">Updatation Form</h2>
          <Form.Group controlId="formName">
            <Form.Label><b>Name:</b></Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={formData.userName} name="userName" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-4">
            <Form.Label><b>Email:</b></Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={formData.userEmail} name="userEmail" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formCity" className="mt-4">
            <Form.Label><b>City:</b></Form.Label>
            <Form.Control type="text" placeholder="Enter city" value={formData.userCity} name="userCity" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formContactNumber" className="mt-4">
            <Form.Label><b>Contact Number:</b></Form.Label>
            <Form.Control type="text" placeholder="Enter contact number" value={formData.userContactNumber} name="userContactNumber" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formPostalCode" className="mt-4">
            <Form.Label><b>Postal Code:</b></Form.Label>
            <Form.Control type="text" placeholder="Enter postal code" value={formData.userPostalCode} name="userPostalCode" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-4">
            <Form.Label><b>Password:</b></Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={formData.userPassword} name="userPassword" onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4" onClick={handleClick}>
            Update
          </Button>
        </Form>
      ) : (
        <p>No data found for the given Name!!!</p>
      )}
      <Row className="mt-4">
        <Col lg={4}>
          {isSubmitted ? (
            <Alert variant="success">Your Log is Updated !!!</Alert>
          ) : null}
        </Col>
      </Row>
    </Container>
    </>
  );
}
