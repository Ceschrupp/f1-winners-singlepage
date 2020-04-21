import React, {Component} from 'react';
import { AccountConsumer } from './AppContext.js';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import preload from '../Img/preload.gif'
import'../Styles/DetailPage.scss'

//Detail page for showing the races of each year

class DetailPage extends Component{

	constructor(props) {
		super(props);
		this.racesApiCall = this.racesApiCall.bind(this);
		this.state = {
			races:[],
			loading: true,

		}

	}

	componentDidMount(){
		this.racesApiCall()
	}

	racesApiCall(){
		// api call to recieve the race results using the params

    	axios.get(`https://ergast.com/api/f1/${this.props.match.params.year}/results/1.json`)
		  .then(function (response) {
			this.setState({
                races: response.data.MRData.RaceTable.Races,
                loading: false,
                

            });
			console.log(response)
		  }.bind(this))
		  .catch(function (error) {
		    // handle error
		    console.log(error);
		  }.bind(this))
    }

	render(){

      const races = (this.state.races.map((race, index) =>
						 <tr key={index}>
					      <th scope="row">{index+1}</th>
					      <td>{race.raceName}</td>
					      <td className={(this.props.match.params.winner === race.Results[0].Driver.givenName ? 'winner': '')}>{race.Results[0].Driver.givenName} {race.Results[0].Driver.familyName}</td>
					      <td>{race.Results[0].Constructor.name}</td>
					      <td>{race.Results[0].Driver.nationality}</td>
					      <td>{race.time}</td>
					    </tr>

                  )
                )

         if (this.state.loading) {
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
			<div className="container raceContainer" >
				<div className="row">
					<div className="col-12 backButton">
						<NavLink to='/'><div className="button"><i class="fa fa-caret-left"></i> Back to Winners</div></NavLink>
					</div>
					<div className="col-12 racesTxt">
						<h1>List of all races of {this.props.match.params.year} </h1>
					</div>
					<div className="col-12 table-responsive">
						<div className="race">
							<table className="table table-striped">
							  <thead>
							    <tr>
							      <th scope="col">#</th>
							      <th scope="col">Race</th>
							      <th scope="col">Driver</th>
							      <th scope="col">Team</th>
							      <th scope="col">Nationality</th>
							      <th scope="col">Time</th>
							    </tr>
							  </thead>
							  <tbody>
							  	{races}
							  </tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default React.forwardRef((props, ref) => (
  <AccountConsumer>
    {context => <DetailPage {...props} context={context} ref={ref} />}
  </AccountConsumer>
));