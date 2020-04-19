import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from './AppContext.js';
import { AccountConsumer } from './AppContext.js';
import'../Styles/WinnersInfo.scss'


class WinnersInfo extends Component{
	render(){

      const carded = (this.props.context.cards.map((card, index) =>
					<div className="col-md-4 cards" key={index}>
						<div className="cardsBg">
							<h1>{card.season}</h1>
							<h2>Name: {card.DriverStandings[0].Driver.givenName} {card.DriverStandings[0].Driver.familyName}</h2>
							<h2>Team: {card.DriverStandings[0].Constructors[0].constructorId}</h2>
							<h3>Nationality: {card.DriverStandings[0].Driver.nationality}</h3>
							<h4>Points: {card.DriverStandings[0].points}</h4>
							<h4>Wins: {card.DriverStandings[0].wins}</h4>
						</div>
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