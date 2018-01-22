import React, { Component } from 'react';
import '../App.css';
import search from '../search'

const numberOfChildren = ['child1', 'child11', 'child2', 'child21', 'child22', 'child3', 'child31'];

const nodes = numberOfChildren.slice();
nodes.push('root');

const ChildNodes = () => numberOfChildren.map((item, index) => {
   const value = Number(item.match(/\d+/));
   return (
    value < 9 ? <li key={index}><a className="parent">{item}</a></li> :
                                <ul><li key={index}><a className="leaf">{item}</a></li></ul>
  )
})

const Nodes =(showInSearch) => {
  console.log(showInSearch);
  return (
    <div>
     <ul className="tree-container">
        <li key={1000}><a className={`root ${showInSearch.showInSearch ? 'search-highlight' : ''} root-prop`}>Root</a>
          <ul>
            <ChildNodes showInSearch={showInSearch} />
          </ul>
        </li>
      </ul>
    </div>
  )
}


class Tree extends Component {
   constructor(props) {
    super(props);
   }


  render() {
   const showInSearch = this.props.handleSearchResult() === true;
    return (
      <div className="tree">
        <Nodes showInSearch={showInSearch} />
      </div>
    );
  }
}

export { Tree , nodes};