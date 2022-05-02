import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

import prisma from '../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import {
    JWT_SECRET,
    COOKIE_SETTINGS,
    ACCESS_TOKEN
} from '../../utils/constants'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const salt = bcrypt.genSaltSync()
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        res.json({ error: 'Missing credentials.' })
    }

    let user

    try {
        user = await prisma.user.create({
            data: {
                email,
                password: bcrypt.hashSync(password, salt)
            }
        })
    } catch (error) {
        res.status(401)
        res.json({ error: 'User already exists' })
    }

    const token = jwt.sign(
        {
            email: user.email,
            id: user.id,
            time: Date.now()
        },
        JWT_SECRET,
        { expiresIn: '8h' }
    )

    res.setHeader(
        'Set-Cookie',
        cookie.serialize(ACCESS_TOKEN, token, COOKIE_SETTINGS)
    )

    res.json(user)
}
