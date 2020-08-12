import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Blog from './blog'

class App extends Component {

  render(){
    return(
    <div className="App">
      <Header />
      <Blog />
    </div>
    )
  }
}

export default App;
