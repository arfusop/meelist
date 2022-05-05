import jwt from 'jsonwebtoken'
import cookie from 'cookie'

import { ACCESS_TOKEN, JWT_SECRET } from './constants'

export const decodeToken = () => {
    const cookie = document.cookie.split(';')
    console.log('cookie: ', cookie)
}

export const isSessionActive = () => {
    // parse cookie
    const token = cookie.parse(ACCESS_TOKEN)
    // const isValidSession = jwt.verify(JWT_SECRET)
    // console.log('token: ', token)
    // console.log('isValidSession: ', isValidSession)
    // if expire time is past current time, remove cookie and log user out
    // if not, session is active
}
