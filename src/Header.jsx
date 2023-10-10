import { useState, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Fragment>

      <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <div className="Navcontainer container">
          <div className="logo">
            <NavLink to="/home" style={{ textDecoration: "none" }}><h4>RentHouse</h4></NavLink>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {/* <button className='btn btn-danger'>Back</button> */}
            <span> </span>
            <span id="spanleft"></span>
            <span> </span>
          </div>
          <div className={`mt-2 nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/items">Houses</NavLink>
                {/* will be display none  */}
              </li>
              {/* <li>
              <NavLink to="/adminpage">Admin</NavLink> 
            </li> */}
              <li>
                <NavLink to="/cars">Cars</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>

  )
}

export default Header