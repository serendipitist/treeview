import { nodes } from './view/tree';

export default function search(searchInput) {
  if(searchInput == '' || null) return 'none';
  return nodes.toString().includes(searchInput.toLowerCase());
}
