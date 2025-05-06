import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import { useState } from 'react';
import PreLoader from './components/PreLoader';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Courses from './pages/courses/Courses';
import Tech from './pages/tech/Tech2';
import Payment from './pages/payment/Payment';

const App = () => {
  const [preloader, setPreloader] = useState(true);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Tech />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/payment/:course' element={<Payment />} />

          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
