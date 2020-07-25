import { UPDATE_SEARCH_TERM, UPDATE_USERS } from "../def/actionTypes";

// action creator to update search term
export const updateSearchTerm = (term) => ({
    type: UPDATE_SEARCH_TERM,
    payload: term
})

export const updateUsers = (users) => ({
    type: UPDATE_USERS,
    payload: users
})
