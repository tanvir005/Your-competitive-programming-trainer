import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Service from './components/Service/Service';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
