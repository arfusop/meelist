import { validateRoute } from '../../lib/auth'
// import prisma from '../../lib/prisma'

export default validateRoute(async (req, res, user) => {
    res.json(user)
})
