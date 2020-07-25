import { UPDATE_SEARCH_TERM, UPDATE_USERS } from '../def/actionTypes'

export const initialState = {
  searchTerm: '',
  users: []
};

export const reducer = (state, action) =>{
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return {...state, searchTerm: action.payload};
    case UPDATE_USERS:
      return {...state, users: action.payload}
    default:
      return state
  }
}