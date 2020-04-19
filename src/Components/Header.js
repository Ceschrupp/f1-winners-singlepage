import React, {Component} from 'react'
import logo from '../Img/logo192.png'
import'../Styles/Header.scss'



class Header extends Component{

    constructor(props) {
      super(props);

    }


	render(){
		return(
      <div>
        <div className="container-fluid headerContainer">
          <div className="row">
              <div className="col-2 logo">
                <img className="img-fluid" src={logo} alt=""/>
              </div>
              <div className="col-10">
              </div>
          </div>
        </div>
      </div>
		)
	}
}

export default Header;