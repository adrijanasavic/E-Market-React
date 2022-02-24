import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
  );
}

export default App;
