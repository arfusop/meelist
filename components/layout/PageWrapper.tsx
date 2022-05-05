import { Nav } from '../nav'

import styles from './PageWrapper.module.scss'

export const PageWrapper = ({ children }: any) => {
    return (
        <section className={styles.PageWrapper}>
            <Nav />
            {children}
        </section>
    )
}
