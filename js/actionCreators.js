import { SET_SEARCH_TERM } from './actions'

export function setSearchTerm (searchTerm) {
  // ES6 transforms searchTerm to searchTerm: searchTerm
  return { type: SET_SEARCH_TERM, searchTerm }
}
