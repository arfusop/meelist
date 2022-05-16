import { validateRoute } from '../../lib/auth'

export default validateRoute(async (req, res, user) => {
    if (res.status > 399 || res.status < 200) {
        throw new Error()
    } else {
        res.json(user)
    }
})
