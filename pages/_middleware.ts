import { NextResponse } from 'next/server'

import { ACCESS_TOKEN } from '../utils/constants'
import authPages from '../utils/authPages'

export default function middleware(req) {
    console.log(1)
    console.log(authPages)
    if (authPages.find(page => page === req.nextUrl.pathname)) {
        const token = req.cookies[ACCESS_TOKEN]

        if (!token) {
            return NextResponse.redirect('/')
        }
    }
}
