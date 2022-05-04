import NextLink from 'next/link'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { FaArrowAltCircleRight, FaUserAlt } from 'react-icons/fa'

import fetcher from '../../lib/fetcher'
import { decodeToken } from '../../utils/token'
import styles from './Nav.module.scss'

const Nav = () => {
    const user = useStoreState((state: any) => state.user)
    const { setUser } = useStoreState((state: any) => state)
    const isLoggedIn = user?.id

    const onAccountIconClick = () => {
        console.log(user)
    }

    const onLogoutClick = async () => {
        console.log('setUser: ', setUser)
        try {
            // await fetcher('/logout')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav className={styles.Nav}>
            <div className="logoWrapper">
                <p>LOGO</p>
            </div>
            <div className={styles.linksWrapper}>
                {isLoggedIn ? (
                    <>
                        <FaUserAlt onClick={onAccountIconClick} />
                        <FaArrowAltCircleRight onClick={onLogoutClick} />
                    </>
                ) : (
                    <>
                        <NextLink href="/register" passHref>
                            Register
                        </NextLink>
                        <NextLink href="/login" passHref>
                            Login
                        </NextLink>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav
