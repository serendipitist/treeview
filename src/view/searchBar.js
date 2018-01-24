import React, { Component } from 'react';
 import {nodes} from './tree';
 import search from  '../search';

class SearchBar extends Component {
  constructor(props) {
    super(props);
}

  componentDidMount(){
    this.searchInput.focus();
  }

  render() {
    return (
      <form>
        <div>
          <input className="search-bar"
                 ref={(input) => { this.searchInput = input; }}
                 placeholder= "Search in the tree"
                 type="search"
                 onChange={this.props.onInputChange}
                 value={ this.props.searchInput} />
          {/*<button className="search-btn" onClick={this.props.handleClick}>Search</button>*/}
         </div>
      </form>
    );
  }
}

export default SearchBar;