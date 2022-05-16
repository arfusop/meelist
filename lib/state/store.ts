import { createStore } from 'easy-peasy'
import { setUser, setBanner } from './actions'

export const store = createStore({
    user: null,
    banner: {},
    setUser,
    setBanner
})
