import { createStore } from 'easy-peasy'
import { setUser, setBanner } from './actions'

export const store = createStore({
    user: {},
    banner: {},
    setUser,
    setBanner
})
