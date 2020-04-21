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
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/detail/:year/:winner' component={DetailPage}/>
            <Route path='*' component={Main} exact/>
          </Switch>
         <Footer/> 
        </BrowserRouter>
      </AppContext>
    )
  }
}

export default App;
