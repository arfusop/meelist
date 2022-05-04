import NextLink from 'next/link'
import { useStoreState } from 'easy-peasy'
import { FaArrowAltCircleRight, FaUserAlt } from 'react-icons/fa'

import { decodeToken } from '../../utils/token'
import styles from './Nav.module.scss'

const Nav = () => {
    const user = useStoreState((state: any) => state.user)
    const isLoggedIn = user?.id

    const onAccountIconClick = () => {
        console.log(user)
    }

    const onLogoutClick = () => {
        console.log(user)
        decodeToken()
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
