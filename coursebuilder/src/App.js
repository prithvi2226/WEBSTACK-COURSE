import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import Main from './Components/MAINS/Main';
import Footer from './Components/Layout/Footer/Footer';
import Login from './Components/Auth/Login';

function App() {
  return (
  <Router>
    <Routes>

      <Route path = "/" element = {<Home />} />
      <Route path="/Main" element={<Main />} />
      <Route path='/Login' element={<Login />} />

    </Routes>

    <Footer />

  </Router> 
  );
}

export default App;
