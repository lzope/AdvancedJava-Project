import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import '../CSS/SignUp.css';
import backgroundVideo from '../Video/SignUpVieo.mp4';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import base_url from "../services/CourseService";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    contactNo: "",
    postalCode: "",
    password: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
    // Clear the error message when the user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(`${base_url}/api/users/`, formData);
        setFormData({
          fullName: "",
          email: "",
          city: "",
          contactNo: "",
          postalCode: "",
          password: ""
        });
        setIsSubmitted(true);
        setRegistrationError(null); // Clear any previous registration errors
        setTimeout(() => {
          setIsSubmitted(false);
          navigate("/log-in");
        }, 1500);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setRegistrationError("Registration failed. Please check your details and try again.");
      }
    }
  };

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formData.fullName.trim()) {
      errors.fullName = "Name is required!";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required!";
    } else if (!regex.test(formData.email)) {
      errors.email = "Invalid email format!";
    }

    if (!formData.city.trim()) {
      errors.city = "City is required!";
    }

    if (!formData.contactNo.trim()) {
      errors.contactNo = "Contact number is required!";
    } else if (!/^\d+$/.test(formData.contactNo)) {
      errors.contactNo = "Invalid contact number!";
    }

    if (!formData.postalCode.trim()) {
      errors.postalCode = "Postal code is required!";
    } else if (!/^\d+$/.test(formData.postalCode)) {
      errors.postalCode = "Invalid postal code!";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required!";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}/.test(formData.password)
    ) {
      errors.password = "Password must contain at least one lowercase character, one uppercase character, one number, one special character, and be at least 8 characters long!";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
          <h2 className="mb-3 mt-5">Registration Form</h2>
          <Form.Group controlId="formName">
            <Form.Label><b>Name:</b></Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={formData.fullName} name="fullName" onChange={handleChange} />
            {formErrors.fullName && <div className="text-danger">{formErrors.fullName}</div>}
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-4">
            <Form.Label><b>Email:</b></Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={formData.email} name="email" onChange={handleChange} />
            {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
          </Form.Group>

          <Form.Group controlId="formCity" className="mt-4">
            <Form.Label><b>City:</b></Form.Label>
            <Form.Control type="text" placeholder="Enter city" value={formData.city} name="city" onChange={handleChange} />
            {formErrors.city && <div className="text-danger">{formErrors.city}</div>}
          </Form.Group>

          <Form.Group controlId="formContactNumber" className="mt-4">
            <Form.Label><b>Contact Number:</b></Form.Label>
            <Form.Control type="text" placeholder="Enter contact number" value={formData.contactNo} name="contactNo" onChange={handleChange} />
            {formErrors.contactNo && <div className="text-danger">{formErrors.contactNo}</div>}
          </Form.Group>

          <Form.Group controlId="formPostalCode" className="mt-4">
            <Form.Label><b>Postal Code:</b></Form.Label>
            <Form.Control type="text" placeholder="Enter postal code" value={formData.postalCode} name="postalCode" onChange={handleChange} />
            {formErrors.postalCode && <div className="text-danger">{formErrors.postalCode}</div>}
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-4">
            <Form.Label><b>Password:</b></Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={formData.password} name="password" onChange={handleChange} />
            {formErrors.password && <div className="text-danger">{formErrors.password}</div>}
          </Form.Group>

          <br />
          <Button variant="primary" type="submit" className="mt-4">
            Register
          </Button>
        </Form>
        <Row className="mt-4">
          <Col lg={4}>
            {isSubmitted && !registrationError ? (
              <Alert variant="success">Registration Successful !!!</Alert>
            ) : null}
            {registrationError ? (
              <Alert variant="danger">{registrationError}</Alert>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
