import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHeaderContainer from './containers/TodoHeaderContainer'
import TodoListContainer from './containers/TodoListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Redux Todo List App</h2>
        </div>
        <div>
            <TodoHeaderContainer />
            <TodoListContainer />
        </div>
      </div>
    );
  }
}

export default App;
