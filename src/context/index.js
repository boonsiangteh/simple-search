import { createContext } from 'react'
import { initialState } from '../reducer'

const AppContext = createContext(initialState)

export default AppContext