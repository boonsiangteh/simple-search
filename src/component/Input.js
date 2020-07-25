import React, {  useContext } from 'react'
import _ from 'underscore';
import AppContext from '../context'
import { updateSearchTerm } from '../actions'
import '../css/Input.css'

// so that we don't keep searching if user is still typing
const debounceSearchTerm = _.debounce((term, dispatch) => {
    dispatch(updateSearchTerm(term))
}, 300)

const Input = () => {
    const { dispatch } = useContext(AppContext)
    return (
        <input 
            className='input'
            type='text' 
            autoComplete="on" 
            placeholder="Search name, username or email"
            onChange={(e) => debounceSearchTerm(e.target.value, dispatch)}
        />
    )
}


export default Input