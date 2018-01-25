import React, { Component } from 'react';
import '../app.css';
import _ from 'lodash';
import search from '../search';
import {dragStart, dragOver, drop}  from "../drag-drop";

const numberOfChildren = ['child1', 'child11', 'child2', 'child21', 'child22', 'child3', 'child31'];

const nodes = numberOfChildren.slice();
nodes.push('root');

const ChildNodes = (showInSearch) => numberOfChildren.map((item, index) => {
   let searchResult = showInSearch.showInSearch;
   const value = Number(item.match(/\d+/));
   return (
    value < 9 ? <li key={value.toString()} className={`${item}item`} id={item}  draggable="true">
                    <a className={`parent ${_.includes(searchResult, item ) ? 'search-highlight' : '' }`}>{item}</a>
                </li> :
                <ul>
                  <li className={` ${item}item `} id={item}  draggable="true" key={value.toString()}>
                     <a className={`leaf ${_.includes(searchResult, item ) ? 'search-highlight' : '' }`}>{item}</a>
                  </li>
                </ul>
  )
})

const Nodes =(handleSearchResult) => {
  const showInSearch = handleSearchResult.handleSearchResult;
  console.log(showInSearch);
  return (
    <div>
     <ul className="tree-container">
        <li key={10}><a className={`root ${_.includes(showInSearch, 'root') ? 'search-highlight' : ''} root-prop`}>Root</a>
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
    var offset_data;
   _.map(numberOfChildren, (item) => {
      const dm = document.getElementById(item)
      dm.addEventListener('dragstart',dragStart,false)
      dm.addEventListener('dragover',dragOver,false)
      dm.addEventListener('drop',drop,false)});
   }

   componentUnMount() {
    _.map(numberOfChildren, (item) => {
      const dm = document.getElementById(item)
      dm.removeEventListener('dragstart',dragStart,false)
      dm.removeEventListener('dragover',dragOver,false)
      dm.removeEventListener('drop',drop,false)});
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