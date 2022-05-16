import { useRouter } from 'next/router'
import { useStoreActions } from 'easy-peasy'
import { FaArrowAltCircleRight, FaUserAlt, FaThLarge } from 'react-icons/fa'

import fetcher from '../../lib/fetcher'
import { isActiveNavIcon } from '../../utils/dynamicClasses'
import styles from './Nav.module.scss'

const AuthNav = () => {
    const router = useRouter()
    const setUser = useStoreActions((store: any) => store.setUser)
    const onAccountIconClick = () => {
        const isOnAccountPage = router.pathname.includes('account')
        if (!isOnAccountPage) {
            router.push('/account')
        }
    }
    const onDashboardIconClick = () => {
        const isOnDashboard = router.pathname.includes('dashboard')
        if (!isOnDashboard) {
            router.push('/dashboard')
        }
    }

    const onLogoutClick = async () => {
        try {
            await fetcher('/logout')
            setUser(null)
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
                <FaThLarge
                    className={
                        styles[isActiveNavIcon(router.pathname, 'dashboard')]
                    }
                    onClick={onDashboardIconClick}
                />
                <FaUserAlt
                    className={
                        styles[isActiveNavIcon(router.pathname, 'account')]
                    }
                    onClick={onAccountIconClick}
                />
                <FaArrowAltCircleRight onClick={onLogoutClick} />
            </div>
        </nav>
    )
}

export default AuthNav
