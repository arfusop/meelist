import { validateRoute } from '../../lib/auth'

export default validateRoute(async (req, res, user) => {
    res.json(user)
})
