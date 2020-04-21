import React, { Component } from 'react';
import axios from 'axios';
import AOS from 'aos';
import '../../node_modules/aos/src/sass/aos.scss'; 

const AppContext = React.createContext()
export const AccountConsumer = AppContext.Consumer

//Context for having access to functions from all the components if needed

class AppProvider extends Component {

	constructor(props) {

		super(props);
		this.winnersApiCall = this.winnersApiCall.bind(this);

		this.state = {
			winnersApiCall: this.winnersApiCall,
			cards: [],
			loading: true,
			winnerName:""
		}
	}

	componentDidMount(){
		//initialization of the Aos for the animation used in the home component
	    AOS.init({
	      duration : 2000
	    })
	}

	winnersApiCall(){
		//api call to get just the years that are needed to show 
		
    	axios.get('https://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55')
		  .then(function (response) {
			this.setState({
				cards: response.data.MRData.StandingsTable.StandingsLists,
				loading: false,
			},);

		  }.bind(this))
		  .catch(function (error) {
		    // handle error
		    console.log(error);
		  }.bind(this))
    }



	render() {

		return( 
			<AppContext.Provider value={this.state}>
			{this.props.children}
			</AppContext.Provider>
		)
	}
}

export default AppProvider;