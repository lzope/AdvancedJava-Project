import React, { useState } from 'react';
import { Form, Button, Col, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../Video/LoginVideo.mp4';
import '../CSS/Login.css';
import { login } from '../services/AuthService';


const Login = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' });
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const errors = validate(formValues);
            setFormErrors(errors);
            if (Object.keys(errors).length === 0) {
                const result = await login(formValues);
                console.log(result);
                if (result === 'Login successful!') {
                    alert("Login Succesfully")
                    navigate('/');
                } else {
                    alert("Invalid Credentials")
                    console.log('Login failed:', result);
                }
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };


    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email is required!';
        } else if (!isValidEmail(values.email)) {
            errors.email = 'Invalid email format!';
        }
        if (!values.password) {
            errors.password = 'Password is required!';
        }
        return errors;
    };

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return regex.test(email);
    };

    return (

        <>
            <video autoPlay muted loop id="myVideo">
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <Row className="justify-content-center mt-5">
                <Col md={6}>
                    <div className="back">
                        <h1 className="text-center mb-4">Please Login Here!!!</h1>
                    </div>
                    <div className="container-login">
                        <div className="form-container-login">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        isInvalid={!!formErrors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                        isInvalid={!!formErrors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">{formErrors.password}</Form.Control.Feedback>
                                </Form.Group>
                                <Button variant="primary" type="submit" block>
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </div>

                </Col>
            </Row>
        </>
    );

};

export default Login;