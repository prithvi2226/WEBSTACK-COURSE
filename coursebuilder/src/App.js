import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import toast, { Toaster } from 'react-hot-toast';
import { loadUser } from './REDUX/actions/user';
import { ProtectedRoute } from 'protected-route-react';
import Loader from './Components/Layout/Loader/Loader';

function App() {
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  const { isAuthenticated, user, error, message, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <><Helmet bodyAttributes={{ style: 'background-color : #1A202C' }} /><Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Main" element={<Main />} />

            <Route
              path="/Login"
              element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/Profile">
                <Login />
              </ProtectedRoute>} />

            <Route
              path="/Register"
              element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/Profile">
                <Register />
              </ProtectedRoute>} />

            <Route
              path="/ForgotPassword"
              element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/Profile">
                <ForgotPassword />
              </ProtectedRoute>} />

            <Route
              path="/ResetPassword/:token"
              element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/Profile">
                <ResetPassword />
              </ProtectedRoute>} />

            <Route path="/Contact" element={<Contact />} />
            <Route path="/Request" element={<Request />} />
            <Route path="/About" element={<About />} />

            <Route
              path="/Subscribe"
              element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                <Subscribe user={user} />
              </ProtectedRoute>} />

            <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
            <Route path="/PaymentFail" element={<PaymentFail />} />
            <Route path="*" element={<NotFound />} />

            <Route
              path="/Course/:id"
              element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                <CoursePage user={user} />
              </ProtectedRoute>} />

            <Route
              path="/Profile"
              element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile user={user} />
              </ProtectedRoute>} />

            <Route
              path="/ChangePassword"
              element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                <ChangPassword />
              </ProtectedRoute>} />

            <Route
              path="/UpdateProfile"
              element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                <UpdateProfile user={user} />
              </ProtectedRoute>} />

            {/* ADMIN ROUTES */}
            <Route
              path="/Admin/Dashboard"
              element={<ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === 'admin'}
              >
                <Dashboard />
              </ProtectedRoute>} />

            <Route
              path="/Admin/AdminCourses"
              element={<ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === 'admin'}
              >
                <AdminCourses />
              </ProtectedRoute>} />

            <Route
              path="/Admin/CreateCourse"
              element={<ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === 'admin'}
              >
                <CreateCourse />
              </ProtectedRoute>} />

            <Route
              path="/Admin/Users"
              element={<ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === 'admin'}
              >
                <Users />
              </ProtectedRoute>} />
          </Routes>

          <Footer />
          <Toaster />
        </>
      )}
    </Router></>
  );
}

export default App;
