import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import DisplayService from './components/DisplayService/DisplayService';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Footer/Footer';
import FourOFour from './components/FourOFour/FourOFour';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services" element={<DisplayService />} />
        <Route path="checkout" element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
