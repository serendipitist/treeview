import { nodes } from './view/tree';
import _ from 'lodash';

var offset_data;

export function dragStart(event) {
  var style = window.getComputedStyle(event.target, null);
  offset_data = (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY);
  event.dataTransfer.setData("text/plain",offset_data);
}

export function dragOver(event) {
    var offset;
    try {
        offset = event.dataTransfer.getData("text/plain").split(',');
    }
    catch(e) {
        offset = offset_data.split(',');
    }
    _.map(nodes, (item, event) => {
      let dm = document.getElementById(item);
      dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
      dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    });
    event.preventDefault();
    return false;
}

export function drop(event) {
  var offset;
    try {
        offset = event.dataTransfer.getData("text/plain").split(',');
    }
    catch(e) {
        offset = offset_data.split(',');
    }
  _.map(nodes, (item) => {
    let dm = document.getElementById(item);
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
  });
  event.preventDefault();
  return false;
}
