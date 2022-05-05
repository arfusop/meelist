import jwt from 'jsonwebtoken'
import cookie from 'cookie'

import prisma from '../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import {
    JWT_SECRET,
    COOKIE_SETTINGS,
    ACCESS_TOKEN
} from '../../utils/constants'

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     const { email, password } = req.body

//     const token = jwt.sign(
//         {
//             email: user.email,
//             id: user.id,
//             time: Date.now()
//         },
//         JWT_SECRET,
//         { expiresIn: '16h' }
//     )

//     res.setHeader(
//         'Set-Cookie',
//         cookie.serialize(ACCESS_TOKEN, token, COOKIE_SETTINGS)
//     )

//     res.json(user)
// }
