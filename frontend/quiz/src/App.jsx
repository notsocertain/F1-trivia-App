import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from './utils/PrivateRoutes'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from './components/Header';
import Login from './pages/Login';
import Footer from './components/Footer';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';
import Categories from './pages/Categories';
import Results from './pages/Results';
import Quizz from './pages/Quiz';
import Profile from './pages/Profile'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protect specific routes using a specific path */}
          <Route element={<PrivateRoutes />} path="">
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:category" element={<Quizz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;