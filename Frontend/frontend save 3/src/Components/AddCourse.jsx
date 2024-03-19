import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../services/CourseService";
import { useNavigate, useParams } from "react-router-dom";
import { Navigationbar } from "./Navigationbar";

function AddCourse() {
  const navigate = useNavigate();
  const params = useParams();
  const [course, setCourse] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // To store the selected image file
  
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageName: "",
    date: ""
  });    

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add other course data to FormData
      const data = new FormData();
      Object.entries(course).forEach(([key, value]) => data.append(key, value));

      // Add the selected image file (if any) to FormData
      if (selectedImage) {
        data.append('courseImage', selectedImage);
      }

      const result = await postCourse(data); 
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  // Function to handle image file selection
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the first selected file
    if (selectedFile) {
      setSelectedImage(selectedFile); // Update the state with the selected file
    }
  };

  
  // Function to post data on server
function postCourse(data) {
  axios.post(`${base_url}/api/courses`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(
    (response) => {
      console.log(response);
      console.log("Success");
      toast.success("Course added successfully.");
    },
    (error) => {
      console.log(error);
      console.log("Error");
      toast.error("Error adding course.");
    }

  );
}
function handleClick() {
    setTimeout(() => {
      navigate(`/ViewCourses`);
    }, 3000);
  }

  return (
    <>
    <Navigationbar></Navigationbar>
 <Container className=" justify-content-center mt-5">
      <Row className="justify-content-center">
        <Col sm={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">Add Course</h3>

            <FormGroup>
              <Label for="title">Course Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                onChange={(e) => {
                  setCourse({ ...course, title: e.target.value });
                }}
                placeholder="Enter course title"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="content">Content</Label>
              <Input
                type="textarea"
                name="content"
                id="content"
                onChange={(e) => {
                  setCourse({ ...course, content: e.target.value });
                }}
                placeholder="Enter course content"
                rows={4}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="imageName">Course Image</Label>
              <Input
                type="file"
                name="imageName"
                id="imageName"
                onChange={handleImageChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                type="date"
                id="dateInput"
                value={formData.date}
                name="date"
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </FormGroup>

            <div className="d-flex justify-content-between mt-3">
              <Button color="primary" type="submit" >
                Add Course
              </Button>
              <Button type="submit" color="secondary" onClick={handleClick}>
                View Courses
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>







    </>

  );
}

export default AddCourse;
