import React, { useRef, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CSS1 from '../Video/CSS1.mp4';

import '../CSS/HTML.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigationbar } from './Navigationbar';



export function CSS() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying);
    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
        requestFullScreen(video); // Request full-screen mode after clicking "Play"
      }
    }
  };

  const requestFullScreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  return (
    <>
    <Navigationbar></Navigationbar>
    <Container >
      <div id="boom" className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">The Complete CSS From Zero to Hero in CSS</h3>
            <br />
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <br />
            <h5 className="card-text mb-auto">
              Learn CSS like a Professional. Start from the basics and go all the way to creating your own applications
            </h5>
          </div>
          <div className="col-auto">
            <video width="300" height="350" controls>
              <source src={CSS1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className='ml-5'>
        <Row className='mt-5 ml-3'  >
        <Col lg={4}>
      <Card style={{ width: '20rem' }}>
        <video ref={videoRef} width="300" height="350" controls>
          <source src={CSS1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handlePlayButtonClick}>
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </Card.Body>
      </Card>
      </Col>
      <Col lg={4}>
      <Card style={{ width: '20rem' }}>
        <video ref={videoRef} width="300" height="350" controls>
          <source src={CSS1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handlePlayButtonClick}>
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </Card.Body>
      </Card>
      </Col>
      <Col lg={4}>
      <Card style={{ width: '20rem' }}>
        <video ref={videoRef} width="300" height="350" controls>
          <source src={CSS1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handlePlayButtonClick}>
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </Card.Body>
      </Card>
      </Col>
      
      </Row>
      <Row className='mt-5'>
        <Col lg={4}>
      <Card style={{ width: '20rem' }}>
        <video ref={videoRef} width="300" height="350" controls>
          <source src={CSS1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handlePlayButtonClick}>
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </Card.Body>
      </Card>
      </Col>
        <Col lg={4}>
      <Card style={{ width: '20rem' }}>
        <video ref={videoRef} width="300" height="350" controls>
          <source src={CSS1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handlePlayButtonClick}>
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </Card.Body>
      </Card>
      </Col>
      <Col lg={4}>
      <Card style={{ width: '20rem' }}>
        <video ref={videoRef} width="300" height="350" controls>
          <source src={CSS1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handlePlayButtonClick}>
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </div>
      <div className="ml-5">
        {/* Add your other content or components here */}
      </div>
      </Container>
    </>
  );
}

export default CSS;