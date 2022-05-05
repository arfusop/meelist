import NextLink from 'next/link'

import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <div className="logoWrapper">
                <p>LOGO</p>
            </div>
            <div className={styles.linksWrapper}>
                <NextLink href="/register" passHref>
                    Register
                </NextLink>
                <NextLink href="/login" passHref>
                    Login
                </NextLink>
            </div>
        </nav>
    )
}

export default Nav
