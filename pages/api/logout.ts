import cookie from 'cookie'

import { NextApiRequest, NextApiResponse } from 'next'
import { COOKIE_SETTINGS, ACCESS_TOKEN } from '../../utils/constants'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader(
        'Set-Cookie',
        cookie.serialize(ACCESS_TOKEN, {}, { ...COOKIE_SETTINGS, maxAge: -1 })
    )

    res.status(200)
    res.json({ message: 'User successfully logged out.' })
}
