import React, { Component } from 'react';
import '../app.css';
import search from '../search';
import dragAndDrop  from "../drag-drop";

const numberOfChildren = ['child1', 'child11', 'child2', 'child21', 'child22', 'child3', 'child31'];

const nodes = numberOfChildren.slice();
nodes.push('root');

const ChildNodes = (showInSearch) => numberOfChildren.map((item, index) => {
   const value = Number(item.match(/\d+/));
   return (
    value < 9 ? <li key={index}  className="parent-node" draggable="true"><a className={`parent ${showInSearch.showInSearch ? 'search-highlight' : ''} `}>{item}</a></li> :
                                <ul><li draggable="true" key={index}><a className={`leaf ${showInSearch.showInSearch ? 'search-highlight' : ''}`}>{item}</a></li></ul>
  )
})

const Nodes =(handleSearchResult) => {
  const showInSearch = handleSearchResult.handleSearchResult;
  return (
    <div>
     <ul className="tree-container">
        <li key={1000}><a className={`root ${showInSearch ? 'search-highlight' : ''} root-prop`}>Root</a>
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

   componentDidMount() {
    dragAndDrop();
   }

  render() {
    return (
      <div className="tree">
        <Nodes handleSearchResult={this.props.handleSearchResult()} />
      </div>
    );
  }
}

export { Tree , nodes};