import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo_black.png';

const Navbar = () => {

  const [clicked, setClicked] = useState(false)
  const handleClick = ()=>{
    setClicked(!clicked)
  }
  return (
    <nav>
      <div className="container flex justify-space-between align-center">

        <a className="navbar-brand" href="#">
            <img src={Logo} alt="logo" />
        </a>
        
        <div>
          <ul id="primary-menu" className={ (clicked) ? "navbar flex align-center active" : 'navbar flex align-center'}>
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Admission</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item login-btn">
              <a className="nav-link" href="#">Login</a>
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
