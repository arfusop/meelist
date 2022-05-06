import { useStoreState, useStoreActions } from 'easy-peasy'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useUser } from '../lib/hooks'

const Dashboard = () => {
    const router = useRouter()
    const setUser = useStoreActions((store: any) => store.setUser)
    const { user, isError, isLoading } = useUser()

    useEffect(() => {
        if (isError) {
            router.push('/')
        }
        if (user?.id) {
            setUser(user)
        }
    }, [isError, user])

    if (isLoading) {
        return <span>Loading...</span>
    }

    return <div>Dashboard</div>
}

export async function getStaticProps() {
    return {
        props: {
            protected: true
        }
    }
}

export default Dashboard
