import { nodes } from './view/tree';

export default function search(searchInput) {
  if(searchInput.length > 0)
  return nodes.toString().includes(searchInput.toLowerCase());
}
