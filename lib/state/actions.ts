import { action } from 'easy-peasy'

export const setUser = action((state: any, payload) => {
    state.user = payload
})
// export const
