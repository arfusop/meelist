import { useEffect } from 'react'
import { useStoreState } from 'easy-peasy'
import { useRouter } from 'next/router'

import { Nav } from '../nav'
import { isSessionActive } from '../../utils/token'
import styles from './PageWrapper.module.scss'

export const PageWrapper = ({ children, pageProps }: any) => {
    const router = useRouter()
    // const user = useStoreState((state: any) => state.user)

    useEffect(() => {
        // if (pageProps.protected && !user?.id) {
        // router.push('/')
        // }
        // console.log('pageProps: ', pageProps)
        isSessionActive()
    }, [])

    return (
        <section className={styles.PageWrapper}>
            <Nav />
            {children}
        </section>
    )
}
