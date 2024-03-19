import { Carousel, Row } from "react-bootstrap";
import img1 from '../Components/Slider/1.jpg';
import img2 from '../Components/Slider/2.jpg';
import img3 from '../Components/Slider/3.jpg';
import img4 from '../Components/Slider/4.jpg';
import img5 from '../Components/Slider/c.png';
import img6 from '../Components/Slider/c++.jpg';
import img7 from '../Components/Slider/java.png';
import img8 from '../Components/Slider/Asp.net.png';
import img9 from '../Components/Slider/Mysql.jpg';
import img10 from '../Components/Slider/html.jpg';
import img11 from '../Components/Slider/random.png';
import img12 from '../Components/Slider/spring.jpeg';
import img13 from '../Components/Slider/python.jpeg';
import img14 from '../Components/Slider/django.png';
import img15 from '../Components/Slider/devops.jpg';
import img16 from '../Components/Slider/SDLC.png';
import img17 from '../Components/Slider/Network.png';
import '../CSS/Home.css';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Navigationbar } from "./Navigationbar";



export function Home() {

  return (
    <>
      <Navigationbar></Navigationbar>

      {/* <div class="header-quote-container">
                <div class="header-quote">
                    <p class="quote-text">
                        "The more that you read, the more things you will know."
                    </p>
                </div>
            </div> */}


      <div class="header-quote-container">
        <div class="header-quote">
          <p class="quote-text" id="colorChangingText">
            "The more that you read, the more things you will know."
          </p>
        </div>
      </div>


      <Carousel>
        <Carousel.Item>
          <img src={img1} alt="First slide" className="d-block w-100 img-fluid" />
          <Carousel.Caption>
            <h3>Back To School</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={img2} alt="Second slide" className="d-block w-100 img-fluid" />
          <Carousel.Caption>
            <h3>Back To School</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={img3} alt="Third slide" className="d-block w-100 img-fluid" />
          <Carousel.Caption>
            <h3>Back To School</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={img4} alt="Third slide" className="d-block w-100 img-fluid" />
          <Carousel.Caption>
            <h3>Back To School</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      {/* 1st course */}
      <Row>
        <div class="col-md-4 mt-5 ">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="C">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">C</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto ">
              <img src={img5} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>


        <div class="col-md-4 mt-5 ">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="CPP">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">C ++ </h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto">
              <img src={img6} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>




        <div class="col-md-4 mt-5">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="Java">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">Java </h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto ">
              <img src={img7} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>
      </Row>

      {/* 2nd courese */}
      <Row>
        <div class="col-md-4">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="Asp">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">ASP . Net</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto ">
              <img src={img8} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>



        <div class="col-md-4">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="MySql">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">My Sql</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto ">
              <img src={img9} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>



        <div class="col-md-4 ">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="HTML">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">HTML CSS</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto ">
              <img src={img10} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>
      </Row>


      {/* 3rd courese */}
      <Row>
        <div class="col-md-4">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="Asp">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">Spring</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto ">
              <img src={img12} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>



        <div class="col-md-4">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="MySql">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">Python</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto ">
              <img src={img13} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>



        <div class="col-md-4 ">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="HTML">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">Django</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto ">
              <img src={img14} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>
      </Row>


      {/* 4th courese */}
      <Row>
        <div class="col-md-4">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="Asp">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">Devops</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto ">
              <img src={img15} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>



        <div class="col-md-4">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="MySql">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">SDLC</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto ">
              <img src={img16} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>



        <div class="col-md-4 ">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="HTML">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Course</strong>
              <h3 class="mb-0">Network</h3>
              <div class="mb-1 text-body-secondary">Duration : 2 Months</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/subscription" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg class="bi">
                </svg>
              </Link>
            </div>
            <div class="col-auto ">
              <img src={img17} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
            </div>
          </div>
        </div>
      </Row>



      <table border="4" class="mt-5 container fluid">
        <h1 class="Key" >KEY SUPPORTERS</h1>

        <div class="supporter-container ">
          <div class="supporter grey-background">
            <p style={{ fontSize: '50px' }}>🏦</p>
            <h3>Bank of America</h3>
          </div>

          <div class="supporter grey-background">
            <p style={{ fontSize: '50px' }}>📱</p>
            <h3>SamSung</h3>
          </div>

          <div class="supporter grey-background">
            <p style={{ fontSize: '50px' }}>🏭</p>
            <h3>TATA</h3>
          </div>

          <div class="supporter grey-background">
            <p style={{ fontSize: '50px' }}>⚙</p>
            <h3>Hitachi</h3>
          </div>

          <div class="supporter grey-background">
            <p style={{ fontSize: '50px' }}>🌐</p>
            <h3>Google</h3>
          </div>

          <div class="supporter grey-background">
            <p style={{ fontSize: '50px' }}>🍫</p>
            <h3>Nestle</h3>
          </div>

          <div class="supporter grey-background">
            <p style={{ fontSize: '50px' }}> 🏎</p>
            <h3>volkswagen</h3>
          </div>

          <div class="supporter grey-background">
            <p style={{ fontSize: '50px' }}>👕</p>
            <h3>Jack & Jones</h3>
          </div>
        </div>



      </table>


      <div>
        <img src={img11} alt="Your Image" className="img-fluid" />
      </div>

      
      <Footer></Footer>
    </>



  );
}