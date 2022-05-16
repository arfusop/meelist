import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../lib/prisma'
import { isPasswordValid } from '../../utils/validations'
import {
    JWT_SECRET,
    COOKIE_SETTINGS,
    ACCESS_TOKEN,
    TOKEN_EXPIRATION_HOURS
} from '../../utils/constants'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const salt = bcrypt.genSaltSync()
    const { email, password } = req.body

    if (!isPasswordValid(password)) {
        throw new Error('Invalid Password')
    }

    try {
        const user = await prisma.user.update({
            where: {
                email
            },
            data: {
                password: bcrypt.hashSync(password, salt)
            }
        })

        const token = jwt.sign(
            {
                email: user.email,
                id: user.id,
                time: Date.now()
            },
            JWT_SECRET,
            { expiresIn: TOKEN_EXPIRATION_HOURS }
        )

        res.setHeader(
            'Set-Cookie',
            cookie.serialize(ACCESS_TOKEN, token, COOKIE_SETTINGS)
        )

        res.json(user)
    } catch (e) {
        // res.status(401)
        // res.json({ error: e })
        console.log(e)
        throw new Error('Failed to update password')
        // return
    }
}
