import { useEffect } from 'react'
import cookie from 'cookie'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { useRouter } from 'next/router'

import { useUser } from '../../lib/hooks'
import { NavBar } from '../nav'
import styles from './PageWrapper.module.scss'

export const PageWrapper = ({ children }: any) => {
    return (
        <section className={styles.PageWrapper}>
            <NavBar />
            {children}
        </section>
    )
}
