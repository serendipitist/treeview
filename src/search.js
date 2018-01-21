import { nodes } from './view/tree';

export default function search(searchInput) {
  return nodes.toString().includes(searchInput);
}
