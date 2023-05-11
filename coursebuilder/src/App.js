import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import Main from './Components/MAINS/Main';


function App() {
  return (
  <Router>
    <Routes>

      <Route path = "/" element = {<Home />} />
      <Route path="/Main" element={<Main />} />

    </Routes>
  </Router> 
  );
}

export default App;
