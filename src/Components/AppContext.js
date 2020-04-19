import React, { Component } from 'react';
import axios from 'axios';

const AppContext = React.createContext()
export const AccountConsumer = AppContext.Consumer

class AppProvider extends Component {

	constructor(props) {

		super(props);

		this.state = {

			cards : [
		        {
		          name: 'Máximo Cozzetti',
		          team: 'Team',
		          nationality: 'Argentina',
		          points:'10',
		          wins: '12'
		        },
		        {
		          name: 'Máximo Cozzetti',
		          team: 'Team',
		          nationality: 'Argentina',
		          points:'10',
		          wins: '12'
		        },
		        {
		          name: 'Máximo Cozzetti',
		          team: 'Team',
		          nationality: 'Argentina',
		          points:'10',
		          wins: '12'

		        },
		        {
		          name: 'Máximo Cozzetti',
		          team: 'Team',
		          nationality: 'Argentina',
		          points:'10',
		          wins: '12'
		        },
		        {
		          name: 'Máximo Cozzetti',
		          team: 'Team',
		          nationality: 'Argentina',
		          points:'10',
		          wins: '12'

		        },
		        {
		          name: 'Máximo Cozzetti',
		          team: 'Team',
		          nationality: 'Argentina',
		          points:'10',
		          wins: '12'

		        },
		    	{
		          name: 'Máximo Cozzetti',
		          team: 'Team',
		          nationality: 'Argentina',
		          points:'10',
		          wins: '12'

		        },
		        {
		          name: 'Máximo Cozzetti',
		          team: 'Team',
		          nationality: 'Argentina',
		          points:'10',
		          wins: '12'

		        },
		        {
		          name: 'Máximo Cozzetti',
		          team: 'Team',
		          nationality: 'Argentina',
		          points:'10',
		          wins: '12'

		        },
		        {
		          name: 'Máximo Cozzetti',
		          team: 'Team',
		          nationality: 'Argentina',
		          points:'10',
		          wins: '12'

		        },		        

		      ],	
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


	render() {

		return( 
			<AppContext.Provider value={this.state}>
			{this.props.children}
			</AppContext.Provider>
		)
	}
}

export default AppProvider;