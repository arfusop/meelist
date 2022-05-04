import jwt from 'jsonwebtoken'

import { ACCESS_TOKEN } from './constants'

export const decodeToken = () => {
    const cookie = document.cookie.split(';')
    console.log('cookie: ', cookie)
}
