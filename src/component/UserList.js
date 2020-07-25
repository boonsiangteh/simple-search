import React, { useContext } from 'react'
import _ from 'underscore'
import AppContext from '../context'
import '../css/UserList.css'

const clickName = (e) => {
    const currentEl = e.target
    currentEl.classList.toggle('active')
    var panel = currentEl.nextElementSibling
    panel.style.display === 'block' ? panel.style.display = 'none' : panel.style.display = 'block'
    panel.style.height ?  panel.style.height = null : panel.style.height = `${panel.scrollHeight}px`
}

const User = ({ user }) => {
    return (
        <div className='user'>
            <button className="accordion" onClick={clickName}>{user.name}</button>
            <div className="panel">
                <h4>{ `Username: ${user.username}`}</h4>
                <h4>{ `Email: ${user.email}`}</h4>
                <h4>{ `Phone: ${user.phone}`}</h4>
                <h4>Address:</h4>
                <ul>
                    <li>{`Street: ${user.address.street}`}</li>
                    <li>{`Suite: ${user.address.suite}`}</li>
                    <li>{`City: ${user.address.city}`}</li>
                    <li>{`Zipcode: ${user.address.zipcode}`}</li>
                </ul>
                <h4>{ `Company Name: ${user.company.name}`}</h4>
                <h4>Website: <a href={user.website} target="_blank">{user.website}</a></h4>
            </div>
        </div>
    )
}

// will render list of users
const UserList = () => {
    const { state } = useContext(AppContext)
    // make case insensitive searching
    const searchTermLowerCase = state.searchTerm.toLowerCase()
    const filteredUsers = state.searchTerm === '' ? 
                        _.map(state.users, (user) => user) :
                        _.chain(state.users)
                         .filter((user) => {
                            return user.name.toLowerCase().includes(searchTermLowerCase) || user.username.toLowerCase().includes(searchTermLowerCase) || user.email.toLowerCase().includes(searchTermLowerCase)
                         })
                         .value()
    const userList = _.map(filteredUsers, (user) => <User key={user.id} user={user} />)
    return(
        <div className='userList'>
            { !_.isEmpty(userList) ? 
                userList : 
                <div style={{ textAlign:'center', margin: 'auto' }}>No Matching Users</div>
            }
        </div>
    )
}

export default UserList