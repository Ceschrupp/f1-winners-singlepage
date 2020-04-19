import React, { Component } from 'react';
import axios from 'axios';

const AppContext = React.createContext()
export const AccountConsumer = AppContext.Consumer

class AppProvider extends Component {

	constructor(props) {

		super(props);


		this.state = {
			apiCall: this.apiCall,
			cards: [],
			loading: true,
			races : [
		        {
		          race: 'Máximo Cozzetti',
		          driver: 'Team',
		          team: 'Argentina',
		          nationality:'10',
		          time: '12'
		        },
		        {
		          race: 'Máximo Cozzetti',
		          driver: 'Team',
		          team: 'Argentina',
		          nationality:'10',
		          time: '12'
		        },
		        {
		          race: 'Máximo Cozzetti',
		          driver: 'Team',
		          team: 'Argentina',
		          nationality:'10',
		          time: '12'
		        },
		        {
		          race: 'Máximo Cozzetti',
		          driver: 'Team',
		          team: 'Argentina',
		          nationality:'10',
		          time: '12'
		        },
		        {
		          race: 'Máximo Cozzetti',
		          driver: 'Team',
		          team: 'Argentina',
		          nationality:'10',
		          time: '12'
		        },
		        {
		          race: 'Máximo Cozzetti',
		          driver: 'Team',
		          team: 'Argentina',
		          nationality:'10',
		          time: '12'
		        },
		        {
		          race: 'Máximo Cozzetti',
		          driver: 'Team',
		          team: 'Argentina',
		          nationality:'10',
		          time: '12'
		        },
		        {
		          race: 'Máximo Cozzetti',
		          driver: 'Team',
		          team: 'Argentina',
		          nationality:'10',
		          time: '12'
		        },
		        {
		          race: 'Máximo Cozzetti',
		          driver: 'Team',
		          team: 'Argentina',
		          nationality:'10',
		          time: '12'
		        },
		        {
		          race: 'Máximo Cozzetti',
		          driver: 'Team',
		          team: 'Argentina',
		          nationality:'10',
		          time: '12'
		        },		        

		      ]					

		}
	}

	componentDidMount(){
		this.apiCall();
	}

	apiCall(){
    	axios.get('https://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55')
		  .then(function (response) {
			this.setState({
				cards: response.data.MRData.StandingsTable.StandingsLists,
				loading: false,
			},);
			
			console.log(response.data.MRData.StandingsTable.StandingsLists)
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