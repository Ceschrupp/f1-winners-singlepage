import React, {Component} from 'react'
import'../Styles/Footer.scss'



class Footer extends Component{

    constructor(props) {
      super(props);

    }


	render(){
		return(
      <div>
        <div className="container-fluid footerContainer">
          <div className="row">
              <div className="col-12 footer">
                <p>© 2005-2015 Formula One World Championship Limited</p>
              </div>
          </div>
        </div>
      </div>
		)
	}
}

export default Footer;