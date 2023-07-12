import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './navbar.css'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="Navcontainer container">
        <div className="logo">
          <h4>Auctux</h4>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* <button className='btn btn-danger'>Back</button> */}
          <span> </span>
            <span id="spanleft"></span>
            <span> </span>
        </div>
        <div className= {`mt-2 nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/items">Houses</NavLink> 
              {/* will be display none  */}
            </li>
            <li>
              <NavLink to="/adminpage">Admin</NavLink> 
              {/* will be display none  */}
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
  )
}

export default Header