import React, { useEffect } from 'react';
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
import ChangPassword from './Components/Profile/ChangPassword';
import UpdateProfile from './Components/Profile/UpdateProfile';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import AdminCourses from './Components/Admin/AdminCourses/AdminCourses';
import CreateCourse from './Components/Admin/CreateCourse/CreateCourse';
import Users from './Components/Admin/Users/Users';
import Header from './Components/Layout/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import toast, {Toaster} from 'react-hot-toast'
import { loadUser } from './REDUX/actions/user';


function App() {

  window.addEventListener("contextmenu", (e)=>{
    e.preventDefault()
  })

  const {isAuthenticated, user, error, message} = useSelector(state=>state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type: 'clearError'})
    }
    if(message){
      toast.error(message);
      dispatch({type: 'clearMessage'})
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
    
  }, [dispatch]);
  
  

  return (
  <Router>
    <Header isAuthenticated={isAuthenticated} user={user} />
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
      <Route path='/ChangePassword' element={<ChangPassword />} />
      <Route path='/UpdateProfile' element={<UpdateProfile />} />

      {/* ADMIN ROUTES */}
      <Route path='/Admin/Dashboard' element={<Dashboard />} />
      <Route path='/Admin/AdminCourses' element={<AdminCourses />} />
      <Route path='/Admin/CreateCourse' element={<CreateCourse />} />
      <Route path='/Admin/Users' element={<Users />} />
      

    </Routes>

    <Footer />

    <Toaster />

  </Router> 
  );
}

export default App;
