
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AboutUs } from './Components/AboutUs.jsx';
import { Home } from './Components/Home.jsx';
import Signup from './Components/SignUp.jsx';
import Login from './Components/Login.jsx';
import { Subscription } from './Components/Subscription.jsx';

import { ContactUs } from './Components/ContactUs.jsx';
import { Admin } from './Components/Admin.jsx';
import AdminEdit from './Components/AdminEdit.jsx';
import C from './Components/C.jsx';
import CPP from './Components/C++.jsx';
import CSS from './Components/CSS.jsx';
import Java from './Components/Java.jsx';
import Html from './Components/Html.jsx';
import Js from './Components/Js.jsx';
import CourseSubscriptionForm from './Components/CourseSubscriptionForm.jsx';
import AddCourse from './Components/AddCourse.jsx';
import ViewCourses from './Components/ViewCourses.js';
import CourseEdit from './Components/CourseEdit.jsx';
import Sidebar from './Components/Sidebar.jsx';

// import Footer from './Components/Footer.jsx';


function App() {
  return (
   <BrowserRouter>
   
   <Routes>
    {/* <Route path="/" element={<Navigationbar/>}></Route> */}
    <Route path="/" element={<Home />}></Route>
    <Route path="/AboutUs" element={<AboutUs />}></Route>
    <Route path="/sign-up" element={<Signup />}></Route>
    <Route path="/log-in" element={<Login />}></Route>
    <Route path="/subscription" element={<Subscription/>}></Route>
    <Route path="/contactus" element={<ContactUs/>}></Route> 
    <Route path="/C" element={<C/>}></Route>
    <Route path="/CPP" element={<CPP/>}></Route>
    <Route path="/CSS" element={<CSS/>}></Route>
    <Route path="/Java" element={<Java/>}></Route>
     <Route path="/Html" element={<Html/>}></Route> 
     <Route path="/Js" element={<Js/>}></Route>
     <Route path='/cart' element={<CourseSubscriptionForm/>}></Route>
    <Route path="/Sidebar" element={<Sidebar/>}></Route>
    <Route path='/admin/edit/:id' element={<AdminEdit/>}></Route>
    <Route path='/AddCourse' element={<AddCourse/>}></Route>
    <Route path='/ViewCourses' element={<ViewCourses/>}></Route>
    <Route path='/ViewCourses/edit/:id' element={<CourseEdit/>}></Route>
   </Routes>
   {/* <Footer></Footer> */}
   </BrowserRouter>
  );
}


export default App;
