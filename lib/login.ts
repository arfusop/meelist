import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

import prisma from './prisma'
import { ACCESS_TOKEN, JWT_SECRET } from '../utils/constants'

export const validateRoute = handler => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const token = req.cookies[ACCESS_TOKEN]

        if (token) {
            let user
            try {
                const { id } = jwt.verify(token, JWT_SECRET)
                user = await prisma.user.findUnique({
                    where: { id }
                })

                if (!user) {
                    throw new Error('Invalid user')
                }
            } catch (error) {
                res.status(401)
                res.json({ error: 'Not Authorized' })
                return
            }
            return handler(req, res, user)
        }
        res.status(401)
        res.json({ error: 'Not Authorized' })
    }
}

export const validateToken = token => {
    const user = jwt.verify(token, JWT_SECRET)
    return user
}
