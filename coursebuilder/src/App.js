import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import Main from './Components/MAINS/Main';
import Footer from './Components/Layout/Footer/Footer';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ForgotPassword from './Components/Auth/ForgotPassword';
import ResetPassword from './Components/Auth/ResetPassword';
import Contact from './Components/Contact/Contact';
import Request from './Components/Request/Request';
import About from './Components/About/About';
import Subscribe from './Components/Payments/Subscribe';
import PaymentSuccess from './Components/Payments/PaymentSuccess';
import PaymentFail from './Components/Payments/PaymentFail';
import NotFound from './Components/Layout/NotFound/NotFound';
import CoursePage from './Components/CourseDetail/CoursePage';
import Profile from './Components/Profile/Profile';

function App() {

  window.addEventListener("contextmenu", (e)=>{
    e.preventDefault()
  })

  return (
  <Router>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path="/Main" element={<Main />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/ForgotPassword' element={<ForgotPassword />} />
      <Route path='/ResetPassword/:token' element={<ResetPassword />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Request' element={<Request />} />
      <Route path='/About' element={<About />} />
      <Route path='/Subscribe' element={<Subscribe />} />
      <Route path='/PaymentSuccess' element={<PaymentSuccess />} />
      <Route path='/PaymentFail' element={<PaymentFail />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/Course/:id' element={<CoursePage />} />
      <Route path='/Profile' element={<Profile />} />
      



    </Routes>

    <Footer />

  </Router> 
  );
}

export default App;
