import { useRouter } from 'next/router'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { FaArrowAltCircleRight, FaUserAlt } from 'react-icons/fa'

import fetcher from '../../lib/fetcher'
import styles from './Nav.module.scss'

const AuthNav = () => {
    const router = useRouter()
    const isLoggedIn = true

    const onAccountIconClick = () => {
        // console.log(user)
    }

    const onLogoutClick = async () => {
        try {
            await fetcher('/logout')
            router.push('/')
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
                <FaUserAlt onClick={onAccountIconClick} />
                <FaArrowAltCircleRight onClick={onLogoutClick} />
            </div>
        </nav>
    )
}

export default AuthNav
