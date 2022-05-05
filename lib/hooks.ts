import useSWR from 'swr'
import fetcher from './fetcher'

export const useUser = () => {
    const { data, error } = useSWR('/user', fetcher)

    return {
        user: data,
        isLoading: !data && !error,
        isError: error
    }
}
