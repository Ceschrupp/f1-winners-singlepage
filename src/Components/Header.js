import React from 'react'
import logo from '../Img/logo192.png'
import { NavLink } from 'react-router-dom';
import'../Styles/Header.scss'



function Header(props){

		return(
      <div>
        <div className="container-fluid headerContainer">
          <div className="row">
              <NavLink to="/">
                <div className="col-2 logo">
                  <img className="img-fluid" src={logo} alt=""/>
                </div>
              </NavLink>
              <div className="col-10">
              </div>
          </div>
        </div>
      </div>
		)

}

export default Header;