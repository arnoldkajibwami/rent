import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Admin from './Admin';
import { CartProvider } from 'react-use-cart';
import Moreitems from "./Moreitems";
import './App.css'


function App() {

  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/items" element={<Moreitems />} />
          <Route path="/adminpage" element={<Admin />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App

