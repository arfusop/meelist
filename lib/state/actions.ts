import { action } from 'easy-peasy'

export const setUser = action((state: any, payload) => {
    state.user = payload
})

/**
 * @param {boolean} show
 * @param {string} description
 * @param {'error' | 'success' | 'warning' | 'info'} type
 */
export const setBanner = action((state: any, payload) => {
    state.banner = payload
})
