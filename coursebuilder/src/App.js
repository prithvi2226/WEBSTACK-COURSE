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
import Header from './Components/Layout/Header/Header';
import Request from './Components/Request/Request';
import About from './Components/About/About';

function App() {
  return (
  <Router>
    <Header />
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

    </Routes>

    <Footer />

  </Router> 
  );
}

export default App;
