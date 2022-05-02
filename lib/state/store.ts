import { createStore } from 'easy-peasy'
import { setUser } from './actions'

export const store = createStore({
    user: {},
    setUser
})
