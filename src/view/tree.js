import React, { Component } from 'react';
import '../App.css';

const numberOfChildren = [0 ,1, 11, 2, 21, 22, 3, 31];

const ChildNodes = () => numberOfChildren.map((number, index) => {
   const value = number.toString();
   return (value.length === 1 ? <li key={index}><a className="parent">child{number}</a></li> :
                                <ul><li key={index}><a className="leaf">child{number}</a></li></ul>
  )
})


const Nodes =() => {
  return (
    <div>
     <ul className="tree-container">
        <li key={0}><a className="root root-prop">Root</a>
          <ul>
            <ChildNodes />
          </ul>
        </li>
      </ul>
    </div>
  )
}


class Tree extends Component {
  render() {
    return (
      <div className="tree">
        <Nodes/>
      </div>
    );
  }
}

export { Tree , numberOfChildren as nodes};