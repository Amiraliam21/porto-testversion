import React from 'react';
import logo from '../logo.png';
//react fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="Navbar bg-dark">
    <div className="container"> 
    <nav className="navbar navbar-expand-lg navbar-light ">
<div className="container-fluid">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Mahdevin"/></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto ">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">how work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">contacts</a>
      </li>
    
    </ul>
 
  </div>
</div>
</nav>
</div>
</div>
  )
}

export default Navbar
