import React from 'react';
import { NavLink } from 'react-router-dom';
const LogoutLinks = () => {
  return (

    <div className="collapse navbar-collapse" id="navbarSupportedContent">


      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">

      </button>
      <NavLink className="navbar-brand NavLogo" exact to="/">
        <img src="images/thirdeye-logo.png" alt="logo" />
        <span className="FootersLogoSet FooterLogSet">Third</span>
        <button type="button" className="btn SideBarBtnSet">Register here</button>
      </NavLink>
      <div className="collapse navbar-collapse animate__animated animate__fadeInDown NavMenuListed" id="collapsibleNavbar">
        <ul className="navbar-nav NavMenuList">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to='/about'>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' exact to='/vision'>Our Vision</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' exact to='/partner'>Partner</NavLink>
          </li>
          <li className="nav-item"><NavLink className='nav-link' exact to='/news-portal'>
            News Portal
				      </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/register">Register</NavLink>
          </li>
        </ul>
      </div>

    </div>
  );
}
export default LogoutLinks;