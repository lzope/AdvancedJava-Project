import React, { useState } from 'react';
import axios from 'axios';

function CourseSubscriptionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coursePrice: '',
    trainer: '',
    subscriptionDate: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post('http://localhost:8081/api/coursesubscriptions', formData);
        // Optionally, you can add code to handle success, e.g., show a success message or redirect
        console.log('Course subscription created successfully');
      } catch (error) {
        // Handle error, e.g., show an error message
        console.error('Error creating course subscription:', error);
      }
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.coursePrice) {
      errors.coursePrice = 'Course price is required';
      isValid = false;
    } else if (isNaN(formData.coursePrice)) {
      errors.coursePrice = 'Course price must be a number';
      isValid = false;
    }

    if (!formData.trainer.trim()) {
      errors.trainer = 'Trainer is required';
      isValid = false;
    }

    if (!formData.subscriptionDate) {
      errors.subscriptionDate = 'Subscription date is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div className="container">
      <h2>Course Subscription Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Course Price:</label>
          <input
            type="number"
            name="coursePrice"
            value={formData.coursePrice}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.coursePrice && <div className="error">{errors.coursePrice}</div>}
        </div>
        <div className="form-group">
          <label>Trainer:</label>
          <input
            type="text"
            name="trainer"
            value={formData.trainer}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.trainer && <div className="error">{errors.trainer}</div>}
        </div>
        <div className="form-group">
          <label>Subscription Date:</label>
          <input
            type="date"
            name="subscriptionDate"
            value={formData.subscriptionDate}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.subscriptionDate && <div className="error">{errors.subscriptionDate}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CourseSubscriptionForm;
