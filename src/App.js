import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import Profile from './pages/Profile';
import Category from './pages/Category';
import Product from './pages/Product';
import Complain from './pages/Complain';
import Complain_admin from './pages/Complain-admin';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail-product/:id" element={<DetailProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/complain-admin" element={<Complain_admin />} />
      </Routes>
  );
}

export default App;
