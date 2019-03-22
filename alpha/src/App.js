import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from '../src/Component/Header';
import Main from '../src/Component/Main';
import Footer from '../src/Component/Footer';
import Aside from '../src/Component/Aside'

class App extends Component {

    state={
      counter:0,
    }
     ctr=(str)=>{
       this.state.counter+=1;
       this.setState({
         counter:this.state.counter,
       });
    }

  
  render(){
    return (
      <div className="App">
        <Header num={this.state.counter}/>
        <Main toChild={this.ctr}/>
        <Aside/>
        <Footer/>
      </div>
    );
  }
}

export default App;
