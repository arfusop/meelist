import { useStoreState } from 'easy-peasy'

import Nav from './Nav'
import AuthNav from './AuthNav'

export const NavBar = () => {
    const user = useStoreState((state: any) => state.user)

    if (!user?.id) {
        return <Nav />
    }

    return <AuthNav />
}
