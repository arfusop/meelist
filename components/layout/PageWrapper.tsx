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
