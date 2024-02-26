import './App.css';
import ApplyForm from './components/ApplyForm';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Generate from './components/Generate';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OtpVerify from './components/OtpVerify';
import LandingPageForApplier from './components/LandingPageForApplier';
import LandingAftConf from './components/LandingAftConf';
import Letter from './components/Letter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/generate' element={<Generate />} />
        <Route path='/about' element={<About />} />
        <Route path='/apply' element={<ApplyForm />} />
        <Route path='/otpverify' element={<OtpVerify />} />
        <Route path='/landingforapplier' element={<LandingPageForApplier />} />
        <Route path='/landingaftconf' element={<LandingAftConf />} />
        <Route path='/letter' element={<Letter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
