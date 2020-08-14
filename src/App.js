import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Blog from './Blog';
import firebase from './firebase';
import PastEntries from './PastEntries';

class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
    }
  }

  componentDidMount(){
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      console.log(response.val());
    });
  }

  render(){
    return(
      <div> 
        <Header />
        <Blog />
      </div>
    )
  }
}

export default App;
