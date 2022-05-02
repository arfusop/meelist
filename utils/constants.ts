export const JWT_SECRET = 'RECIPE_JWT_SECRET'
export const ACCESS_TOKEN = 'RECIPE_ACCESS_TOKEN'
export const COOKIE_SETTINGS = {
    httpOnly: true,
    maxAge: 8 * 60 * 60,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
}
