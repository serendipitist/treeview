import React, { Component } from 'react';
import './App.css';
import { Tree } from './view/tree';
import { nodes } from './view/tree';
import search from './search';
import SearchBar from './view/searchBar';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSearchResult = this.handleSearchResult.bind(this);
   }

  onInputChange(event) {
    this.setState({
      searchInput: event.currentTarget.value
    });
  }

  handleSearchResult() {
    let result = search(this.state.searchInput);
    if(result) {
      return result;
    }
    else {
      return false;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TreeView</h1>
          <SearchBar searchInput={this.state.searchInput}
                     onInputChange={this.onInputChange}
                     handleClick={this.handleSearchResult} />
         <h4 className="not-found-msg"></h4>
        </header>
        <div>
          <Tree handleSearchResult={this.handleSearchResult} searchInput={this.state.searchInput}/>
        </div>
      </div>
    );
  }
}

export default App;
