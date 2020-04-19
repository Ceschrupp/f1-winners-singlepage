import React, {Component} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContext from './AppContext.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import DetailPage from './DetailPage.js';

class App extends Component{
  render(){
    return(
      <AppContext>
        <Header/>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/detailPage' component={DetailPage}/>
          </Switch>
        </BrowserRouter>
        <Footer/>
      </AppContext>
    )
  }
}

export default App;
