import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import Main from './Components/MAINS/Main';
import Footer from './Components/Layout/Footer/Footer';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ForgotPassword from './Components/Auth/ForgotPassword';
import ResetPassword from './Components/Auth/ResetPassword';

function App() {
  return (
  <Router>
    <Routes>

      <Route path = "/" element = {<Home />} />
      <Route path="/Main" element={<Main />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/ForgotPassword' element={<ForgotPassword />} />
      <Route path='/ResetPassword/:token' element={<ResetPassword />} />

    </Routes>

    <Footer />

  </Router> 
  );
}

export default App;
