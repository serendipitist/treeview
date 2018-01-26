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
      notFoundMsg: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSearchResult = this.handleSearchResult.bind(this);
   }

  onInputChange(event) {
    this.setState({
      searchInput: event.currentTarget.value
    });
  }

  handleSearchResult(event) {
    let result;
    result = search(this.state.searchInput);
    return result;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TreeView</h1>
          <SearchBar searchInput={this.state.searchInput}
                     onInputChange={this.onInputChange}
                     handleClick={this.handleSearchResult} />
          {this.handleSearchResult() == false && <h4>Result Not Found</h4>}
        </header>
        <div>
           <h4 className="msg"> Tree can be draggable </h4>
          <Tree handleSearchResult={this.handleSearchResult} searchInput={this.state.searchInput}/>
        </div>
      </div>
    );
  }
}

export default App;
