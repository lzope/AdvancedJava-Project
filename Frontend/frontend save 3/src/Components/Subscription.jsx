import img5 from '../Components/Slider/c.png';
import img6 from '../Components/Slider/c++.jpg';
import img7 from '../Components/Slider/java.png';
import img8 from '../Components/Slider/Asp.net.png';
import img9 from '../Components/Slider/Mysql.jpg';
import img10 from '../Components/Slider/html.jpg';
import img11 from '../Components/Slider/spring.jpeg';
import img12 from '../Components/Slider/python.jpeg';
import img13 from '../Components/Slider/django.png';
import img14 from '../Components/Slider/devops.jpg';
import img15 from '../Components/Slider/SDLC.png';
import img16 from '../Components/Slider/Network.png';
import img17 from '../Components/Slider/random.png';
import Footer from './Footer';
import '../CSS/Subsription.css';
import { Navigationbar } from './Navigationbar';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';




export function Subscription() {
  const navigate = useNavigate();
  
  const handleButtonClick = () =>{
    navigate('/cart')
  }
  const handleButtonClickCourse = () =>{
    navigate('/AddCourse');
  };

  return (
    <>
      <Navigationbar></Navigationbar>

      <Button
  className="justify-content-center mt-5"
  variant="outline-success"
  onClick={handleButtonClickCourse}
  style={{ width: "200px", height: "100px", display: "block", margin: "0 auto" ,fontSize: "25px"}}
>
  Add a Course
</Button>


      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">C</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img5} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>





      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">C++</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img6} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>




      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">Html</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img7} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>



      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">CSS</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img8} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>



      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">Javascript</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img9} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>



      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">Java</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img10} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">C</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img11} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">C</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img13} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">C</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img15} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">C</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img16} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">C</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img17} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-5 container fluid">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative discount-card">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Course</strong>
            <h3 className="mb-0">C</h3>
            <div className="mb-1 text-body-secondary">Duration: 2 Months</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <h1 className="price original-price">₹ 4,000</h1>
            <h1 className="price discounted-price"> <span className="discount-percentage">(-12.5%)</span></h1>
            <button className="add-to-cart-button" onClick={handleButtonClick}>Subscribe me 🤓</button>
          </div>
          <div className="col-auto">
            <img src={img5} alt="Featurette Image" width="300" height="350" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
          </div>
        </div>
      </div>

      <div class="ml-5">
        <img src={img17} alt="Your Image" className="img-fluid" />
      </div>


      <Footer></Footer>
    </>

  );
}