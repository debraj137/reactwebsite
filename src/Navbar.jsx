import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar=()=>{
    return(
        <React.Fragment>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <NavLink  exact className="navbar-brand" to="/">Coder</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/service">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                  
                </ul>
                
              </div>
            </div>
          </nav>
            </div>
          </div>
        </div>
        
        </React.Fragment>
    );
};
export default Navbar;