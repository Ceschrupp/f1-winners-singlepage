import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from './AppContext.js';
import { AccountConsumer } from './AppContext.js';
import'../Styles/Main.scss'


class Main extends Component{
	render(){

      const carded = (this.props.context.cards.map((card, index) =>
					<div className="col-md-4 cards">
						<div className="cardsBg">
							<h1>2015</h1>
							<h2>{card.name}</h2>
							<h2>{card.team}</h2>
							<h3>{card.nationality}</h3>
							<h4>{card.points}</h4>
							<h4>{card.wins}</h4>
						</div>
					</div>

                  )
                )		
		return(
			<div className="container cardsContainer">
				<div className="row">
					{carded}
				</div>
			</div>
		)
	}
}

export default React.forwardRef((props, ref) => (
  <AccountConsumer>
    {context => <Main {...props} context={context} ref={ref} />}
  </AccountConsumer>
));