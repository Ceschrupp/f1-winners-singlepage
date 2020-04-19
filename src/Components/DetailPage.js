import React, {Component} from 'react';
import AppContext from './AppContext.js';
import { AccountConsumer } from './AppContext.js';
import'../Styles/DetailPage.scss'

class DetailPage extends Component{
	render(){
      const races = (this.props.context.races.map((race, index) =>
						 <tr>
					      <th scope="row">1</th>
					      <td>{race.race}</td>
					      <td>{race.driver}</td>
					      <td>{race.team}</td>
					      <td>{race.nationality}</td>
					      <td>{race.time}</td>
					    </tr>

                  )
                )		
		return(
			<div className="container raceContainer">
				<div className="row">
					<div className="col-12 table-responsive">
						<div className="race">
							<table class="table">
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