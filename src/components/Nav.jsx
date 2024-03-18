import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo_black.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [clicked, setClicked] = useState(false)
  const handleClick = ()=>{
    setClicked(!clicked)
  }
  return (
    <nav>
      <div className="container flex justify-space-between align-center">

        <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="logo" />
        </NavLink>
        
        <div>
          <ul id="primary-menu" className={ (clicked) ? "navbar flex align-center active" : 'navbar flex align-center'}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item login-btn">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
          </ul>
        </div>

        <div id="mobile-menu" onClick={()=> handleClick()}>

            {(clicked) ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
            
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
