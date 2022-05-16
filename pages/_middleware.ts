import { NextResponse } from 'next/server'

import { ACCESS_TOKEN } from '../utils/constants'
import AUTH_PAGES from '../utils/authPages'

export default function middleware(req) {
    if (AUTH_PAGES.find(page => page === req.nextUrl.pathname)) {
        const token = req.cookies[ACCESS_TOKEN]
        if (!token) {
            return NextResponse.redirect('/')
        }
    }
}
