import React, { Component } from 'react';
import Header from './Components/Header'
import MainContainer from './Containers/MainContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <MainContainer />
      </div>
    );
  }
}

export default App;
