import React, { Component } from 'react';
import './App.css';
import{
    BrowserRouter as Router,
    Route,Switch
} from 'react-router-dom';

import Books from './Component/Books';
import Login from './Component/Login';


class App extends Component {


  render() {
    return (
      <div className="App">
          <Router>
              <Switch>
              <Route
              path='/books'
              component={Books}/>
              <Route
                  path='/'
                  component={Login}/>
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;



