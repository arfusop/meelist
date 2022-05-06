import { NextResponse } from 'next/server'

import { ACCESS_TOKEN } from '../utils/constants'
import authPages from '../utils/authPages'

export default function middleware(req) {
    if (authPages.find(page => page === req.nextUrl.pathname)) {
        const token = req.cookies[ACCESS_TOKEN]
        console.log('token: ', token)
        if (!token) {
            return NextResponse.redirect('/')
        }
    }
}
