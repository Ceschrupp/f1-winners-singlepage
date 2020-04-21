import React, {Component} from 'react';
import { AccountConsumer } from './AppContext.js';
import WinnersInfo from './WinnersInfo.js';
import preload from '../Img/preload.gif'
import'../Styles/Main.scss'

//Container for the Home page that calls the WinnersInfo component

class Main extends Component{

	componentDidMount(){

		//running function that comes from the context
		
		this.props.context.winnersApiCall();

	}

	render(){
		if (this.props.context.loading) {
				return(
					<div className="container preloadContainer">
						<div className="row">
							<div className="col-md-12 preload">
								<img src={preload} alt=""/>
								<h3>Loading...</h3>
							</div>
						</div>
					</div>
				)
		}
		return(
			<div className="container mainContainer">
				<div className="row">
					<div className="col-md-12 infoContainer">
						<h1>Formula 1 Season Winners from 2005 to 2015</h1>
						<h3>Click on the season to see the races</h3>
					</div>
				</div>
				<WinnersInfo/>
			</div>
		)
	}
}

export default React.forwardRef((props, ref) => (
  <AccountConsumer>
    {context => <Main {...props} context={context} ref={ref} />}
  </AccountConsumer>
));