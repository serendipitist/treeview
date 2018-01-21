import React, { Component } from 'react';
import './App.css';
import Tree from './view/tree'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TreeView</h1>
           <form>
            <div>
              <input type="search" name="q"/>
              <button>Search</button>
            </div>
          </form>
        </header>
        <div>
          <Tree/>
        </div>
      </div>
    );
  }
}

export default App;
