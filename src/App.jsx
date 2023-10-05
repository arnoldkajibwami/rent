import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Admin from './Admin';
import { CartProvider } from 'react-use-cart';
import './App.css'
import ItemsDetails from "./ItemsDetail";
import Houses from "./Houses";


function App() {

  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/items" element={<Houses />} />
          <Route path="/adminpage" element={<Admin />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/itemsdetails" element={<ItemsDetails />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App


