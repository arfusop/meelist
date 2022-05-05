import { useStoreState } from 'easy-peasy'

import Nav from './Nav'
import AuthNav from './AuthNav'

// export { Nav }
export const NavBar = () => {
    const user = useStoreState((state: any) => state.user)

    if (!user) {
        return <Nav />
    }

    return <AuthNav />
}
