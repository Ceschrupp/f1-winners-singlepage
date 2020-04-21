import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { AccountConsumer } from './AppContext.js';
import'../styles/WinnersInfo.scss'

//component for maping the data from the api call

class WinnersInfo extends Component{

	render(){

      const carded = (this.props.context.cards.map((card, index) =>
					<div className="col-md-4 cards" key={index} data-aos='fade-up'>
						<NavLink to={`/detail/${card.season}/${card.DriverStandings[0].Driver.givenName}`}>
							<div className="cardsBg">
								<h1>{card.season}</h1>
								<h2>Name: {card.DriverStandings[0].Driver.givenName} {card.DriverStandings[0].Driver.familyName}</h2>
								<h2>Team: {card.DriverStandings[0].Constructors[0].name}</h2>
								<h3>Nationality: {card.DriverStandings[0].Driver.nationality}</h3>
								<h4>Points: {card.DriverStandings[0].points}</h4>
								<h4>Wins: {card.DriverStandings[0].wins}</h4>
							</div>
						</NavLink>
					</div>

                  )
                )		
		return(
			<div className="row">
				{carded}
			</div>
		)
	}
}

export default React.forwardRef((props, ref) => (
  <AccountConsumer>
    {context => <WinnersInfo {...props} context={context} ref={ref} />}
  </AccountConsumer>
));