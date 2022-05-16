import { VALID_PASSWORD } from './regex'

export const isPasswordValid = (password: string): boolean => {
    return VALID_PASSWORD.test(password)
}
