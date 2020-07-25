import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import _ from 'underscore'
import { initialState, reducer } from '../reducer'
import AppContext from '../context'
import Input from './Input'
import UserList from './UserList'
import { updateUsers } from '../actions'

const App = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [somethingWrong, setSomethingWrong] = useState(false)
    
    useEffect(()=> {
        (async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                dispatch(updateUsers(res.data))
            } catch (error) {
                // just for debugging
                console.log(error);
                setSomethingWrong(true)
            }
        })()
    },[])

    return(
        <AppContext.Provider value={{ state, dispatch }}>
            <Input/>
            { !somethingWrong ? 
                <UserList/> : 
                <h2 style={{ textAlign: 'center' }}>Opps something went wrong ! Could not fetch users</h2> 
            }
        </AppContext.Provider>
    )
}

export default App