import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from './components/grocerylist.js'

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
        </header>
        <GroceryList />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    );
  }
}

export default App;
