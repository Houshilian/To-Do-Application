import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            To-Do <span> List</span>
          </h1>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
