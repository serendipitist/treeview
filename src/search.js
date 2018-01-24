import { nodes } from './view/tree';
import _ from 'lodash';

export default function search(searchInput) {
  let result;
    if(searchInput.length > 0) {
      result = _.filter(nodes, (item) => item.includes(searchInput.toLowerCase()));
    }
  return result;
}
