import fetcher from './fetcher'

export const auth = (
    mode: 'register' | 'login',
    body: { email: string; password: string }
) => {
    return fetcher(`/${mode}`, body)
}

export const updateAccount = (body: any) => {
    return fetcher('/account', body)
}

export const updatePassword = (body: { password: string; email: string }) =>
    fetcher('/password-update', body)
