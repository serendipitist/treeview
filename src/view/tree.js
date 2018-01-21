import React, { Component } from 'react';
import '../App.css';


class Tree extends Component {
  render() {
    return (
      <div className="tree">

        <ul>

          <li><a>Parent 1</a></li>

          <li><a>Parent 2</a></li>

          <li> <a>Parent 3</a>

            <ul>
              <li> <a>1st Child of 3</a>

                <ul>

                  <li><a>1st grandchild</a></li>

                  <li><a>2nd grandchild</a></li>

                </ul>

              </li>

              <li><a>2nd Child of 3</a></li>

              <li><a>3rd Child of 3</a></li>

            </ul>

          </li>

          <li> <a>Parent 4</a>
            <ul>

              <li><a>Parent 4's only child</a></li>

            </ul>

          </li>

        </ul>

      </div>
    );
  }
}

export default Tree;
