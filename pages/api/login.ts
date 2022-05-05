import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../lib/prisma'
import {
    JWT_SECRET,
    COOKIE_SETTINGS,
    ACCESS_TOKEN
} from '../../utils/constants'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body

    try {
        const user = await prisma.user.findUnique({
            where: { email }
        })
        const matchingPassword = bcrypt.compare(password, user.password)

        if (!user || !matchingPassword) {
            res.status(401)
            res.json({ error: 'Invalid credentials' })
            return
        }

        const token = jwt.sign(
            {
                email: user.email,
                id: user.id,
                time: Date.now()
            },
            JWT_SECRET,
            { expiresIn: '16h' }
        )

        res.setHeader(
            'Set-Cookie',
            cookie.serialize(ACCESS_TOKEN, token, COOKIE_SETTINGS)
        )

        res.status(200)
        res.json(user)
    } catch (e) {
        res.status(401)
        res.json({ error: 'User already exists' })
        return
    }
}
