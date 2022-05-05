import fetcher from './fetcher'

export const auth = (
    mode: 'register' | 'login',
    body: { email: string; password: string }
) => {
    return fetcher(`/${mode}`, body)
}
